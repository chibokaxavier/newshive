import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Body = ({ news }) => {
  //   const { articles } = news;
  const router = useRouter();
  return (
    <div>
      {news.map((article, i) => (
        <div key={i}>
          {article.author}
        </div>
      ))}
    </div>
  );
};

export default Body;
