import axios, { AxiosResponse } from 'axios';
import {
  actionChannel,
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { TodoListRespnse } from '../../../types';
import { readTask, taskListFailure, taskListSuccess } from '../actions';

function* asyncFetchRequest({ payload }: ReturnType<typeof readTask>): any {
  try {
    const response: AxiosResponse<TodoListRespnse> = yield call(async() =>
      await axios.get(`http://localhost:8000/Read`)
    );
    yield put(taskListSuccess(response.data.response));
  } catch (error: unknown) {
    yield put(taskListFailure());
    console.log(error);
  }

}

export function* watchFetchTodoList() {
  yield takeLatest(readTask, asyncFetchRequest);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchTodoList)
  ])
}
