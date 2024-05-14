import Vision from '../components/Vision';
import NavBar from '../components/NavBar';
import ContentSections from '../components/ContentSection';
import Reports from '../components/Reports';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='bg-white'>
      <div className='relative overflow-hidden'>
        <main>
          <NavBar />
          <Vision />
          <ContentSections />
          <Reports />
          <GetInTouch />
          <Footer />
        </main>
      </div>
    </div>
  );
}
