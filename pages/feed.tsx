import type { NextPage } from "next"
import Button from "../components/Button"

const Feed: NextPage = () => {
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto p-4 space-y-4">
      <p className="text-center">HSBC Salaray Review Request</p>
      <Button>APPROVE</Button>
      <Button isDanger>REJECT</Button>
    </div>
  )
}

export default Feed
