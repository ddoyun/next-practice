import { NextPage } from "next";
import { useRouter } from "next/router";

// 동적 페이지 라우터 => 컴포넌트에 대괄호가 있어야 함
// push 메소드를 사용하여 페이지 이동 트리거 가능
const Detail: NextPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  const onPageLoadHandler = () => {
    router.push("/news");
  };
  return (
    <>
      <h1>Detail Page</h1>
      <p>{newsId}</p>
      <button onClick={onPageLoadHandler}>Go To News Page</button>
    </>
  );
};

export default Detail;
