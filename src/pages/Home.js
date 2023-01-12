import Vision from '../components/Vision';
import ValueProp from '../components/ValueProp';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className='font-favorit bg-white-200'>
      <div className='relative overflow-hidden'>
        <NavBar />
        <main>
          <Vision />
          <ValueProp />
          <Footer />
        </main>
      </div>
    </div>
  );
}
