import { useRouter } from "next/router";

// Catch-All 라우터는 어떤 경로이며, 많은 세그먼트를
// 갖는지에 상관없이 동일한 컴포넌트를 불러올 수 있음
const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>Blog posts</h1>
    </>
  );
};

export default BlogPostsPage;
