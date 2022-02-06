import * as actions from "../actions";
import { handleActions } from "redux-actions";

const defaultState = {
  isLoading: false,
  errors: null,
  userData: {},
  message: null,
  success: false,
};

export const registerReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
      errors: null,
    }),
    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
      console.log(payload.response.message);
      const { success, message, ...rest } = payload.response;
      return { ...state, isLoading: false, success, message };
    },
    [actions.SIGN_UP_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);
