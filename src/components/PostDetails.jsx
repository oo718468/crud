import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PostdatailsBig from "../stlyesTag/PostdatailsBig";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://655ef5e2879575426b443c29.mockapi.io/api/users/${id}`
        );
        if (response.status === 200) {
          setPost(response.data);
        } else {
          console.error("Failed to fetch post data");
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PostdatailsBig
        name={post.name}
        username={post.username}
        email={post.email}
        contact={post.contact}
        time={post.createdAt}
        roleName={post.roleName}
        address={post.address}
        button={<Link to={`/edit/${id}`}>Edit</Link>}
      />
      {/* <p>{post.name}</p>
      <p>{post.username}</p>
      <p>{post.email}</p>
      <p>{post.contact}</p>
      <p>{post.createdAt}</p>
      <p>{post.roleName}</p>
      <p>{post.address}</p> */}
    </div>
  );
};

export default PostDetails;
