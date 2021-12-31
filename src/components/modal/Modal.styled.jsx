import tw, { styled } from "twin.macro";

export const ModalWrapper = styled.div(() => [
  tw`flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center 
  sm:(block p-0)`,
]);

export const ModalOverlay = styled.div(() => [
  tw`fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity duration-300 ease-out`,
]);

export const ModalContent = styled.div(() => [
  tw`
    inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl opacity-100 translate-y-0 scale-100 transform transition-all 
    sm:(my-8 align-middle max-w-lg w-full)
  `,
]);

export const ModalButton = styled.button(() => [
  tw`
    w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium 
    focus:(outline-none ring-2 ring-offset-2)
    sm:(ml-3 w-auto text-sm)
  `,
]);
