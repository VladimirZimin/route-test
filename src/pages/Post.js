import React from "react";
import posts from "../post.json";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Post = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const mail = searchParams.get("mail", "id") ?? "";

  const updateQueryName = (evt) => {
    const value = evt.target.value;
    if (value === "") {
      return setSearchParams({});
    }

    setSearchParams({ mail: value, page: 1 });
  };

  const visibleMail = posts.filter((post) => String(post.email).includes(mail));

  return (
    <div>
      <input type="text" onChange={updateQueryName} value={mail} />

      <ul>
        {visibleMail.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`${post.id}`} state={{ from: location }}>
                {post.email}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Post;
