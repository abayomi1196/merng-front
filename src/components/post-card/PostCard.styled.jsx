import tw, { styled, css } from "twin.macro";

export const ImageWrapper = styled.div(() => [
  tw`
    h-64 w-auto flex-none bg-cover rounded-t text-center overflow-hidden
    lg:(h-auto w-48 rounded-t-none rounded-l)`,

  css`
    & {
      background-image: url("https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80");
      background-position: center;
      flex: 2;
    }
  `,
]);

export const TextContent = styled.div(() => [
  tw`
    border-r border-b border-l border-gray-400 bg-white rounded-b p-4 flex flex-col gap-5 justify-end leading-normal
    lg:(border-l-0 border-t border-gray-400 rounded-b-none rounded-r)
  `,

  css`
    & {
      flex: 3;

      > div {
        p {
          ${tw`text-gray-700 text-base`}
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
        ${tw`w-10 h-10 rounded-full mr-4 object-cover`}
      }

      > div {
        p:first-of-type {
          ${tw`text-gray-900 leading-none`}
        }

        p:last-of-type {
          ${tw`text-gray-600 text-xs`}
        }
      }
    }
  `,
]);
