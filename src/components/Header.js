export default function Header() {
  return (
    <>
      <div className='bg-header py-10 my-5 md:my-0 lg:py-64 flex flex-col items-center justify-center global-margin'>
        <div className='max-w-lg text-center'>
          <div className='hidden md:block'>
            <img className='' src='assets/TreesAI_logo.svg' alt='TreesAI logo' />
          </div>
          <div>
            <h2 className='mt-4 text-white-200'>Revaluing nature as urban infrastructure</h2>
          </div>
        </div>
      </div>
    </>
  );
}
