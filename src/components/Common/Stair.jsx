import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stair = ({ children }) => {
  const stairParentref = useRef(null);
  const pageRef = useRef(null);

  const location = useLocation().pathname;
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairParentref.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParentref.current, {
      display: "none",
    });

    tl.to(".stair", {
      y: "0%",
    });
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1,
      // scale: 1.2,
    });
  }, [location]);
  return (
    <div>
      <div ref={stairParentref} className="h-screen  top-0 w-full z-20 fixed ">
        <div className="h-full w-full   flex   ">
          <div className="stair bg-black h-full w-1/5 "> </div>
          <div className="stair bg-black h-full w-1/5 "> </div>
          <div className="stair bg-black h-full w-1/5 "> </div>
          <div className="stair bg-black h-full w-1/5 "> </div>
          <div className="stair bg-black h-full w-1/5  "> </div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stair;
