export const GET_ARTICLES = "GET_ARTICLES";
export const GET_ARTICLES_SUCCESS = "GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "GET_ARTICLES_FAILURE";

export const ADD_ARTICLE = "ADD_ARTICLE";
export const ADD_ARTICLE_SUCCESS = "ADD_ARTICLE_SUCCESS";
export const ADD_ARTICLE_FAILURE = "ADD_ARTICLE_FAILURE";

export const UPDATE_ARTICLE = "UPDATE_ARTICLE";
export const UPDATE_ARTICLE_SUCCESS = "UPDATE_ARTICLE_SUCCESS";
export const UPDATE_ARTICLE_FAILURE = "UPDATE_ARTICLE_FAILURE";

export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS";
export const DELETE_ARTICLE_FAILURE = "DELETE_ARTICLE_FAILURE";

export const DELETE_ALL_ARTICLES = "DELETE_ALL_ARTICLES";
export const DELETE_ALL_ARTICLES_SUCCESS = "DELETE_ALL_ARTICLES_SUCCESS";
export const DELETE_ALL_ARTICLES_FAILURE = "DELETE_ALL_ARTICLES_FAILURE";

export const getArticles = () => ({
  type: GET_ARTICLES,
});

export const getArticlesSuccess = (articles) => ({
  type: GET_ARTICLES_SUCCESS,
  payload: articles,
});

export const getArticlesFailure = (err) => ({
  type: GET_ARTICLES_FAILURE,
  payload: err,
});

export const addArticle = (article) => ({
  type: ADD_ARTICLE,
  payload: article,
});

export const addArticleSuccess = (article) => ({
  type: ADD_ARTICLE_SUCCESS,
  payload: article,
});
export const addArticleFailure = (err) => ({
  type: ADD_ARTICLE_FAILURE,
  payload: err,
});

export const updateArticle = (id, updatedArticle) => ({
  type: UPDATE_ARTICLE,
  payload: {
    id,
    article: updatedArticle,
  },
});

export const updateArticleSuccess = (id, updatedArticle) => ({
  type: UPDATE_ARTICLE_SUCCESS,
  payload: {
    id,
    article: updatedArticle,
  },
});

export const updateArticleFailure = (err) => ({
  type: UPDATE_ARTICLE_FAILURE,
  payload: err,
});

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: id,
});

export const deleteArticleSuccess = (id) => ({
  type: DELETE_ARTICLE_SUCCESS,
  payload: id,
});

export const deleteArticleFailure = (err) => ({
  type: DELETE_ARTICLE_FAILURE,
  payload: err,
});

export const deleteAllArticles = () => ({
  type: DELETE_ALL_ARTICLES,
});

export const deleteAllArticlesSuccess = () => ({
  type: DELETE_ALL_ARTICLES_SUCCESS,
});

export const deleteAllArticlesFailure = (err) => ({
  type: DELETE_ALL_ARTICLES_FAILURE,
  payload: err,
});

const initialState = {
  article: [],
  error: null,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };

    case GET_ARTICLES_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };

    case ADD_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: state.articles.map((article) =>
          action.payload.article.id === article.id
            ? { article, ...action.payload.article }
            : article
        ),
      };
    case UPDATE_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => action.payload.id !== article.id
        ),
      };
    case DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [],
      };
    case DELETE_ALL_ARTICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
