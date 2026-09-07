const ProjectCard = (props) => {
  return (
    <div className="w-full h-130  mb-4 flex gap-4 ">
      <div className="w-1/2 h-full group relative hover:rounded-4xl overflow-hidden ">
        <img
          className="h-full w-full object-cover transition-all duration-500"
          src={props.image1}
          alt="first image"
        />
        <div className="group-hover:opacity-100 opacity-0  flex items-center justify-center left-0  h-full w-full bg-black/10 top-0 absolute">
          <h2 className="uppercase text-6xl font-[font1] border-2 pt-2 px-0 w-[35vw] text-center font-bold text-white rounded-full">
            view project
          </h2>
        </div>
      </div>
      <div className="w-1/2 h-full group relative hover:rounded-4xl overflow-hidden ">
        <img
          className="h-full w-full object-cover transition-all duration-500"
        src={props.image2}
          alt="first image"
        />
        <div className="group-hover:opacity-100 opacity-0  flex items-center justify-center left-0  h-full w-full bg-black/10 top-0 absolute">
          <h2 className="uppercase text-6xl font-[font1] border-2 pt-2 px-0 w-[35vw] text-center font-bold text-white rounded-full">
            view project
          </h2>
        </div>
      </div>
     
    </div>
  );
};

export default ProjectCard;
