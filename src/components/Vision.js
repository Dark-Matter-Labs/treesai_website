import { Component } from 'react';

export default class Vision extends Component {
  render() {
    return (
      <>
        <div className='global-margin pt-10 bg-black lg:overflow-hidden vimeo-container rounded-tl-[120px] rounded-r-[120px] heightFull'>
          <iframe
            title='banner video'
            className=''
            src='https://player.vimeo.com/video/590882809?h=2d4c9e1a57?api=1&background=1&autoplay=1&loop=1&dnt=1&muted=1'
            allowFullScreen
          ></iframe>
          <div className=' video-overlay'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8 '>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                <div className='lg:py-24'>
                <div className=''>
                      <img
                        className='h-20'
                        src='assets/TreesAI_logo.svg'
                        alt='TreesAI logo'
                      />
                    </div>
                  <h1 className='mt-4  text-white'>
                    <span className='block'>Revaluing nature as urban infrastructure.</span>
                  </h1>
                  <div className='mt-10 sm:mt-12 sm:mb-12'>
                    <a
                      href='https://lbs-interface.netlify.app/'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-md text-white bg-green-800 hover:bg-green-600'
                    >
                      Check the LBS app
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:pt-40 lg:pt-40 sm:pl-4 pb-4'>
              <p className='text-sm text-white'>
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
