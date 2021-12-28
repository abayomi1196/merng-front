import "twin.macro";
import "styled-components/macro";
import { useQuery } from "@apollo/client";

import { FETCH_POSTS } from "../graphql/queries/fetchPosts";
import { PostCard } from "../components";
import { PostsWrapper } from "../styles/Home.styled";

function Home() {
  const { data, loading } = useQuery(FETCH_POSTS);

  const posts = data?.getPosts;

  console.log(posts, loading);
  return (
    <div tw='max-w-7xl mx-auto px-2 sm:(px-6) lg:(px-8)'>
      <h1>Recent Posts</h1>
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
