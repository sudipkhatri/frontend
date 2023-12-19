import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import Skeleton from "./Skeleton";
import {url} from "../url.js";
import { useNavigate } from "react-router-dom";

export default function MyPost() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true; // This flag denotes if the component is mounted
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${url}/api/post/user/${userId}`, {
            headers: {authorization: token}
          }
        );
        if (isMounted) {
          setPosts(response.data.userDetails.posts);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false; // Cleanup function sets the flag to false
    };
  }, []);

  // if (isLoading) {
  //   return <div className="w-screen h-screen flex justify-center items-center">Loading...</div>;
  // }

  if (error) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="w-full border-t min-h-[80vh] py-4 flex-col flex  items-center">
      <div className="container mx-auto">
        <div className="flex w-full px-6 mt-2">
          <h2 className="text-2xl font-semibold">My Posts</h2>
        </div>
        {posts.length === 0 && !isLoading && (
          <div className="text-black px-6 pt-2 font-semibold">
            <h1>You Don't Have Any Posts</h1>
            <button
            className="p-3 border mt-3 rounded-lg w-[120px] text-white bg-indigo-600 pointer"
            onClick={()=>navigate('/add')}
            >
              Create One
            </button>
          </div>
        )}
        <div
          className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 
          justify-items-center justify-center gap-y-20 gap-x-1 mt-10 mb-5"
        >
          {isLoading && (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          )}
          {posts?.map((post, index) => {
            const { _id, users, title, description, imageUrl, address, price } =
              post;
            return (
              <PostCard
                key={index} // Assuming each post has a unique 'id'
                id={_id}
                users={users}
                title={title}
                description={description}
                imageUrl={imageUrl}
                address={address}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
