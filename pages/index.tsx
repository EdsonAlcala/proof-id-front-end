import type { NextPage } from "next"
import Button from "../components/Button"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto p-4 space-y-4">
      <p className="text-center">Privacy in your hands</p>
      <Button>LOGIN</Button>
    </div>
  )
}

export default Home
