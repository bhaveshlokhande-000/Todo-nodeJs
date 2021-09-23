import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import articleReducer from "./ducks/article";
import rootSaga from "./sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(articleReducer, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
