import { call, put, takeEvery } from "redux-saga/effects";

import { isApiCallAction } from "../utils/isApiCallAction";
import { createActionWithPostfix } from "../utils/createActionWithPostfix";
import { apiCallMapping } from "./apiCallMapping";

import { REQUEST_POSTFIXES } from "../constants/requestPostfixes";

function* watchRequestWorker(action) {
  try {
    const foundApiCall = apiCallMapping(action);
    const response = yield call(foundApiCall, action.payload);

    yield put(
      createActionWithPostfix(action, REQUEST_POSTFIXES.SUCCESS, response.data)
    );
  } catch (error) {
    yield put(
      createActionWithPostfix(action, REQUEST_POSTFIXES.FAIL, error.message)
    );
  }
}

export function* watchRequest() {
  yield takeEvery(isApiCallAction, watchRequestWorker);
}
