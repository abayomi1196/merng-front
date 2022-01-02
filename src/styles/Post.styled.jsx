import tw, { styled, css } from "twin.macro";

export const Container = styled.div`
  ${tw`
    w-full bg-gray-100 bg-opacity-20 max-w-xs mx-auto my-3 py-8 rounded-md text-gray-700 h-full shadow-xl 
    lg:(flex max-w-4xl mx-0)
  `}
`;

export const ProfileWrapper = styled.div(() => [
  tw`
    flex flex-col justify-between p-4 border-r-0 lg:(border-r-2 border-gray-300)
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
      }

      p {
        ${tw`italic mt-3`}
      }
    }
  `,
]);

export const PostWrapper = styled.div(() => [
  tw`flex flex-col gap-4 justify-center items-start lg:(gap-0 justify-between) py-4 px-8 `,

  css`
    & {
      flex: 3;

      p {
        ${tw`mt-12`}
      }

      & > div:first-of-type {
        ${tw`flex justify-end items-center`}
      }
    }
  `,
]);
