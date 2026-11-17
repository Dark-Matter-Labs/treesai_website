import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import Tools from '../components/home/Tools';
import Services from '../components/home/Services';
import Supporters from '../components/home/Supporters';
import ProjectStories from '../components/home/ProjectStories';
import Resources from '../components/home/Resources';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <div className='bg-white overflow-hidden'>
      <NavBar />
      <main>
        <Hero />
        <div className='global-margin'>
          <Intro />
          <Tools />
          <Services />
          <Supporters />
          <ProjectStories />
        </div>
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
