import React from "react";
import { render } from "react-dom";
import ArticleList from "./components/ArticleList";
import "./app.css";

function App() {
  return (
    <div>
      <ArticleList />
    </div>
  );
}

render(<App />, window.root);
