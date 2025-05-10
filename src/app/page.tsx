import AboutMe from '@/home/partials/aboutme';
// import Experience from '@/home/partials/experience';
import ExperienceTimeline from '@/home/partials/ExperienceTimeLine';
import { Hero } from '@/home/partials/hero';
import Navbar from '@/home/partials/navbar';
import Service from '@/home/partials/service';
import Skills from '@/home/partials/skills';
import WorkingSection from '@/home/partials/working';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <AboutMe />
      <Skills />
      <WorkingSection />
      {/* <Experience /> */}
      <ExperienceTimeline />
    </div>
  );
};

export default Home;
