import { Component } from 'react';

export default class Vision extends Component {
  render() {
    return (
      <>
        <div className='global-margin pt-10  bg-black overflow-hidden vimeo-container rounded-tl-[120px] rounded-r-[120px] '>
          <iframe
            title='banner video'
            className=''
            src='https://player.vimeo.com/video/590882809?h=2d4c9e1a57?api=1&background=1&autoplay=1&loop=1&dnt=1&muted=1'
            allowFullScreen
          ></iframe>
          <div className=' video-overlay'>
            <div className='grid grid-cols-2 gap-8 '>
              <div className='mx-auto max-w-2xl pl-6 pt-4 lg:text-left lg:flex lg:items-center'>
                <div className='lg:py-24'>
                  <div className=''>
                    <img className='h-8 sm:h-20' src='assets/TreesAI_logo.svg' alt='TreesAI logo' />
                  </div>
                  <h1 className='mt-4  text-white hidden sm:block'>
                    <span className='block'>Revaluing nature as urban infrastructure.</span>
                  </h1>
                  <h2 className='mt-4  text-white block sm:hidden'>
                    <span className='block'>Revaluing nature as urban infrastructure.</span>
                  </h2>
                  {/* <div className='mt-10 sm:mt-12 sm:mb-12'>
                    <a
                      href='https://lbs-interface.netlify.app/'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-md text-white bg-green-800 hover:bg-green-600'
                    >
                      Check the LBS app
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='pt-20 sm:pt-40 px-4 pb-4'>
              <p className='book-info-sm text-dark-wood-500'>
                Image: screenshot from video by our partners: Phil Wilkes and Mat Disney, UCL
                Geography and NERC National Centre for Earth Observation.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
