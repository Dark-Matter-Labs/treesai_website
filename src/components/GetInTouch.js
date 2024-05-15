export default function GetInTouch() {
  return (
    <div id='contact' className='my-20 global-margin'>
      <div className='my-10 grid'>
        <div className='place-self-center text-center max-w-3xl '>
          <h2 className='text-dark-wood-800'>Contact us</h2>
          <h3 className='hidden sm:block'>treesai@darkmatterlabs.org</h3>
          <p className='block sm:hidden bold-intro-sm '>treesai@darkmatterlabs.org</p>
        </div>
      </div>
      <div className='grid grid-col-1 sm:grid-cols-2 '>
        <div className='flex justify-center flex-col'>
          <div className='bg-registry py-28 max-w-[70%] ml-[20%] flex justify-center'>
            <h3 className='text-white-200 max-w-sm hidden sm:block'>
              If you think our work sounds interesting, then send us an email.
            </h3>
            <p className='text-white-200 max-w-sm block sm:hidden bold-intro-sm px-4'>
              If you think our work sounds interesting, then send us an email.
            </p>
          </div>
          <div className='mx-auto'>
            <a href='mailto:treesai@darkmatterlabs.org'>
              <button
                type='button'
                className='m-auto bold-intro-sm inline-flex justify-center rounded-full border border-transparent bg-gradient-to-r from-indigo-600 to-green-500 my-10 py-2 px-8 text-white shadow-sm hover:bg-dark-wood-700 '
              >
                Get in touch
              </button>
            </a>
          </div>
        </div>
        <div className='flex justify-center flex-col'>
          <div className='bg-invest-contact py-28 max-w-[70%] ml-[20%] flex justify-center'>
            <h3 className='text-white-200 max-w-sm hidden sm:block'>
              Want to understand how we develop co-investment strategies for Nature-based Solutions?
            </h3>
            <p className='text-white-200 max-w-sm block sm:hidden bold-intro-sm px-4'>
              Want to understand how we develop co-investment strategies for Nature-based Solutions?
            </p>
          </div>
          <div className='mx-auto'>
            <a href='mailto:treesai@darkmatterlabs.org'>
              <button
                type='button'
                className='m-auto bold-intro-sm inline-flex justify-center rounded-full border border-transparent bg-dark-wood-800 my-10 py-2 px-8 text-white shadow-sm hover:bg-dark-wood-700 '
              >
                Be the next pilot
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
