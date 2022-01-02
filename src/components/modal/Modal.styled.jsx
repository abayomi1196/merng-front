import tw, { styled, css } from "twin.macro";

export const ModalWrapper = styled.div(() => [
  tw`flex items-center justify-center min-h-screen pt-4 px-4 text-center 
  sm:(block p-0)`,
]);

export const ModalOverlay = styled.div(() => [
  tw`fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity duration-300 ease-out`,
]);

export const ModalContent = styled.div(() => [
  tw`
    inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl opacity-100 max-w-xs w-full translate-y-0 scale-100 transform transition-all 
    sm:(my-8 align-middle max-w-xl w-full)
  `,
]);

export const ModalButton = styled.button(() => [
  tw`
    inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-xs font-medium w-full
    focus:(outline-none ring-2 ring-offset-2)
    sm:(ml-3 w-auto text-sm my-2)
  `,
]);

export const InputWrapper = styled.div(() => [
  tw`inline-block mb-4 w-full relative`,

  css`
    & {
      textarea {
        ${tw`block border border-gray-300 w-full p-3 rounded-md text-gray-800
            focus:(outline-none ring-2 ring-offset-2 ring-gray-500)
          `}
      }
      small {
        ${tw`text-red-400 text-xs inline-block ml-2 italic`}
      }

      svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        font-size: 1.8rem;
        ${tw`text-gray-700 cursor-pointer hocus:(text-gray-800)`}
      }
    }
  `,
]);
