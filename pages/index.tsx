import type { NextPage } from "next"
import Button from "../components/Button"
import asset_logo from "@/assets/logo.jpg"
import Image from "next/image"
import Link from "next/link"

const Profile: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col w-full max-w-2xl mx-auto p-4 items-center justify-center">
      <div className="w-32 h-20">
        <Image
          alt=""
          className="w-32 h-20"
          src={asset_logo}
          layout="responsive"
        />
      </div>
      <Link href="/profile">
        <a className="w-full">
          <Button className="w-full">LOGIN</Button>
        </a>
      </Link>
    </div>
  )
}

export default Profile
