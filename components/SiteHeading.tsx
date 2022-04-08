import { PropsWithChildren } from "react";
//from-fuchsia-600 to-pink-600
//from-red-400 to-red-800
export default function SiteHeading({ children }: PropsWithChildren<{}>) {
  return <h1 className="text-6xl my-8 font-extrabold self-center text-transparent 
  bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">{children}</h1>
}
