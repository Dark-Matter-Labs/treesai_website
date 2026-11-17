import { CONTACT_EMAIL } from '../../links';

// Small bold text on phones, the h3 display size from `sm` up.
const responsiveH3 = 'bold-intro-sm sm:text-3xl sm:font-medium sm:leading-5';

const prompts = [
  {
    shape: 'bg-registry',
    text: 'Ready to turn over a new leaf in urban nature financing? Get in touch to grow a greener future together.',
    action: 'Get in touch',
    buttonClass: 'bg-gradient-to-r from-indigo-600 to-green-700 hover:opacity-90',
  },
  {
    shape: 'bg-invest-contact',
    text: 'Want to understand how we develop co-investment strategies for Nature-based Solutions?',
    action: 'Be the next pilot',
    buttonClass: 'bg-dark-wood-800 hover:bg-dark-wood-700',
  },
];

export default function Contact() {
  return (
    <section id='contact' className='my-20 global-margin'>
      <div className='my-10 text-center'>
        <h2 className='text-dark-wood-800'>Contact us</h2>
        <h3 className={responsiveH3}>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className='underline sm:no-underline sm:hover:underline underline-offset-4'
          >
            {CONTACT_EMAIL}
          </a>
        </h3>
      </div>
      <div className='lg:flex justify-around gap-8'>
        {prompts.map((prompt) => (
          <div key={prompt.action} className='flex flex-col items-center'>
            <div
              className={`${prompt.shape} w-full max-w-[534px] aspect-[534/323] bg-contain bg-center px-8 flex justify-center items-center`}
            >
              <h3 className={`text-white-200 max-w-sm px-4 sm:px-0 ${responsiveH3}`}>
                {prompt.text}
              </h3>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={`btn px-8 my-10 border border-transparent shadow-sm text-white ${prompt.buttonClass}`}
            >
              {prompt.action}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
