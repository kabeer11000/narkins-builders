import React, { FC } from 'react';
import { Fragment, useRef, useState } from 'react'
import { Dialog as BaseDialog, Transition } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


interface DialogProps {
  open: boolean, onClose: () => void, body: string, title: string, showButtons: boolean, cancelButton: {
    title: string, onClick: () => void
  }, acceptButton: {
    title: string, onClick: () => void
  }
}

const Dialog: FC<DialogProps> = ({ open, onClose, title, body, showButtons, cancelButton, acceptButton }) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <BaseDialog as="div" className="relative z-[9999999]" initialFocus={cancelButtonRef} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <BaseDialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div> */}
                    <div className="mt-3 text-center sm:ml-4- sm:mt-0 sm:text-left w-full">
                      <BaseDialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {title}
                      </BaseDialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {showButtons && <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => onClose()}
                  >
                    {cancelButton.title}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => onClose()}
                    ref={cancelButtonRef}
                  >
                    {acceptButton.title}
                  </button>
                </div>}
              </BaseDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </BaseDialog>
    </Transition.Root>
  );
}

export default Dialog;
export const useDialogState = () => {
  const [open, setOpen] = useState(false);
  return ({
    props: { open, onClose: () => setOpen(false) },
    open: () => setOpen(true),
    close: () => setOpen(false),
  })
}