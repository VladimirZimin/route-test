import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import posts from "../post.json";

const PostName = () => {
  const [name, setName] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    const post = posts.find((post) => Number(post.id) === Number(postId));
    setName(post.name.toUpperCase());
  }, [postId]);

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default PostName;
