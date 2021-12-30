import "twin.macro";
import "styled-components/macro";
import { useQuery } from "@apollo/client";

import { FETCH_POSTS } from "../graphql/queries/fetchPosts";
import { PostCard } from "../components";
import { PostsWrapper } from "../styles/Home.styled";

function Home() {
  const { data, loading } = useQuery(FETCH_POSTS);

  const posts = data?.getPosts;

  return (
    <div>
      <h1 tw='text-2xl font-bold text-center mt-5 mb-3 lg:(text-3xl text-left mt-8 mb-5)'>
        recent posts
      </h1>
      <PostsWrapper>
        {loading ? (
          <p>Loading...</p>
        ) : (
          posts.length &&
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </PostsWrapper>
    </div>
  );
}

export default Home;
