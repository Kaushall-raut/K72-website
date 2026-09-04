import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { NavBarContext } from "../../context/Navcontext";

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null);
  const fullScreenRef = useRef(null);
  const { navOpen,setNavOpen } = useContext(NavBarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".RingStair", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navLink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".RingStair", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navLink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
      delay: 1.2,
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsap.to(".fullscreennav", {
          display: "block",
        });
        console.log(navOpen,"from full");
        
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen],
  );
  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden h-screen text-white w-full  bg-black"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full   flex   ">
          <div className="RingStair bg-black h-full w-1/5 "> </div>
          <div className="RingStair bg-black h-full w-1/5 "> </div>
          <div className="RingStair bg-black h-full w-1/5 "> </div>
          <div className="RingStair bg-black h-full w-1/5 "> </div>
          <div className="RingStair bg-black h-full w-1/5  "> </div>
        </div>
      </div>
      <div ref={fullNavLinkRef} className="relative">
        <div className="navLink flex w-full justify-between mb-0 items-start">
          <div className="p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div onClick={()=>setNavOpen(false)} className="h-full w-32 relative  cursor-pointer p-4">
            <div  className="bg-[#D3FD50] h-32 w-1 absolute -rotate-45 origin-top"></div>
            <div className="bg-[#D3FD50] h-32 w-1 right-3 absolute rotate-45 origin-top"></div>
          </div>
        </div>
        <div className="py-14">
          <div className="link origin-top border-t relative">
            <h1 className="font-[font2]  text-[8vw] text-center pt-4 leading-[0.8] uppercase ">
              work
            </h1>
            <div className="moveLink absolute  h-full flex top-0 text-black bg-[#D3FD50]">
              <div className="moveX flex gap-4 items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8]">
                  SEE EVERYTHING{" "}
                </h2>
                <img
                  className="h-20 w-56 rounded-full object-fill  shrink-0"
                  src="public\images\PJC_SiteK72_Thumbnail_640x290.jpg"
                />
                <h2 className="whitespace-nowrap  font-[font2] text-[8vw] text-center leading-[0.8]">
                  SEE EVERYTHING{" "}
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover shrink-0 "
                  src="public\images\Thumbnail.png"
                />
              </div>
              <div className="moveX flex items-center overflow-x-auto">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8]">
                  SEE EVERYTHING{" "}
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover  shrink-0"
                  src="public\images\PJC_SiteK72_Thumbnail_640x290.jpg"
                />
                <h2 className="whitespace-nowrap  font-[font2] text-[8vw] text-center leading-[0.8]">
                  SEE EVERYTHING{" "}
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover shrink-0 "
                  src="public\images\Thumbnail.png"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-t relative uppercase">
            <h1 className="font-[font2] text-[8vw] text-center pt-4 leading-[0.8] uppercase ">
              agency
            </h1>
            <div className="moveLink absolute  h-full flex top-0 text-black bg-[#D3FD50]">
              <div className="moveX flex gap-4 items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8]">
                  Know us{" "}
                </h2>
                <img
                  className="h-20 w-56 rounded-full object-fill  shrink-0"
                  src="public\images\PJC_SiteK72_Thumbnail_640x290.jpg"
                />
                <h2 className="whitespace-nowrap  font-[font2] text-[8vw] text-center leading-[0.8]">
                  Know us{" "}
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover shrink-0 "
                  src="public\images\Thumbnail.png"
                />
              </div>
              <div className="moveX flex items-center overflow-x-auto">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8]">
                  Know us{" "}
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover  shrink-0"
                  src="public\images\PJC_SiteK72_Thumbnail_640x290.jpg"
                />
                <h2 className="whitespace-nowrap  font-[font2] text-[8vw] text-center leading-[0.8]">
                  Know us{" "}
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover shrink-0 "
                  src="public\images\Thumbnail.png"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-t relative">
            <h1 className="font-[font2] text-[8vw] text-center pt-4 leading-[0.8] uppercase ">
              contact
            </h1>
            <div className="moveLink absolute  h-full flex top-0 text-black bg-[#D3FD50]">
              <div className="moveX flex gap-4 items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8]">
                  SEE EVERYTHING{" "}
                </h2>
                <img
                  className="h-20 w-56 rounded-full object-fill  shrink-0"
                  src="public\images\PJC_SiteK72_Thumbnail_640x290.jpg"
                />
                <h2 className="whitespace-nowrap  font-[font2] text-[8vw] text-center leading-[0.8]">
                  SEE EVERYTHING{" "}
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover shrink-0 "
                  src="public\images\Thumbnail.png"
                />
              </div>
              <div className="moveX flex items-center overflow-x-auto">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8]">
                  SEE EVERYTHING{" "}
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover  shrink-0"
                  src="public\images\PJC_SiteK72_Thumbnail_640x290.jpg"
                />
                <h2 className="whitespace-nowrap  font-[font2] text-[8vw] text-center leading-[0.8]">
                  SEE EVERYTHING{" "}
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover shrink-0 "
                  src="public\images\Thumbnail.png"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-y relative">
            <h1 className="font-[font2] text-[8vw] text-center pt-4 leading-[0.8] uppercase ">
              blog
            </h1>
            <div className="moveLink absolute  h-full flex top-0 text-black  bg-[#D3FD50]">
              <div className="moveX flex gap-4 items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8]">
                  read articles
                </h2>
                <img
                  className="h-20 w-56 rounded-full object-fill  shrink-0"
                  src="public\images\PJC_SiteK72_Thumbnail_640x290.jpg"
                />
                <h2 className="whitespace-nowrap  font-[font2] text-[8vw] text-center leading-[0.8]">
                  read articles
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover shrink-0 "
                  src="public\images\Thumbnail.png"
                />
              </div>
              <div className="moveX flex items-center overflow-x-auto">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8]">
                  read articles
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover  shrink-0"
                  src="public\images\PJC_SiteK72_Thumbnail_640x290.jpg"
                />
                <h2 className="whitespace-nowrap  font-[font2] text-[8vw] text-center leading-[0.8]">
                  read articles
                </h2>
                <img
                  className="h-20 w-56  rounded-full object-cover shrink-0 "
                  src="public\images\Thumbnail.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
