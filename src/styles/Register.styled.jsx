import tw, { styled, css } from "twin.macro";

export const InputWrapper = styled.div(() => [
  tw`inline-block mb-4 w-full`,

  css`
    & {
      input {
        ${tw`block border border-white w-full p-3 rounded-md 
            focus:(outline-none ring-2 ring-offset-1 ring-gray-300)
          `}
      }
      small {
        ${tw`text-red-400 text-xs inline-block ml-2 italic`}
      }
    }
  `,
]);

export const Input = styled.input(() => [
  tw`
    block border border-white w-full p-3 rounded-md 
    focus:(outline-none ring-2 ring-offset-1 ring-gray-300)
  `,
]);

export const SubmitButton = styled.button(() => [
  tw`
    w-full text-center py-3 rounded bg-gray-500 text-white my-5 flex items-center justify-center
    hover:(bg-gray-700)
    focus:(bg-gray-900 outline-none ring-2 ring-offset-1 ring-gray-900)
    disabled:(cursor-not-allowed bg-gray-400)
  `,
]);
