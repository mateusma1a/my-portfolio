import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Formation from "./sections/Formation/Formation";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Formation />
      <Experience />
      <Projects />
    </>
  );
};

export default Home;
