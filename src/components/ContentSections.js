import naturePortfolioImage from '../images/nature-portfolios.png';
import natureTokenImage from '../images/nature-tokens.png';
import aiModelImage from '../images/ai-models.png';
import interfaceImage from '../images/interface.png';
import pdIcon from '../images/PD-icon.png';
import investorIcon from '../images/investor-icon.png';
import glasgowImg from '../images/glasgow.jpg';

export default function ContentSections() {
  const logos = [
    { name: 'EIT Climate-KIC', url: 'assets/partner_logos/eit-climatekic.png' },
    { name: 'NatureScot', url: 'assets/partner_logos/NatureScot.png' },
    { name: 'Morgan Stanley', url: 'assets/partner_logos/Morgan_Stanley.png' },
    {
      name: 'World Economic Forum',
      url: 'assets/partner_logos/world_economic_forum.png',
    },
    { name: 'Google.org', url: 'assets/partner_logos/google.org_logo.png' },
  ];

  return (
    <div className='global-margin'>
      <div className='rounded-b-[140px] bg-dark-wood-800'>
        <div className='py-16 '>
          <div className=''>
            <div className='text-center pb-4 border-b border-white-200'>
              <h3 className='mt-2 text-white-200'>Supported by</h3>
            </div>
            <div className='py-10 px-10'>
              <div className='mt-8 flow-root self-center lg:mt-0'>
                <div className='-mt-4 -ml-8 flex flex-wrap justify-center lg:-ml-4'>
                  {logos.map((logo) => (
                    <div
                      key={logo.name}
                      className='mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0'
                    >
                      <img className='h-40' src={logo.url} alt={logo.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='my-10 grid'>
          <div className='place-self-center text-center max-w-3xl '>
            <p className='text-dark-wood-800 book-intro-lg'>TreesAI Solution</p>
            <h2 className='text-dark-wood-800 py-4'>
              TreesAI enables investments in Nature-based Solutions, driving resilience in our
              cities.
            </h2>
          </div>
        </div>
        <div className='bg-problemSolution w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2'>
          <div>
            <div className='bg-dark-wood-800 rounded-tl-[60px] text-center py-2'>
              <h2 className='text-white-200'>Problem</h2>
            </div>
            <div className='bg-dark-wood-600 opacity-40'>
              <p className='medium-intro-md text-white-200 pt-10 pb-[26rem] px-20 max-w-md'>
                Catastrophic climate-related events - such as flooding and heatwaves - are happening
                with increasing severity and frequency across our cities.
              </p>
            </div>
          </div>
          <div>
            <div className='bg-dark-wood-800 rounded-tr-[60px] text-center py-2'>
              <h2 className='text-white-200'>Solution</h2>
            </div>
            <div className='bg-gradient-to-r from-indigo-600 to-green-600 opacity-40'>
              <p className='medium-intro-md text-white-200 pt-10 pb-[16rem] px-20 max-w-md'>
                Nature-based Solutions - such as trees and rain gardens - have the ability to
                decrease flooding and local temperatures. <br />
                <br />
                TreesAI is a marketplace for investing in Nature-based Solutions, growing the
                presence of nature in cities and driving climate resilience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='my-10 grid'>
          <div className='place-self-center text-center max-w-3xl '>
            <h2 className='text-dark-wood-800'>Why us</h2>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-0'>
          <div className='flex flex-col items-center justify-center'>
            <img className='pb-2' src={naturePortfolioImage} alt='' />
            <h3 className='text-dark-wood-800 pb-2'>Nature Portfolios</h3>
            <p className='book-intro-lg text-dark-wood-800 max-w-sm'>
              We aggregate projects into portfolios to multiply the impacts of your investment.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img className='pb-2' src={natureTokenImage} alt='' />
            <h3 className='text-dark-wood-800 pb-2'>Nature-positive tokens</h3>
            <p className='book-intro-lg text-dark-wood-800 max-w-sm'>
              We verify the delivery of positive impacts via our novel and open Proof of Impact
              methodology.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img className='pb-2' src={aiModelImage} alt='' />
            <h3 className='text-dark-wood-800 pb-2'>AI Impact models</h3>
            <p className='book-intro-lg text-dark-wood-800 max-w-sm'>
              We run scenarios to assess the performance of projects and portfolios helping you with
              investment decisions.
            </p>
          </div>
        </div>
      </div>

      <div className='my-20'>
        <div className='bg-white border border-black rounded-[60px] grid grid-cols-1 sm:grid-cols-3 py-10 px-10'>
          <div className='py-40 px-10'>
            <h2 className='text-dark-wood-800'>
              A Registry to evaluate the impact of your projects
            </h2>
            <p className='text-dark-wood-800 book-intro-sm pt-10'>
              TreesAI is working with project developers, local authorities and environmental
              institutions to help them understand the impacts of their Nature-based Solution
              projects and access investment opportunities.
            </p>
            <a href='https://treesai.org/'>
              <button
                type='button'
                className='bold-intro-sm inline-flex justify-center rounded-full border border-transparent bg-dark-wood-800 my-10 py-2 px-8 text-white-200 shadow-sm hover:bg-dark-wood-700 '
              >
                Registry
              </button>
            </a>
          </div>
          <div className='col-span-2 mx-auto'>
            <img src={interfaceImage} alt='TreesAI interface' />
          </div>
        </div>
      </div>

      <div className='my-20 mx-auto max-w-max'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-10'>
          <div className='bg-pd py-10 max-w-2xl'>
            <div className='grid grid-cols-3'>
              <div className='pl-10'>
                <img src={pdIcon} alt='project developer icon'></img>
              </div>
              <div className='col-span-2 max-w-sm ml-5'>
                <h1 className='text-white-200'>Project developers</h1>
                <hr className='my-4 mr-20' />
                <p className='medium-intro-lg text-white-200 pt-10'>
                  Are you a local authority, local landowner, NGO or Community group looking to
                  improve your city by developing Nature-based Solutions?
                </p>
                <p className='medium-intro-lg text-dark-wood-800 pt-10'>
                  Fund your Nature-based Solutions projects
                </p>
                <a href='https://treesai.org/'>
                  <button
                    type='button'
                    className='bold-intro-sm inline-flex justify-center rounded-full border border-transparent bg-dark-wood-800 my-10 py-2 px-8 text-white-200 shadow-sm hover:bg-dark-wood-700 '
                  >
                    Registry
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='bg-investor py-10 max-w-2xl'>
            <div className='grid grid-cols-3'>
              <div className='pl-10'>
                <img src={investorIcon} alt='investor icon'></img>
              </div>
              <div className='col-span-2 max-w-sm ml-5'>
                <h1 className='text-white-200'>Green Urban investors</h1>
                <hr className='my-4 mr-20' />
                <p className='medium-intro-lg text-white-200 pt-10'>
                  Are you a corporation, financial institution or public entity exposed to
                  climate-related flood and heat risks in cities?{' '}
                </p>
                <p className='medium-intro-lg text-dark-wood-800 pt-10'>
                  Invest in Nature to reduce your climate risks
                </p>
                <a href='https://treesai.org/invest'>
                  <button
                    type='button'
                    className='bold-intro-sm inline-flex justify-center rounded-full border border-transparent bg-dark-wood-800 mt-14 py-2 px-8 text-white-200 shadow-sm hover:bg-dark-wood-700 '
                  >
                    Discover more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-20'>
        <div className='rounded-[60px] mt-4 bg-dark-wood-800 py-20 px-20 mt-10'>
          <div className='grid grid-cols-1 sm:grid-cols-3'>
            <div className='max-w-sm'>
              <h2 className='text-white-200 pt-4'>
                Pilot Study: TreesAI is partnering with Glasgow to drive investments in Nature-based
                Solutions.
              </h2>
              <p className='text-white-200 medium-intro-lg pt-5'>
                Public agencies, corporates and financial institutions are launching a pilot to
                co-finance the delivery of projects that reduce Glasgow’s flood risks.
              </p>
              <a href='https://treesai.org/glasgow-nbs-portfolio'>
                <button
                  type='button'
                  className='bold-intro-sm inline-flex justify-center rounded-full border border-transparent bg-white-200 my-10 py-2 px-8 text-dark-wood-800 shadow-sm hover:bg-dark-wood-700 '
                >
                  Learn More
                </button>
              </a>
            </div>
            <div className='col-span-2'>
              <img className='rounded-r-[60px]' src={glasgowImg} alt='Glasgow city' />
            </div>
          </div>
        </div>
      </div>

      <div className='my-20'>
        <div className='my-10 grid'>
          <div className='place-self-center text-center max-w-3xl '>
            <h2 className='text-dark-wood-800'>Contact us</h2>
          </div>
        </div>
        <div className='grid grid-col-1 sm:grid-cols-2 '>
          <div className='flex justify-center flex-col'>
            <div className='bg-registry py-28 max-w-[70%] ml-[20%] flex justify-center'>
              <h3 className='text-white-200 max-w-sm'>
                Want to know more about registering your projects on TreesAI Registry?
              </h3>
            </div>
            <div className='mx-auto'>
              <a href='https://treesai.org/contact'>
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
              <h3 className='text-white-200 max-w-sm'>
                Want to understand how we develop co-investment strategies for Nature-based
                Solutions?
              </h3>
            </div>
            <div className='mx-auto'>
              <a href='https://treesai.org/contact'>
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
    </div>
  );
}
