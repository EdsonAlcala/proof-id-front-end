import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
// import asset_hsbc from "@/assets/hsbc.jpg"
import Image from "next/image"
import Button from "../components/Button"
import housing_asset from "@/assets/housing-anywhere.png"

const noOp = () => { }
function Modal({ isOpen = false, onClose = noOp }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <MockedModal onClose={onClose} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

function MockedModal({ onClose }: { onClose: any }) {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4">
      <div className="w-32 h-20">
        <Image
          alt=""
          className="w-32 h-20"
          src={housing_asset}
          layout="responsive"
        />
      </div>
      <h2 className="text-center font-bold text-lg">
        Salary Proof Review Request
      </h2>
      <div className="flex flex-col space-y-2 my-4">
        <p className="text-center">
          Housing Anywhere is requesting to access the proof that your salary is more than
          $50k annually.
        </p>
        <p className="text-center">
          By accepting you agree to share your salary proof to HSBC.
        </p>
      </div>
      <div className="flex flex-col w-full space-y-4">
        <Button onClick={onClose}>APPROVE</Button>
        <Button onClick={onClose} isDanger>
          REJECT
        </Button>
      </div>
    </div>
  )
}

export default Modal
