import React, { useState, useRef, useEffect } from "react";
import ArticleDescription from "./ArticleDescription";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllArticles, getArticles } from "../redux/ducks/article";

function ArticleList(props) {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articles);

  const [selectedArticle, setSelectedArticle] = useState();
  const ref = useRef(null);
  const filter = useRef(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const deleteAllArticlesHandler = () => {
    dispatch(deleteAllArticles());
    props.history.push("/");
  };

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  const search = () => {
    let result;
    if (searchKeyword !== "") {
      result = articles.filter((article) => {
        return article.title
          .toLowerCase()
          .includes(searchKeyword.trim().toLowerCase());
      });
      setSearchResult(result);
      filter.current = true;
    } else {
      filter.current = false;
      setSearchResult();
    }
  };

  return (
    <>
      <div className="row m-4 p-2">
        <div className="col-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
            ></input>
            <button
              type="button"
              className="input-group-text bg-white"
              onClick={() => {
                setSelectedArticle(null);
                search();
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col-5">
          <h2 className="p-1">Tutorials List</h2>
          <ul className="list-group">
            {!filter.current
              ? articles?.map((article, key) => (
                  <li
                    key={key}
                    className="list-group-item p-3"
                    onClick={(e) => {
                      ref.current?.classList.remove("active");
                      e.target.classList.add("active");
                      setSelectedArticle(article);
                      ref.current = e.target;
                    }}
                  >
                    {article.title}
                  </li>
                ))
              : searchResult?.map((article, key) => (
                  <li
                    key={key + searchKeyword}
                    className="list-group-item p-3"
                    onClick={(e) => {
                      ref.current?.classList.remove("active");
                      e.target.classList.add("active");
                      setSelectedArticle(article);
                      ref.current = e.target;
                    }}
                  >
                    {article.title}
                  </li>
                ))}
          </ul>
          <button
            type="button"
            className="btn btn-danger btn-sm mt-2"
            onClick={() => {
              setSelectedArticle(null);
              deleteAllArticlesHandler();
            }}
            disabled={articles?.length === 0}
          >
            Remove All
          </button>
        </div>
        <div className="col-6 p-1 offset-1">
          {selectedArticle && <ArticleDescription article={selectedArticle} />}
        </div>
      </div>
    </>
  );
}

export default ArticleList;
