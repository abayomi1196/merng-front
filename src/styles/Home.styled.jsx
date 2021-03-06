import tw, { styled, css } from "twin.macro";

export const PostsWrapper = styled.div(() => [
  tw`grid items-center justify-center`,

  css`
    & {
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      ${tw`gap-8 lg:(gap-5)`}
    }
  `,
]);

export const Header = styled.h1(() => [
  tw`
    text-2xl font-bold flex space-x-2 items-center justify-center mt-5 mb-4 lg:(justify-start mt-8 mb-8)
  `,

  css`
    & {
      svg {
        cursor: pointer;
        ${tw`text-gray-500 hocus:(text-gray-700)`}
      }
    }
  `,
]);
