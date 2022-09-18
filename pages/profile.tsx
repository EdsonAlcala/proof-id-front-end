import Blockies from "react-blockies"
import type { NextPage } from "next"
import Button from "../components/Button"

import asset_hsbc from "@/assets/hsbc.jpg"
import asset_logo from "@/assets/logo.jpg"
import Image from "next/image"
import Modal from "../components/Modal"
import { useEffect, useState } from "react"

const Item = () => {
  return (
    <div className="flex space-x-4 border p-4 rounded">
      <div className="w-16 h-16">
        <Image
          alt=""
          className="w-20 h-20"
          src={asset_hsbc}
          layout="responsive"
        />
      </div>
      <div>
        <h4 className="text-lg">HSBC Salary Proof</h4>
        <p>Issued 12 days ago</p>
      </div>
    </div>
  )
}
const Profile: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 5_000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto p-6 space-y-4">
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
      <div className="flex flex-col items-center justify-center">
        <div className="w-32 h-20">
          <Image
            alt=""
            className="w-32 h-20"
            src={asset_logo}
            layout="responsive"
          />
        </div>
        <div className="overflow-hidden rounded-full">
          <Blockies
            seed="Jeremy"
            size={7}
            scale={10}
            color="#fb923c"
            bgColor="rgb(255, 195, 147)"
            spotColor="#000"
          />
        </div>
        <h2>anon.eth</h2>
      </div>
      <h2 className="font-bold text-xl mt-4">Proofs</h2>
      <div className="flex flex-col space-y-2">
        <Item />
      </div>
    </div>
  )
}

export default Profile
