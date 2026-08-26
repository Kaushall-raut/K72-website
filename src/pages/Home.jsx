
import HomeBottomText from "../components/Home/HomeBottomText";
import HomeHeroText from "../components/Home/HomeHeroText";
import Video from "../components/Home/Video";


const Home = () => {

  return (
    <div>
     
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen justify-between w-screen flex flex-col relative">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
