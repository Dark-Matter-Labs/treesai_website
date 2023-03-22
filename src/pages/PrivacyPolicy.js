import { Link } from 'react-router-dom';

import Privacy from '../components/Privacy';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className='bg-gray'>
      <div className='relative overflow-hidden'>
        <div className='mt-10 space-x-8 md:flex md:ml-10'>
          <Link
            to='/'
            className='text-base font-medium text-dark hover:text-gray-300 pointer-cursor'
          >
            ← Back
          </Link>
        </div>
        <Privacy />
        <Footer />
      </div>
    </div>
  );
}
