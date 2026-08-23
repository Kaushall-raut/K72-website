import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="flex items-center justify-center uppercase gap-2 overflow-hidden font-[font2]">
      <div className="border-3 hover:text-[#D3FD50] h-25  mb-2  flex items-center rounded-full px-9    ">
        <Link to={"agents"} className=" text-[7vw] mt-4  font-bold ">
          Work
        </Link>
      </div>
      <div className="border-3  hover:text-[#D3FD50] h-25  mb-2 rounded-full flex items-center px-9 ">
        <Link to={"agents"} className=" text-[7vw] mt-4 font-bold ">
          Agency
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
