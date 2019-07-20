import React from "react";
import "./Article.css";

const Article = props => {
  if (!props.article) return null;

  const date = new Date(props.article.published_at);
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  return (
    <a
      class="Article"
      href={props.article.canonical_url}
      target="_blank"
      rel="nofollow noreferrer"
    >
      {props.article.cover_image && (
        <img class="Article--CoverImage" src={props.article.cover_image} />
      )}
      <div class="Article--Content">
        {props.article.tag_list && props.article.tag_list.length && (
          <div class="Article--Tags">
            {props.article.tag_list.map(tag => (
              <div class="Article--Tag">{tag}</div>
            ))}
          </div>
        )}
        <h1 class="Article--Title">{props.article.title}</h1>
        {props.article.description && (
          <div class="Article--Description">{props.article.description}</div>
        )}
        <div class="Article--PublishDate">
          {dateString} - {timeString}
        </div>
        <div class="Article--Comments">
          {props.article.comments_count} comments
        </div>
        <div class="Article--Stats">
          {props.article.positive_reactions_count} reactions
        </div>
      </div>
    </a>
  );
};

export default Article;
