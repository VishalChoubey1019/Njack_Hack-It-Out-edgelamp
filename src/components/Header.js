import { AiFillGithub } from "react-icons/ai";

export default function Header() {
  return (
    <div className="md:flex md:items-center md:justify-between px-6 py-4 shadow-md">
      <img src="./navLogo.png" className="ml-8" width={140} alt="" />
      <a href="https://github.com/VishalChoubey1019/Njack_Hack-It-Out-edgelamp"><AiFillGithub className="text-4xl mr-16" /></a>
    </div>
  )
}
