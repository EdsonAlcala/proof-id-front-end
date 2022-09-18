import { PropsWithChildren } from "react"
import { classnames } from "../lib/helpers"

function Button({
  children = null,
  isDanger,
}: PropsWithChildren<{ isDanger?: boolean }>) {
  return (
    <button
      className={classnames(
        "text-white font-bold p-4",
        isDanger ? "bg-red-700" : "bg-orange-400"
      )}
    >
      {children}
    </button>
  )
}

export default Button
