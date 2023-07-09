import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import posts from "../post.json";

const PostDetails = () => {
  const [mail, setMail] = useState(null);
  const { postId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/post");

  useEffect(() => {
    const post = posts.find((post) => Number(post.id) === Number(postId));
    setMail(post.email);
  }, [postId]);

  return (
    <div>
      <Link to={backLinkHref.current}>Back to products</Link>
      <h1>{mail}</h1>
      <ul>
        <li>
          <NavLink to="postname">Name</NavLink>
        </li>
        <li>
          <NavLink to="postbody">Post</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default PostDetails;
