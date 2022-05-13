import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="w-6 h-6 pt-[2px] flex center-items justify-center overflow-hidden ">
      <CircleNotch weight="bold" className="w-5 h-5 animate-spin" />
    </div>
  )
}