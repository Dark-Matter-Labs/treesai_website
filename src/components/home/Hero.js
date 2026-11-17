import { MAILING_LIST_URL } from '../../links';

const VIDEO_URL =
  'https://player.vimeo.com/video/590882809?h=2d4c9e1a57&api=1&background=1&autoplay=1&loop=1&dnt=1&muted=1';

export default function Hero() {
  return (
    <div className='global-margin pt-10 bg-black overflow-hidden vimeo-container rounded-tl-[120px] rounded-r-[120px]'>
      <iframe title='Lidar scan of two trees' src={VIDEO_URL} allowFullScreen />
      <div className='video-overlay'>
        <div className='grid grid-cols-2 gap-8'>
          <div className='col-span-2 lg:col-span-1 max-w-2xl px-6 pt-4 lg:flex lg:items-center'>
            <div className='lg:py-24'>
              <img className='h-8 sm:h-20' src='assets/TAI.svg' alt='Trees as Infrastructure' />
              <h1 className='mt-4 text-white text-4xl sm:text-5xl'>
                Revaluing nature as urban infrastructure.
              </h1>
              <div className='pt-10 flex flex-wrap items-center gap-3'>
                <a href='#tools' className='btn btn-green px-5'>
                  Explore the tools
                </a>
                <a href='#contact' className='btn btn-outline-light px-5'>
                  Talk to us
                </a>
                <a
                  href={MAILING_LIST_URL}
                  target='_blank'
                  rel='noreferrer noopener'
                  className='bold-intro-sm text-white underline underline-offset-4 hover:text-green-400 px-2 py-2'
                >
                  Join mailing list
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-20 sm:pt-40 px-4 pb-4'>
          <p className='book-info-sm text-dark-wood-500'>
            Video: By our partners: Phil Wilkes and Mat Disney, UCL Geography and NERC National
            Centre for Earth Observation.
          </p>
        </div>
      </div>
    </div>
  );
}
