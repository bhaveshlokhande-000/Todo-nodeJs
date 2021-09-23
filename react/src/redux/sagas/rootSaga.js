import { all, fork } from "redux-saga/effects";

import {
  onGetArticles,
  onAddArticle,
  onUpdateArticle,
  onDeleteArticle,
  onDeleteAllArticles,
} from "./handlers/articleHandler";

const articleSagas = [
  fork(onGetArticles),
  fork(onAddArticle),
  fork(onUpdateArticle),
  fork(onDeleteArticle),
  fork(onDeleteAllArticles),
];

export default function* rootSaga() {
  yield all([...articleSagas]);
}
