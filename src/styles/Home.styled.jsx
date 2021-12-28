import tw, { styled, css } from "twin.macro";

// grid grid-flow-col gap-10 auto-cols-max items-center
export const PostsWrapper = styled.div(() => [
  tw`grid items-center justify-center`,

  css`
    & {
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 10px;
    }
  `,
]);
