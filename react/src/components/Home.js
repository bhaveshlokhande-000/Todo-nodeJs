import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";
import ArticleList from "./ArticleList";

function Home() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <ArticleList {...props} />}
          />
          <Route path="/add" render={(props) => <AddForm {...props} />} />

          <Route
            path="/update/:id"
            render={(props) => <UpdateForm {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
