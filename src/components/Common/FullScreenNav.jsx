const FullScreenNav = () => {
  return (
    <div className="h-screen text-white w-full absolute py-32 bg-amber-400">
      <div>
        <div className="link border-t relative">
          <h1 className="font-[font2] text-[8vw] text-center pt-10 leading-[0.8] uppercase ">
           work
          </h1>
          <div className="absolute flex top-0 text-black bg-[#D3FD50]">
            <div className="flex items-center overflow-x-auto">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8]">
                SEE EVERYTHING{" "}
              </h2>
              <img
                className="h-24 w-72 rounded-full object-cover  shrink-0"
                src="public\images\PJC_SiteK72_Thumbnail_640x290.jpg"
              />
              <h2 className="whitespace-nowrap  font-[font2] text-[8vw] text-center leading-[0.8]">
                SEE EVERYTHING{" "}
              </h2>
              <img
                className="h-36 w-96 rounded-full object-cover shrink-0 "
                src="public\images\Thumbnail.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
