import naturePortfolioImage from '../images/nature-portfolios.png';
import natureTokenImage from '../images/nature-tokens.png';
import aiModelImage from '../images/ai-models.png';
import SectionHeader from './SectionHeader';

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
              <div className='py-20'>
        <div className='my-10 grid'>
          <div className='place-self-center text-center max-w-3xl '>
            <h2 className='text-dark-wood-800'>Trees can provide multiple benefits</h2>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0'>
          <div className='flex flex-col items-center justify-center'>
            <img className='pb-2 h-48 ' src={naturePortfolioImage} alt='' />
            <h3 className='text-dark-wood-800 pb-2'>Improving air quality</h3>
            <p className='book-intro-lg text-dark-wood-800 max-w-sm'>
            Removing pollutants from the air
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img className='pb-2 h-48' src={natureTokenImage} alt='' />
            <h3 className='text-dark-wood-800 pb-2'>Reducing heat island effects</h3>
            <p className='book-intro-lg text-dark-wood-800 max-w-sm'>
            Reducing summer temperatures by 5 degrees
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img className='pb-2 h-48' src={aiModelImage} alt='' />
            <h3 className='text-dark-wood-800 pb-2'>Reducing flooding</h3>
            <p className='book-intro-lg text-dark-wood-800 max-w-sm'>
            Absorbing rainwater
            </p>
          </div>
        </div>
      </div>
      <div className='py-20'>
        <div className='my-10 grid'>
          <div className='place-self-center text-center max-w-4xl '>
            <h2 className='text-dark-wood-800'>TreesAI can support existing urban infrastructures</h2>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0'>
          <div className='flex flex-col items-center justify-center'>
            <img className='pb-2 h-48 ' src={naturePortfolioImage} alt='' />
            <h3 className='text-dark-wood-800 pb-2'>Health services</h3>
            <p className='book-intro-lg text-dark-wood-800 max-w-sm'>
            Alleviating acute and chronic respiratory issues
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img className='pb-2 h-48' src={natureTokenImage} alt='' />
            <h3 className='text-dark-wood-800 pb-2'>Energy Services</h3>
            <p className='book-intro-lg text-dark-wood-800 max-w-sm'>
            Reducing the need for air conditioning in surrounding buildings
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <img className='pb-2 h-48' src={aiModelImage} alt='' />
            <h3 className='text-dark-wood-800 pb-2'>Waste water services</h3>
            <p className='book-intro-lg text-dark-wood-800 max-w-sm'>
            Providing carbon-positive alternatives to sewerage facilities
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='bg-problemSolution h-[40rem] my-20'>
          <div>
            <div className='mx-auto max-w-2xl align-middle pt-40'>
            <h2 className='text-white '>We’re creating the required infrastructure to help cities and local communities secure funding for urban trees and green spaces.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-b-[140px] bg-dark-wood-800 mb-40 '>
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

      <SectionHeader title='Data Services' />
          <div
            className='bg-white-200 rounded-[50px] border border-indigo-600 px-20 py-10 '
            
          >
            <div className='px-4'>
                <div className=' rounded-lg'>
                  
                 <h2>Using existing data to create actionable insights; allowing cities to prioritise and implement Nature-based Solutions (NbS)</h2>
                </div>
              
            </div>
          </div>
          <hr className='mx-20 border-8 border-green-600' />
          <div
            className='bg-white-200 rounded-[50px] border border-indigo-600 px-20 py-10 grid grid-cols-1 sm:grid-cols-3 mb-20'
            
          >
            <div>
                <h3 className='text-black'>Spatial Analysis</h3>
            </div>
            <div className='sm:col-span-2'>
                <p className='book-intro-md'>Understanding a location's potential for harnessing Nature-Based Solutions as a means of climate adaptation and mitigation.</p>
            </div>
            <hr className='sm:col-span-3 my-8 border-indigo-600' />

            <div>
                <h3 className='text-black'>Baseline and Scenario Valuation</h3>
            </div>
            <div className='sm:col-span-2'>
                <p className='book-intro-md'>Assessing the cost and benefits of green infrastructure projects; enabling informed decision-making about adaptation strategies.</p>
            </div>
            <hr className='sm:col-span-3 my-8 border-indigo-600' />
            <div>
                <h3 className='text-black'>Innovative Interfaces</h3>
            </div>
            <div className='sm:col-span-2'>
                <p className='book-intro-md'>Platforms or systems designed to facilitate interaction between stakeholders, increasing participation in urban forestry</p>
            </div>
            <hr className='sm:col-span-3 my-8 border-indigo-600' />
            <div>
                <h3 className='text-black'>Impact Modelling </h3>
            </div>
            <div className='sm:col-span-2'>
                <p className='book-intro-md pb-2'>Working with <a className='text-indigo-600' target="_blank" rel="noreferrer" href='https://lucidminds.ai/'>Lucidminds</a>, we've developed the <a className='text-indigo-600' target="_blank" rel="noreferrer" href='https://gus.earth/'>Green Unified Scenarios (GUS)</a> model to predict the impact of proposed changes</p>
                <p className='book-intro-md'>Project Example: Seoul, South KoreaOngoing Project: Stuttgart, Germany</p>
            </div>
           
          </div>

          <SectionHeader title='Management Services' />
          <div
            className='bg-white-200 rounded-[50px] border border-indigo-600 px-20 py-10 '
            
          >
            <div className='px-4'>
                <div className=' rounded-lg'>
                  
                 <h2>Supporting urban actors in crafting a portfolio of Nature-Based Solutions (NbS); exploring innovative and collective financing strategies, that help greener cities become a reality</h2>
                </div>
              
            </div>
          </div>
          <hr className='mx-20 border-8 border-green-600' />
          <div
            className='bg-white-200 rounded-[50px] border border-indigo-600 px-20 py-10 grid grid-cols-1 sm:grid-cols-3 mb-20'
            
          >
            <div>
                <h3 className='text-black'>Crafting a City-Wide NbS Databases</h3>
            </div>
            <div className='sm:col-span-2'>
                <p className='book-intro-md'>Compiling a comprehensive list of projects, creating a one-stop database for all Nature-Based Solutions </p>
            </div>
            <hr className='sm:col-span-3 my-8 border-indigo-600' />

            <div>
                <h3 className='text-black max-w-sm'>Evaluating and Scoring Projects </h3>
            </div>
            <div className='sm:col-span-2'>
                <p className='book-intro-md'>Based on our spatial analysis methodology</p>
            </div>
            <hr className='sm:col-span-3 my-8 border-indigo-600' />
            <div>
                <h3 className='text-black'>Developing fit-for-purpose financial instruments</h3>
            </div>
            <div className='sm:col-span-2'>
                <p className='book-intro-md'>With Dark Matter Capital Systems, we’re exploring tree canopy funds and whole-city transition portfolios that allow trees to become an investable asset class.</p>
            </div>
            <hr className='sm:col-span-3 my-8 border-indigo-600' />
            <div>
                <h3 className='text-black'>Connecting cities with Opportunities</h3>
            </div>
            <div className='sm:col-span-2'>
                <p className='book-intro-md pb-2'>With DmCS, we link cities to opportunities and funding for projects.</p>
                <p className='book-intro-md'>Project Example: Glasgow, Scotland Ongoing projects: Nature-Demo</p>
            </div>
           
          </div>

          <SectionHeader title='Citizen-centred Design Services' />
          <div
            className='bg-white-200 rounded-[50px] border border-indigo-600 px-20 py-10 '
            
          >
            <div className='px-4'>
                <div className=' rounded-lg'>
                  
                 <h2> The success of a city’s Nature-based Solutions (NbS) depends on the people and communities making and implementing decisions</h2>
                </div>
              
            </div>
          </div>
          <hr className='mx-20 border-8 border-green-600' />
          <div
            className='bg-white-200 rounded-[50px] border border-indigo-600 px-20 py-10 grid grid-cols-1 sm:grid-cols-3 mb-20'
            
          >
            <div>
                <h3 className='text-black'>Metric and indicator design</h3>
            </div>
            <div className='sm:col-span-2'>
                <p className='book-intro-md'>Creating comprehensive measures that reflect both the city's overall health and the well-being of its inhabitants.</p>
            </div>
            <hr className='sm:col-span-3 my-8 border-indigo-600' />

            <div>
                <h3 className='text-black max-w-sm'>People-centred, data-enabled process design </h3>
            </div>
            <div className='sm:col-span-2'>
                <p className='book-intro-md'>Prioritising the needs and input of individuals, leveraging data; aiming to improve the relationship between people and urban nature.</p>
            </div>
            <hr className='sm:col-span-3 my-8 border-indigo-600' />
            <div>
                <h3 className='text-black max-w-sm'>Recognising and rewarding civic stewardship</h3>
            </div>
            <div className='sm:col-span-2'>
                <p className='book-intro-md'>Promoting sustainable activities such as watering trees, or detecting diseases.</p>
            </div>
          
           
          </div>

          <div className='my-10 grid'>
          <div className='place-self-center text-center max-w-3xl '>
            <h2 className='text-dark-wood-800'>Right now, we are working on:</h2>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-12 justify-items-center'>

        <div className=''>
                  <div className='title-text-container plan-background-shape py-28 px-28'>
                    <h3 className='text-center text-white-200'>TreesAI Stuttgart</h3>
                  </div>
                  <p className='book-intro-sm max-w-xs mx-auto'>We’re implementing our Location-Based Scoring tool to support the municipality in the prioritisation of urban Nature-based Solutions.</p>
                  <p className='book-intro-sm max-w-xs mx-auto pt-2'>Partners: City of Stuttgart and Lucidminds</p>
                  <div className='pt-4 text-center'>
                    <a target="_blank" rel="noreferrer" href='https://provocations.darkmatterlabs.org/treesai-is-implementing-location-based-scoring-in-stuttgart-c54c752bdaaf'>
                  <button className=' inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'>Read our blog</button></a>
                  </div>
                  
              </div>

              <div className=''>
                  <div className='title-text-container measure-background-shape py-28 px-28'>
                    <h3 className='text-center text-white-200'>TreesAI Seoul</h3>
                  </div>
                  <p className='book-intro-sm max-w-xs mx-auto'>We’re developing a data framework to assess the climate risks of heat island effect and running various canopy scenarios to assess the potential cooling effect of trees as a climate adaptation and mitigation strategy.</p>
                  <p className='book-intro-sm max-w-xs mx-auto pt-2'>Partners: VAIV and Lucidminds</p>
                  <div className='pt-4 text-center'>
                    <a target="_blank" rel="noreferrer" href='https://lucidmindsai.medium.com/gus-in-action-quantifying-cooling-effect-of-trees-23a59a75fe60'>
                  <button className=' inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'>Read our blog</button></a>
                  </div>
              </div>

              <div className=''>
                  <div className='title-text-container list-background-shape py-28 px-28'>
                    <h3 className='text-center text-white-200'>TreesAI Glasgow</h3>
                  </div>
                  <p className='book-intro-sm max-w-xs mx-auto'>We’re quantifying the capacity of Glasgow’s existing tree stocks to mitigate against flooding. We’re working with project developers and outcome buyers to justify and fund a portfolio of nature-based solutions.</p>
                  <p className='book-intro-sm max-w-xs mx-auto pt-2'>Partners: Clyde Climate Forest, Glasgow City Council, FloodRe, Nationwide, Scottish Water, Scottish Flood Forum and SEPA</p>
                  <div className='pt-4 text-center'>
                    <a target="_blank" rel="noreferrer" href='https://darkmatterlabs.notion.site/darkmatterlabs/TreesAI-Glasgow-Pilot-Learning-report-16-10-bd46c620542d4159af830ae6b3a943ed'>
                  <button className=' inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'>Read our report</button></a>
                  </div>
              </div>

              <div className=''>
                  <div className='title-text-container list-background-shape py-28 px-28'>
                    <h3 className='text-center text-white-200'>Nature Demo</h3>
                  </div>
                  <p className='book-intro-sm max-w-xs mx-auto'>As part of the Horizon 2020, we’re  supporting the 20-partner consortium with expertise on green financing and innovative governance.</p>
              </div>

              <div className=''>
                  <div className='title-text-container plan-background-shape py-28 px-28'>
                    <h3 className='text-center text-white-200'>UR-Breath, Madrid</h3>
                  </div>
                  <p className='book-intro-sm max-w-xs mx-auto'> We’re developing design guideline and processes for the nature-positive regeneration of Villaverde, Madrid</p>
                  <p className='book-intro-sm max-w-xs mx-auto pt-2'>Partner: City of Madrid</p>
                  <div className='pt-4 text-center'>
                    <a target="_blank" rel="noreferrer" href='https://urbreath.eu/'>
                  <button className=' inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'>Read more</button></a>
                  </div>
                  
              </div>

              <div className=''>
                  <div className='title-text-container measure-background-shape py-28 px-28'>
                    <h3 className='text-center text-white-200'>Equitable Urban Forestry, UK</h3>
                  </div>
                  <p className='book-intro-sm max-w-xs mx-auto'>We’ve developed a framework and a database to assist local authorities and project developers in the long-term implementation of data-enabled urban forests, which prioritise often-marginalised communities.</p>
                  <p className='book-intro-sm max-w-xs mx-auto pt-2'>Partner: Urban Forest Accelerator</p>
              </div>


              


            </div>





    </div>
  );
}