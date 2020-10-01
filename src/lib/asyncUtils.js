import { call, put } from 'redux-saga/effects';

export const reducerUtils = {
  initial: (data = null) => ({
    data,
    loading: false,
    error: null,
  }),

  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),

  success: (data) => ({
    loading: false,
    data,
    error: null,
  }),

  error: (error) => ({
    loading: false,
    data: null,
    error,
  }),
  reset: (data = null) => reducerUtils.initial(data),
};

export const createAsyncThunk = (type, fetchFunc) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    dispatch({ type });
    try {
      const res = await fetchFunc(param);
      const payload = res.data;
      console.log(payload);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

const defaultIdSelector = (param) => param;

export const createAsyncThunkById = (type, fetchFunc, idSelector = defaultIdSelector) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    const id = idSelector(param);

    dispatch({ type, meta: id });
    try {
      const res = await fetchFunc(param);
      const payload = res.data;
      console.log(payload);
      dispatch({ type: SUCCESS, payload, meta: id });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true, meta: id });
    }
  };
};

export const createAsyncSaga = (type, fetchFunc) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* (action) {
    try {
      const res = yield call(fetchFunc, action?.payload);
      const payload = res.data;
      console.log(payload);
      yield put({ type: SUCCESS, payload });
    } catch (e) {
      yield put({ type: ERROR, payload: e, error: true });
    }
  };
};

export const createAsyncSagaById = (type, fetchFunc) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* (action) {
    const id = action.meta;

    try {
      const res = yield call(fetchFunc, id);
      const payload = res.data;
      yield put({ type: SUCCESS, payload, meta: id });
    } catch (e) {
      yield put({ type: ERROR, payload: e, error: true, meta: id });
    }
  };
};

export const createAsyncActions = (type, key, keepState) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepState && state[key].data),
        };

      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };

      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };

      default:
        return state;
    }
  };
};

export const createAsyncActionsById = (type, key, keepState) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    const id = action.meta;
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(keepState && state[key]?.[id]?.data),
          },
        };

      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.success(action.payload),
          },
        };

      case ERROR:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload),
          },
        };

      default:
        return state;
    }
  };
};
