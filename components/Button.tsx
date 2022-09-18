import { PropsWithChildren } from "react"
import { classnames } from "../lib/helpers"

function Button({
  children = null,
  isDanger,
  onClick,
  className,
}: PropsWithChildren<{
  isDanger?: boolean
  className?: string
  onClick?: () => {}
}>) {
  return (
    <button
      onClick={onClick}
      className={classnames(
        "text-white font-bold p-4",
        isDanger ? "bg-red-700" : "bg-orange-400",
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
