import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import posts from "../post.json";

const PostBody = () => {
  const [text, setText] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    const post = posts.find((post) => Number(post.id) === Number(postId));
    setText(post.body);
  }, [postId]);

  return <div>{text}</div>;
};

export default PostBody;
