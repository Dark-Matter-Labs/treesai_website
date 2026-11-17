export default function GetInTouch() {
  return (
    <div id='contact' className='my-20 global-margin'>
      <div className='my-10 grid'>
        <div className='place-self-center text-center max-w-3xl '>
          <h2 className='text-dark-wood-800'>Contact us</h2>
          <h3 className='hidden sm:block'>
            <a
              href='mailto:treesai@darkmatterlabs.org'
              className='hover:underline underline-offset-4'
            >
              treesai@darkmatterlabs.org
            </a>
          </h3>
          <p className='block sm:hidden bold-intro-sm'>
            <a href='mailto:treesai@darkmatterlabs.org' className='underline underline-offset-4'>
              treesai@darkmatterlabs.org
            </a>
          </p>
        </div>
      </div>
      <div className='lg:flex justify-around gap-8'>
        <div className=' flex justify-center flex-col'>
          <div className='bg-registry w-full max-w-[534px] aspect-[534/323] bg-contain bg-center mx-auto px-8 flex justify-center items-center'>
            <h3 className='text-white-200 max-w-sm hidden sm:block'>
              Ready to turn over a new leaf in urban nature financing? Get in touch to grow a
              greener future together.
            </h3>
            <p className='text-white-200 max-w-sm block sm:hidden bold-intro-sm px-4'>
              Ready to turn over a new leaf in urban nature financing? Get in touch to grow a
              greener future together.
            </p>
          </div>
          <div className='mx-auto'>
            <a
              href='mailto:treesai@darkmatterlabs.org'
              className='m-auto bold-intro-sm inline-flex justify-center rounded-full border border-transparent bg-gradient-to-r from-indigo-600 to-green-700 my-10 py-2 px-8 text-white shadow-sm hover:opacity-90'
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className=' flex justify-center flex-col'>
          <div className='bg-invest-contact w-full max-w-[534px] aspect-[534/323] bg-contain bg-center mx-auto px-8 flex justify-center items-center'>
            <h3 className='text-white-200 max-w-sm hidden sm:block'>
              Want to understand how we develop co-investment strategies for Nature-based Solutions?
            </h3>
            <p className='text-white-200 max-w-sm block sm:hidden bold-intro-sm px-4'>
              Want to understand how we develop co-investment strategies for Nature-based Solutions?
            </p>
          </div>
          <div className='mx-auto'>
            <a
              href='mailto:treesai@darkmatterlabs.org'
              className='m-auto bold-intro-sm inline-flex justify-center rounded-full border border-transparent bg-dark-wood-800 my-10 py-2 px-8 text-white shadow-sm hover:bg-dark-wood-700'
            >
              Be the next pilot
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
