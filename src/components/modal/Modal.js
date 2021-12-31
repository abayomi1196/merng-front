import "twin.macro";
import "styled-components/macro";

import {
  ModalContent,
  ModalOverlay,
  ModalWrapper,
  ModalButton,
} from "./Modal.styled";

function Modal({ setShowModal }) {
  return (
    <div
      tw='fixed z-10 inset-0 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
    >
      <ModalWrapper>
        <ModalOverlay />

        <span
          tw='hidden sm:(inline-block align-middle h-screen)'
          aria-hidden='true'
        ></span>

        <ModalContent>
          <div tw='bg-gray-50 px-4 pt-5 pb-4 sm:(p-6 pb-4)'>
            <div tw='mt-3 text-center sm:(mt-0 ml-4 text-left)'>
              <h3
                tw='text-lg leading-6 font-medium text-gray-900'
                id='modal-title'
              >
                add a post
              </h3>

              {/* TODO add image upload later */}
              <p tw='mt-4 text-sm text-gray-500'>
                input for post body goes here
              </p>
            </div>

            {/* btn wrapper */}
            <div tw='mt-5 px-4 py-3 sm:(px-6 flex flex-row-reverse)'>
              <ModalButton
                type='button'
                tw='border-transparent bg-green-600 text-white  hover:bg-green-700 focus:ring-green-500 '
              >
                submit
              </ModalButton>

              <ModalButton
                type='button'
                onClick={() => setShowModal(false)}
                tw='border-gray-300 bg-white text-gray-700 hover:(bg-gray-500 text-white) focus:(outline-none ring-gray-500)'
              >
                cancel
              </ModalButton>
            </div>
          </div>
        </ModalContent>
      </ModalWrapper>
    </div>
  );
}

export default Modal;
