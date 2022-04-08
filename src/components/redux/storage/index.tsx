import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga)

export default store;
