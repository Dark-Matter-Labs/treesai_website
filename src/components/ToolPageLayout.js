import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { CONTACT_EMAIL, MAILING_LIST_URL } from '../links';

export default function ToolPageLayout({
  title,
  subtitle,
  children,
  toolUrl,
  toolUrlLabel = 'Open tool',
}) {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header: back + logo */}
      <header className='bg-black py-5 rounded-b-[60px] mb-6'>
        <div className='global-margin flex items-center justify-between'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 book-intro-sm text-white hover:underline underline-offset-4'
          >
            <ArrowLeftIcon className='h-5 w-5' aria-hidden='true' />
            Back to Trees as Infrastructure
          </Link>
          <Link to='/' className='flex-shrink-0'>
            <img className='h-8 w-auto sm:h-10' src='/assets/TreesAI_logo.svg' alt='TreesAI' />
          </Link>
        </div>
      </header>

      <main className='global-margin pb-20'>
        {/* Hero */}
        <div className='max-w-4xl mb-16'>
          <h1 className='text-dark-wood-800'>{title}</h1>
          {subtitle && <p className='book-intro-md mt-4 text-dark-wood-800'>{subtitle}</p>}
        </div>

        {/* Main content */}
        <div>{children}</div>

        {/* Open tool CTA (when we have a live link) */}
        {toolUrl && (
          <div className='mt-16 p-8 rounded-[30px] border border-indigo-600 bg-white-200'>
            <p className='bold-intro-lg text-dark-wood-800 mb-4'>Try the tool</p>
            <p className='book-intro-md text-dark-wood-800 mb-6'>
              Use the live tool to explore data and run your own analysis.
            </p>
            <a
              href={toolUrl}
              target='_blank'
              rel='noreferrer noopener'
              className='btn btn-green px-6 py-3'
            >
              {toolUrlLabel}
            </a>
          </div>
        )}

        {/* Contact / Biz dev CTA */}
        <section className='mt-20 rounded-[30px] border border-indigo-600 bg-white-200 p-8 md:p-12'>
          <h2 className='text-dark-wood-800 mb-4'>Work with us</h2>
          <p className='book-intro-md text-dark-wood-800 max-w-2xl mb-6'>
            Interested in using this tool in your city or organisation? We partner with cities,
            NGOs, and private organisations to deploy our tools and build evidence for investment in
            urban nature.
          </p>
          <div className='flex flex-wrap gap-4'>
            <a href={`mailto:${CONTACT_EMAIL}`} className='btn btn-dark px-6 py-3'>
              Get in touch
            </a>
            <a
              href={MAILING_LIST_URL}
              target='_blank'
              rel='noreferrer noopener'
              className='btn btn-indigo px-6 py-3'
            >
              Join our mailing list
            </a>
          </div>
          <p className='book-info-sm text-dark-wood-700 mt-6'>{CONTACT_EMAIL}</p>
        </section>
      </main>
    </div>
  );
}
