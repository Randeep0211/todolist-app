import { take, call, all } from 'redux-saga/effects';
import todoSagas from './fetchDataSaga';

export default function* RootSaga() {
  yield all([todoSagas()]);
}
