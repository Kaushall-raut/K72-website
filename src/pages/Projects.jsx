const Projects = () => {
  return (
    <div className="p-4">
      <div className=" bg-red-400 pt-[26vh]">
        <h2 className="font-[font2] text-[12vw] relative  uppercase">
          Work<sup className="text-[8vh] absolute top-12">17</sup>
        </h2>
      </div>
      <div>
        <div className="w-full h-175 mb-4 flex gap-4 bg-amber-600 -mt-18">
          <div className="w-1/2 h-full bg-green-200"></div>
          <div className="w-1/2 h-full bg-blue-300"></div>
        </div>
        <div className="w-full h-175 mb-4 flex gap-4 bg-amber-600 ">
          <div className="w-1/2 h-full bg-green-200"></div>
          <div className="w-1/2 h-full bg-blue-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
