import { Hero } from '@/home/partials/hero';
import Navbar from '@/home/partials/navbar';

const Home = () => {
  return (
    <div className='bg-base-100 flex-col items-center justify-center p-4'>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
