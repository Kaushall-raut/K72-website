import { Link } from "react-router-dom"


const HomeBottomText = () => {
  return (
    <div className="flex items-center justify-center gap-2 font-[font2]">
      <Link className="uppercase text-[6.8vw] border-[2.5px] rounded-full leading-[5.5vw] px-10 pt-4.5 mb-2 font-bold  ">Work</Link>
      <Link className="uppercase text-[6.8vw] border-[2.5px] rounded-full leading-[5.5vw] px-10 pt-4.5 mb-2 font-bold">Agency</Link>
    </div>
  )
}

export default HomeBottomText
