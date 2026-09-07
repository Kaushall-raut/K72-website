import ProjectCard from "../components/Projects/ProjectCard";

const Projects = () => {
  const projectImg = [
    {
      image1: "public/images/work/1.png",
      image2: "public/images/work/2.jpg",
    },
    {
      image1: "public/images/work/3.jpg",
      image2: "public/images/work/4.jpg",
    },
    {
      image1: "public/images/work/5.jpg",
      image2: "public/images/work/6.jpg",
    },
    {
      image1: "public/images/work/7.jpg",
      image2: "public/images/work/8.jpg",
    },
    {
      image1: "public/images/work/9.jpg",
      image2: "public/images/work/10.jpg",
    },
    {
      image1: "public/images/work/11.jpg",
      image2: "public/images/work/12.jpg",
    },
    {
      image1: "public/images/work/13.jpg",
      image2: "public/images/work/14.jpg",
    },
    {
      image1: "public/images/work/15.jpg",
      image2: "public/images/work/16.jpg",
    },
    
  ];
  return (
    <div className="p-4">
      <div className=" mb-2 pt-[26vh]">
        <h2 className="font-[font2] text-[12vw] relative  uppercase">
          Work<sup className="text-[8vh] absolute top-12">17</sup>
        </h2>
      </div>
      <div className="-mt-18">
        {projectImg.map((elem) => {

          return <ProjectCard image1={elem.image1} image2={elem.image2} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
