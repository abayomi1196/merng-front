import "twin.macro";
import "styled-components/macro";
import { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { MdAddCircle } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";

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
        <div tw='h-28 flex flex-col items-center justify-center'>
          <Loader height={50} width={50} type='TailSpin' color='#e5e7eb' />
        </div>
      ) : (
        <p>please create a post..</p>
      )}

      {showModal && <Modal setShowModal={setShowModal} />}

      <ToastContainer />
    </div>
  );
}

export default Home;
