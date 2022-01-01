import tw, { styled, css } from "twin.macro";

export const IconButton = styled.button(() => [
  tw`
    bg-gray-100 text-gray-800 text-xs font-bold py-2 px-2 rounded inline-flex items-center
    hover:(bg-gray-200)
  `,

  css`
    & {
      svg {
        ${tw`fill-current w-4 h-4`}
      }
      span {
        ${tw`text-gray-500 inline-block ml-1 lg:(text-sm)`}
      }
    }
  `,
]);
