import AboutMe from '@/home/partials/aboutme';
import ExperienceTimeline from '@/home/partials/ExperienceTimeLine';
import { FAQSection } from '@/home/partials/faq';
import { Hero } from '@/home/partials/hero';
import Navbar from '@/home/partials/navbar';
import PortfolioGrid from '@/home/partials/portfolio';
import Service from '@/home/partials/service';
import Skills from '@/home/partials/skills';
import Testimonials from '@/home/partials/testimonials';
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
      <ExperienceTimeline />
      <PortfolioGrid />
      <Testimonials />
      {/* <FAQSection /> */}
    </div>
  );
};

export default Home;
