import "twin.macro";
import "styled-components/macro";
import { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { MdAddCircle } from "react-icons/md";
import { ToastContainer } from "react-toastify";

import { FETCH_POSTS } from "../graphql/queries/fetchPosts";
import { PostCard, Modal } from "../components";
import { PostsWrapper, Header } from "../styles/Home.styled";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { data, loading } = useQuery(FETCH_POSTS);
  const [showModal, setShowModal] = useState(false);

  const { loggedIn } = useContext(AuthContext);

  const posts = data?.getPosts;

  return (
    <div>
      <Header>
        <span>recent posts</span>{" "}
        {loggedIn && (
          <MdAddCircle onClick={() => setShowModal((prev) => !prev)} />
        )}
      </Header>

      {!loading && posts.length ? (
        <PostsWrapper>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostsWrapper>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        <p>please create a post..</p>
      )}

      {showModal && <Modal setShowModal={setShowModal} />}

      <ToastContainer />
    </div>
  );
}

export default Home;
