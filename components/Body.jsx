import React from "react";

const Body = ({ news }) => {
//   const { articles } = news;
  return (
    <div>
      {news.map((article, i) => (
        <div key={i}>{article.author}</div>
      ))}
    </div>
  );
};

export default Body;
