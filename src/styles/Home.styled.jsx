import tw, { styled, css } from "twin.macro";

export const PostsWrapper = styled.div(() => [
  tw`grid items-center justify-center`,

  css`
    & {
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 20px;
    }
  `,
]);
