import { type NextPage } from "next";
import IntroductionComponent from "./components/IntroductionComponent";
import SkillsOverview from "./components/SkillsOverview";
const Home: NextPage = () => {
  return (
    <>
      <div className="container mx-auto flex min-h-screen flex-col py-10">
      <IntroductionComponent />
      <SkillsOverview />
      
      </div>
    </>
  );
};

export default Home;
