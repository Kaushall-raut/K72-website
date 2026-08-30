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

        start: "top 18%",

        end: "top -100%",

        pin: true,

        pinSpacing: true,

        pinReparent: true,

        scrub: 1,

        anticipatePin: 1,

        onUpdate: (elem) => {
          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
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
      <div className="section1 relative py-1 ">
        <div
          ref={imageDivRef}
          className="  absolute h-[20vw] w-[14vw] overflow-hidden rounded-3xl  top-50 -z-10 left-[31vw] bg-red-800"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover  "
            src="images/Carl_480x640.jpg"
            alt="member image "
          />
        </div>

        <div className="relative  font-[font2]">
          <div className="text-center mt-[53vh]">
            <h1 className="text-[19vw] uppercase leading-[18vw]">
              SEVEN7Y <br /> TWO
            </h1>
          </div>

          <div className="pl-[40%] mt-20 ">
            <p className="text-6xl">
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>

      <div className="section2"></div>
    </div>
  );
};

export default Agents;
