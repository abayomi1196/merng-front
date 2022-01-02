import tw, { styled, css } from "twin.macro";

export const Container = styled.div`
  ${tw`
    w-full bg-gray-100 bg-opacity-20 max-w-xs mx-auto my-3 py-8 rounded-md text-gray-700 h-full shadow-xl 
    lg:(flex max-w-4xl mx-0)
  `}
`;

export const ProfileWrapper = styled.div(() => [
  tw`
    flex flex-col p-4 border-r-0 lg:(border-r-2 border-gray-300)
  `,

  css`
    & {
      flex: 1;
      text-align: center;
      div {
        img {
          ${tw`w-24 h-24 rounded-full mx-auto mb-2 object-cover object-top`}
        }

        span {
          ${tw`font-bold text-lg`}
        }

        p {
          ${tw`italic mt-0 text-sm lg:(mt-3)`}
        }
      }
    }
  `,
]);

export const PostWrapper = styled.div(() => [
  tw`flex flex-col gap-4 py-2  justify-center items-center lg:(gap-0 justify-end items-start py-4 ) px-8 `,

  css`
    & {
      flex: 3;

      p {
        ${tw`text-center lg:(mb-4)`}
      }

      & > div:first-of-type {
        ${tw`flex justify-end items-center`}
      }

      & > div:nth-of-type(2) {
        ${tw`mt-5 flex w-full flex-col text-center lg:(mt-12 text-left w-full)`}

        div {
          ${tw`border-b-2 pb-2 mb-2 text-sm`}

          h5 {
            ${tw`font-bold mb-1`}

            span {
              ${tw`italic font-normal`}
            }
          }
        }

        textarea {
          ${tw`block mt-3 border border-gray-400 text-sm w-full py-1 px-2 rounded
            focus:(outline-none ring-2 ring-offset-1 ring-gray-300)
          `}
        }
        small {
          ${tw`text-red-400 flex`}
        }

        button {
          min-width: 65px;

          ${tw`
            bg-green-100 text-gray-800 text-xs font-bold py-2 px-3 mt-2 rounded flex items-center
            lg:(text-sm py-3 px-5)
            hover:(bg-green-200)
            focus:(bg-green-500 outline-none ring-2 ring-offset-1 ring-green-500)
            disabled:(cursor-not-allowed bg-green-100)
          `}
        }
      }
    }
  `,
]);
