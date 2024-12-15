import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import GithubPage from "./components/homepage/github";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Education />
      <GithubPage />
      <ContactSection />
    </>
  );
}
