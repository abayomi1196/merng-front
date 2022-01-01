import tw, { styled, css } from "twin.macro";

export const ImageWrapper = styled.div(() => [
  tw`
    w-auto flex-none rounded-t text-center overflow-hidden
    lg:(h-auto rounded-t-none rounded-l)`,

  css`
    & {
      flex: 2;

      img {
        object-fit: cover;
        width: 100%;
        ${tw`h-36 lg:(h-full)`}
      }
    }
  `,
]);

export const TextContent = styled.div(() => [
  tw`
    border bg-white rounded p-4 flex flex-col gap-8 justify-between leading-normal
    lg:(border-l-0 border-t rounded-b-none rounded-r gap-2)
  `,

  css`
    & {
      flex: 3;

      > div {
        p {
          ${tw`text-gray-700 text-sm lg:(text-base)`}
        }
      }
    }
  `,
]);

export const UserDetails = styled.div(() => [
  tw`flex items-center text-sm`,

  css`
    & {
      img {
        ${tw`w-10 h-10 rounded-full mr-4 object-cover lg:(w-12 h-12)`}
      }

      > div {
        ${tw`flex flex-col items-start justify-center gap-1.5`}

        p:first-of-type {
          ${tw`text-gray-900 leading-none`}
        }

        a {
          ${tw`text-gray-600 text-xs hover:(underline text-gray-800)`}
        }
      }
    }
  `,
]);

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
