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
