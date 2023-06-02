import { NextPage } from "next";
import Link from "next/link";

const News: NextPage = () => {
  // 더미 데이터
  const newsPge = [
    { id: "1", name: "first-news" },
    { id: "2", name: "second-news" },
  ];
  return (
    <>
      <h1>News Page</h1>
      {newsPge.map((news) => (
        <li key={news.id}>
          <Link
            href={{ pathname: "/news/[newsId]", query: { newsId: news.id } }}
          >
            {news.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default News;
