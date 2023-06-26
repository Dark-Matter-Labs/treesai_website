import { Component } from 'react';

import NavBar from './NavBar';

export default class Vision extends Component {
  render() {
    return (
      <>
        <div className='pt-10 bg-gray-900 lg:pt-8 lg:pb-14 md:p-20 pb-10 lg:overflow-hidden vimeo-container heightFull'>
          <NavBar />
          <iframe
            title='banner video'
            src='https://player.vimeo.com/video/590882809?h=2d4c9e1a57?api=1&background=1&autoplay=1&loop=1&dnt=1&muted=1'
            allowFullScreen
          ></iframe>
          <div className='mx-auto max-w-7xl lg:px-8 video-overlay'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                <div className='lg:py-24'>
                  <h1 className='font-grotesk mt-4 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl'>
                    <span className='block'>Pioneering a new era of multi- beneficiary infrastructures for climate resilience and collective prosperity.</span>
                  </h1>
                  <div className='mt-10 sm:mt-12 sm:mb-12'>
                    <a
                      href='http://eepurl.com/hFsY1n'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-green2'
                    >
                      Get notified when we launch
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:pt-40 lg:pt-40 sm:pl-4'>
              <p className='text-sm text-gray2'>
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
