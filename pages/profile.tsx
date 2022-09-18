import Blockies from "react-blockies"
import type { NextPage } from "next"
import Button from "../components/Button"

const Item = () => {
  return (
    <div className="flex space-x-2 border p-4 rounded">
      <div>IMAGEN</div>
      <div>
        <h4 className="text-lg">TITULO</h4>
        <p>Description</p>
      </div>
    </div>
  )
}
const Profile: NextPage = () => {
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto p-4 space-y-4">
      <Blockies
        seed="Jeremy"
        size={10}
        scale={3}
        color="#dfe"
        bgColor="#ffe"
        spotColor="#abc"
        className="identicon"
      />
      <Button>LOGIN</Button>
      <h2>PROOFS</h2>
      <div className="flex flex-col space-y-2">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Profile
