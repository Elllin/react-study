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
      const payload = await fetchFunc(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

export const createAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(),
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
