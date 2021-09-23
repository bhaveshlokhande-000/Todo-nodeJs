import { takeEvery, put, call } from "redux-saga/effects";

import {
  getArticlesSuccess,
  getArticlesFailure,
  addArticleSuccess,
  addArticleFailure,
  updateArticleSuccess,
  updateArticleFailure,
  deleteArticleSuccess,
  deleteArticleFailure,
  deleteAllArticlesSuccess,
  deleteAllArticlesFailure,
} from "../../ducks/article";

import {
  getArticlesService,
  addArticleService,
  updateArticleService,
  deleteArticleService,
  deleteArticlesService,
} from "../requests/articleService";

import {
  GET_ARTICLES,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  DELETE_ALL_ARTICLES,
} from "../../ducks/article";

export function* onGetArticlesAsync() {
  try {
    const response = yield call(getArticlesService);
    yield put(getArticlesSuccess(response.data));
  } catch (error) {
    yield put(getArticlesFailure(error));
  }
}

export function* onGetArticles() {
  yield takeEvery(GET_ARTICLES, onGetArticlesAsync);
}

export function* onAddArticleAsync({ payload: article }) {
  try {
    const response = yield call(addArticleService(article));
    const newArticle = {
      ...article,
      id: response.id,
    };
    yield put(addArticleSuccess(newArticle));
  } catch (error) {
    yield put(addArticleFailure(error));
  }
}

export function* onAddArticle() {
  yield takeEvery(ADD_ARTICLE, onAddArticleAsync);
}

export function* onUpdateArticleAsync({ payload: { id, article } }) {
  try {
    const response = yield call(() => {
      updateArticleService(id, article);
    });
    yield put(updateArticleSuccess({ id, article }));
  } catch (error) {
    yield put(updateArticleFailure(error));
  }
}

export function* onUpdateArticle() {
  yield takeEvery(UPDATE_ARTICLE, onUpdateArticleAsync);
}

export function* onDeleteArticleAsync({ payload: id }) {
  try {
    const response = yield call(() => {
      deleteArticleService(id);
    });
    yield put(deleteArticleSuccess(id));
  } catch (error) {
    yield put(deleteArticleFailure(error));
  }
}

export function* onDeleteArticle() {
  yield takeEvery(DELETE_ARTICLE, onDeleteArticleAsync);
}

export function* onDeleteAllArticlesAsync({ payload: id }) {
  try {
    const response = yield call(deleteArticlesService);
    yield put(deleteAllArticlesSuccess(id));
  } catch (error) {
    yield put(deleteAllArticlesFailure(error));
  }
}

export function* onDeleteAllArticles() {
  yield takeEvery(DELETE_ALL_ARTICLES, onDeleteAllArticlesAsync);
}
