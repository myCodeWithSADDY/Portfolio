import dynamic from "next/dynamic";

// import AboutSection from "./components/homepage/about";
// import ContactSection from "./components/homepage/contact";
// import Education from "./components/homepage/education";
// import GithubPage from "./components/homepage/github";
// import HeroSection from "./components/homepage/hero-section";
// import Projects from "./components/homepage/projects";
// import Skills from "./components/homepage/skills";

const HeroSection = dynamic(
  () => import("./components/homepage/hero-section"),
  { ssr: false }
);
const AboutSection = dynamic(() => import("./components/homepage/about"), {
  ssr: false,
});
const Skills = dynamic(() => import("./components/homepage/skills"), {
  ssr: false,
});
const Projects = dynamic(() => import("./components/homepage/projects"), {
  ssr: false,
});
const Education = dynamic(() => import("./components/homepage/education"), {
  ssr: false,
});
const GithubPage = dynamic(() => import("./components/homepage/github"), {
  ssr: false,
});
const ContactSection = dynamic(() => import("./components/homepage/contact"), {
  ssr: false,
});
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
