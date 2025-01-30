import AboutSection from "./components/homepage/about/index";
import ContactSection from "./components/homepage/contact/index";
import Education from "./components/homepage/education/index";
import Experience from "./components/homepage/experience/index";
import GithubPage from "./components/homepage/github/index";
import HeroSection from "./components/homepage/hero-section/index";
import Projects from "./components/homepage/projects/index";
import Skills from "./components/homepage/skills/index";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <GithubPage />
      <ContactSection />
    </>
  );
}
