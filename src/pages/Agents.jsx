import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agents = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "images/Carl_480x640.jpg",
    "images/Olivier_480x640.jpg",
    "images/CAMILLE_480X640_2.jpg",
    "images/joel_480X640_3.jpg",
    "images/MEGGIE_480X640_2.jpg",
    "images/MEL_480X640.jpg",
    "images/Michele_480X640.jpg",
    "images/ChantalG_480x640.jpg",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -200%",
        pin: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.ceil(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          // console.log(imageIndex);
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute h-[37vh] w-[14vw] overflow-hidden rounded-3xl  top-48 left-[31vw]"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover  "
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt="member image "
            loading="lazy"
          />
        </div>
        <div className="relative  font-[font2]">
          <div className="text-center mt-[53vh]">
            <h1 className="text-[19vw] uppercase leading-[18vw]">
              SEVEN7Y <br /> TWO
            </h1>
          </div>
          <div className="pl-[40%] mt-1 ">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and
              open-minded, and we make sure creativity crowds out ego from every
              corner. A brand is a living thing, with values, a personality and
              a story. If we ignore that, we can achieve short-term success, but
              not influence that goes the distance. We bring that perspective to
              every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2"></div>
    </div>
  );
};

export default Agents;
