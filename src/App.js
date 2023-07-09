import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
// import Layout from "components/Layout";
// import Home from "pages/Home";
// import Post from "pages/Post";
// import PostDetails from "pages/PostDetails";
// import PostName from "components/PostName";
// import PostBody from "components/PostBody";

const Layout = lazy(() => import("components/Layout"));
const Home = lazy(() => import("pages/Home"));
const Post = lazy(() => import("pages/Post"));
const PostDetails = lazy(() => import("pages/PostDetails"));
const PostName = lazy(() => import("components/PostName"));
const PostBody = lazy(() => import("components/PostBody"));

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post" element={<Post />} />
          <Route path="post/:postId" element={<PostDetails />}>
            <Route path="postname" element={<PostName />} />
            <Route path="postbody" element={<PostBody />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
