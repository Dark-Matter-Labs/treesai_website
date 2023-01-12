import Header from '../components/Header';
import ContentSections from '../components/ContentSections';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className='font-favorit bg-white-200'>
      <div className='relative overflow-hidden'>
        <NavBar />
        <main>
          <Header />
          <ContentSections />
          <Footer />
        </main>
      </div>
    </div>
  );
}
