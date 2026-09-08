import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center pt-3 mx-2  mt-32">
      <div className= "lg:text-[9.6vw] text-[12.6vw] leading-[8.8vw] flex items-center justify-center uppercase">
        The spark for
      </div>
      <div className="lg:text-[9.6vw] text-[12.6vw] leading-[8.8vw] flex items-center justify-center uppercase">
        all{" "}
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-5">
          <Video />
        </div>{" "}
        things
      </div>
      <div className="lg:text-[9.6vw] text-[12.6vw] leading-[8.8vw] flex items-center justify-center uppercase">
        creative
      </div>
    </div>
  );
};
export default HomeHeroText;
