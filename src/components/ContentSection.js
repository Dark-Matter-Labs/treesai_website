import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import dataIcon from '../images/data.png';
import mgmtIcon from '../images/mgmt.png';
import citizenIcon from '../images/citi.png';

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
    { name: 'Stuttgart Innovations Fonds', url: 'assets/partner_logos/inno.png' },
    { name: 'The Nature Conservancy', url: 'assets/partner_logos/TNC.png' },
    { name: 'Woodland Trust', url: 'assets/partner_logos/WT.png' },
    { name: 'EU Commission', url: 'assets/partner_logos/EU.png' },
    { name: 'Esmee Fairbairn Foundation', url: 'assets/partner_logos/EFF.png' },
    { name: 'Glasgow City Council', url: 'assets/partner_logos/GCC.png' },
    { name: 'Madrid City Council', url: 'assets/partner_logos/Madrid.png' },
    { name: 'Stuttgart City Council', url: 'assets/partner_logos/Stuttgart.png' },
    { name: 'VAIV', url: 'assets/partner_logos/VAIV.png' },
    { name: 'IBM', url: 'assets/partner_logos/IBM.png' },
    { name: 'Lucidminds', url: 'assets/partner_logos/LM.png' },
    { name: 'Evergreen', url: 'assets/partner_logos/Evergreen.png' },
    { name: 'Politics for Tomorrow', url: 'assets/partner_logos/p4t.png' },
  ];

  const benefitChips = [
    'Cooling',
    'Flood mitigation',
    'Health',
    'Air quality',
    'Biodiversity',
    'Social connection',
    'Amenity',
    'Resilience',
    'Avoided costs',
  ];

  return (
    <div className='global-margin scroll-smooth'>
      {/* SECTION 2 — THE PROBLEM */}
      <div id='problem' className='pt-20 pb-20'>
        <div className='max-w-3xl mb-12'>
          <h2 className='text-dark-wood-800'>A structural gap between value and investment</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start'>
          <div className='lg:col-span-3 space-y-6'>
            <p className='book-intro-md text-dark-wood-800'>
              Cities increasingly depend on urban trees and nature to manage heat, absorb
              stormwater, improve air quality, support biodiversity, strengthen public health and
              make everyday places more liveable.
            </p>
            <p className='book-intro-md text-dark-wood-800'>
              Yet the systems that shape city investment still treat nature as a secondary asset.
              Urban trees are often funded through short-term planting programmes, while the
              long-term care, maintenance and governance they need to survive is harder to resource.
            </p>
            <p className='book-intro-md text-dark-wood-800'>
              This creates a structural gap. The value of urban nature is widely recognised, but it
              is still rarely visible in the budgets, business cases and investment decisions that
              determine what cities can protect, plant and sustain over time.
            </p>
            <p className='book-intro-md text-dark-wood-800'>
              As a result, nature is often treated as a cost, even though it performs essential
              civic functions: cooling streets, managing water, reducing risk, improving wellbeing
              and strengthening urban resilience.
            </p>
          </div>
          <div className='lg:col-span-2 flex items-center'>
            <p className='font-favorit font-bold text-4xl leading-6 text-indigo-600'>
              &ldquo;The value is recognised, but not resourced.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3 — WHAT TREESAI DOES */}
      <div id='what-we-do' className='pt-4 pb-20'>
        <div className='max-w-3xl mb-10'>
          <h2 className='text-dark-wood-800'>
            Making urban nature visible, measurable and actionable.
          </h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12'>
          <p className='book-intro-md text-dark-wood-800'>
            TreesAI helps cities close that gap by making the value of urban nature visible,
            connecting benefits to beneficiaries, and designing the data, finance and governance
            models needed for long-term stewardship.
          </p>
          <p className='book-intro-md text-dark-wood-800'>
            We combine spatial analysis, ecosystem service valuation and decision-support tools to
            show where urban nature creates value, who benefits from it, and what is needed to
            sustain it over time. Our work supports cities to move beyond isolated planting targets
            towards a more strategic approach — one that connects climate resilience, public health,
            biodiversity, social wellbeing, maintenance, governance and finance.
          </p>
        </div>

        {/* Callout quote */}
        <div className='border-t border-b border-indigo-600 py-8 mb-14 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-12 text-center sm:text-left'>
          <p className='bold-intro-lg text-indigo-700'>Tools generate insight.</p>
          <span className='hidden sm:block w-px h-8 bg-indigo-300 self-center' />
          <p className='bold-intro-lg text-dark-wood-800'>Services turn insight into action.</p>
        </div>

        {/* VALUE BEYOND CARBON sub-section */}
        <div className='bg-white-300 border border-green-600 rounded-[40px] px-8 sm:px-14 py-10'>
          <div className='mb-2'>
            <span className='book-info-sm text-green-700 uppercase tracking-widest'>
              Value Beyond Carbon
            </span>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-start'>
            <div className='lg:col-span-3 space-y-4'>
              <h3 className='text-dark-wood-800'>Urban nature delivers more than carbon</h3>
              <p className='book-intro-md text-dark-wood-800'>
                TreesAI does not focus on carbon offsets. In cities, carbon captures only a small
                part of the value that trees and nature generate.
              </p>
              <p className='book-intro-md text-dark-wood-800'>
                Instead, we focus on the wider benefits that matter to urban life. By making these
                more visible, TreesAI helps cities build stronger evidence for investment,
                stewardship and long-term care.
              </p>
            </div>
            <div className='lg:col-span-2'>
              <p className='book-info-sm text-dark-wood-700 uppercase tracking-widest mb-4'>
                Benefits we measure
              </p>
              <div className='flex flex-wrap gap-2'>
                {benefitChips.map((chip) => (
                  <span
                    key={chip}
                    className='px-4 py-1.5 rounded-full border border-green-600 book-info-sm text-green-700 bg-white'
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools – we built these; they are used in real projects and build trust */}
      <div id='tools' className='pt-20 pb-20'>
        <div className='my-10 grid'>
          <div className='place-self-center text-center max-w-4xl'>
            <h2 className='text-dark-wood-800'>Our tools</h2>
            <p className='book-intro-md mt-4 text-dark-wood-800'>
              TreesAI tools combine spatial data, ecosystem service valuation and decision-support
              methods to help cities understand the role of trees and urban nature as
              infrastructure. They help cities identify where nature creates value, where it is most
              needed, who benefits, and what risks or opportunities should shape future investment.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='border border-indigo-600 rounded-[30px] bg-white shadow-md p-6 flex flex-col'>
            <p className='book-info-sm text-indigo-600 pb-2 uppercase tracking-widest'>
              01 · Location-Based Scoring
            </p>
            <p className='bold-intro-lg text-dark-wood-800 pb-3'>Map risks and needs</p>
            <p className='book-intro-md text-dark-wood-800 flex-1'>
              Identify where heat, flooding, social vulnerability, and gaps in green space overlap,
              so cities can prioritise where urban nature can create the greatest public value.
            </p>
            <div className='pt-6'>
              <Link
                to='/tools/lbs'
                className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
              >
                Explore this capability
              </Link>
            </div>
          </div>
          <div className='border border-indigo-600 rounded-[30px] bg-white shadow-md p-6 flex flex-col'>
            <p className='book-info-sm text-indigo-600 pb-2 uppercase tracking-widest'>
              02 · Ecosystem Services Calculator
            </p>
            <p className='bold-intro-lg text-dark-wood-800 pb-3'>Value ecosystem benefits</p>
            <p className='book-intro-md text-dark-wood-800 flex-1'>
              Quantify the benefits of trees and urban nature — cooling, stormwater management, air
              quality, health, biodiversity, and avoided costs.
            </p>
            <div className='pt-6'>
              <Link
                to='/tools/ecosystem-services'
                className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
              >
                Explore this capability
              </Link>
            </div>
          </div>
          <div className='border border-indigo-600 rounded-[30px] bg-white shadow-md p-6 flex flex-col'>
            <p className='book-info-sm text-indigo-600 pb-2 uppercase tracking-widest'>
              03 · Open Space Evaluation Tool
            </p>
            <p className='bold-intro-lg text-dark-wood-800 pb-3'>
              Evaluate spaces with communities
            </p>
            <p className='book-intro-md text-dark-wood-800 flex-1'>
              Assess open public spaces across climate resilience, community wellbeing and inclusive
              stewardship — weaving spatial data, Indigenous land stewardship knowledge and
              community-led surveys around the principle that those who tend to nature are essential
              guides in how it is valued and cared for.
            </p>
            <div className='pt-6'>
              <Link
                to='/tools/open-space-evaluation'
                className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
              >
                Explore this capability
              </Link>
            </div>
          </div>
          <div className='border border-indigo-600 rounded-[30px] bg-white shadow-md p-6 flex flex-col'>
            <p className='book-info-sm text-indigo-600 pb-2 uppercase tracking-widest'>
              04 · Registry & Portfolio Platform
            </p>
            <p className='bold-intro-lg text-dark-wood-800 pb-3'>
              Track portfolios and stewardship
            </p>
            <p className='book-intro-md text-dark-wood-800 flex-1'>
              Monitor projects, outcomes, funding flows, and responsibilities over time, so cities
              and partners can coordinate long-term care.
            </p>
            <div className='pt-6'>
              <Link
                to='/tools/registry-portfolio'
                className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
              >
                Explore this capability
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services – we provide these, drawing on our tools */}
      <div id='services' className='pb-20'>
        <div className='my-10 grid'>
          <div className='place-self-center text-center max-w-4xl'>
            <h2 className='text-dark-wood-800'>Our services</h2>
            <p className='book-intro-md mt-4 text-dark-wood-800'>
              TreesAI services support cities and partners to apply the tools in real planning,
              governance and finance contexts.
            </p>
            <p className='book-intro-md mt-3 text-dark-wood-800'>
              We help translate evidence into priorities, business cases, institutional models,
              stakeholder alignment and practical pathways for long-term care.
            </p>
          </div>
        </div>
        <div className='lg:flex justify-center gap-8 space-y-8 lg:space-y-0'>
          <div className='flex flex-col items-center justify-center border border-indigo-600 rounded-[30px] bg-white shadow-md px-6 sm:px-12 lg:px-10 py-8 lg:w-3/5'>
            <h3 className='text-indigo-600 pb-2 text-center'>Build the evidence base</h3>
            <p className='book-intro-md text-dark-wood-800 text-center pb-2'>
              Data sourcing, spatial analysis, ecosystem service modelling, benefit mapping, and
              dashboard development.
            </p>
            <img className='py-4 h-48 ' src={dataIcon} alt='' />
            <div className='text-center'>
              <a
                href='#data'
                className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
              >
                Find out more
              </a>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center border border-indigo-600 rounded-[30px] bg-white shadow-md px-6 sm:px-12 lg:px-10 py-8 lg:w-3/5'>
            <h3 className='text-green-700 pb-2 text-center'>Shape strategy and investment</h3>
            <p className='book-intro-md text-dark-wood-800 text-center pb-2'>
              Prioritisation, business case development, finance logic, governance design, and
              portfolio planning.
            </p>
            <img className='py-4 h-48 ' src={mgmtIcon} alt='' />
            <div className='text-center'>
              <a
                href='#mgmt'
                className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
              >
                Find out more
              </a>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center border border-indigo-600 rounded-[30px] bg-white shadow-md px-6 sm:px-12 lg:px-10 py-8 lg:w-3/5'>
            <h3 className='text-indigo-600 pb-2 text-center'>Design with communities</h3>
            <p className='book-intro-md text-dark-wood-800 text-center pb-2'>
              Citizen-centred research, stakeholder engagement, co-design workshops, pilot design,
              and learning processes.
            </p>
            <img className='py-4 h-48 ' src={citizenIcon} alt='' />
            <div className='text-center'>
              <a
                href='#citi'
                className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>

      <SectionHeader title='Data services' id='data' />
      <div className='bg-white-200 rounded-[50px] border border-indigo-600 px-4 sm:px-20 py-10 '>
        <div className='px-4'>
          <div className=' rounded-lg'>
            <h3 className='text-indigo-700'>
              We turn existing data into evidence that helps cities, NGOs and private partners
              choose and deliver Nature-based Solutions (NbS).
            </h3>
          </div>
        </div>
      </div>
      <div className='mt-6 bg-white-200 rounded-[50px] border border-indigo-600 px-4 sm:px-20 py-10 grid grid-cols-1 sm:grid-cols-3 sm:gap-x-8 mb-20'>
        <div>
          <p className='text-black bold-intro-lg'>Spatial analysis</p>
        </div>
        <div className='sm:col-span-2'>
          <p className='book-intro-md'>
            Where Nature-based Solutions can help a place adapt to and mitigate climate change.
          </p>
        </div>
        <hr className='sm:col-span-3 my-8 border-indigo-600' />

        <div>
          <p className='text-black bold-intro-lg max-w-sm'>Baseline and scenario valuation</p>
        </div>
        <div className='sm:col-span-2'>
          <p className='book-intro-md'>
            The costs and benefits of green infrastructure projects, measured against a baseline, so
            adaptation choices rest on evidence.
          </p>
        </div>
        <hr className='sm:col-span-3 my-8 border-indigo-600' />
        <div>
          <p className='text-black bold-intro-lg'>Participation platforms</p>
        </div>
        <div className='sm:col-span-2'>
          <p className='book-intro-md'>
            Digital tools that let residents and partners take part in decisions about urban
            forests.
          </p>
        </div>
        <hr className='sm:col-span-3 my-8 border-indigo-600' />
        <div>
          <p className='text-black bold-intro-lg'>Impact modelling</p>
        </div>
        <div className='sm:col-span-2'>
          <p className='book-intro-md pb-2'>
            With{' '}
            <a
              className='text-indigo-600'
              target='_blank'
              rel='noreferrer'
              href='https://lucidminds.ai/'
            >
              Lucidminds
            </a>
            , we are testing their{' '}
            <a
              className='text-indigo-600'
              target='_blank'
              rel='noreferrer'
              href='https://gus.earth/'
            >
              Green Urban Scenarios (GUS)
            </a>{' '}
            model to predict the effect of proposed changes.
          </p>
          <p className='book-intro-md'>
            Project example: Seoul, South Korea; Ongoing project: Stuttgart, Germany
          </p>
        </div>
      </div>

      <SectionHeader type='typology' title='Management services' id='mgmt' />
      <div className='bg-white-200 rounded-[50px] border border-green-600 px-4 sm:px-20 py-10 '>
        <div className='px-4'>
          <div className=' rounded-lg'>
            <h3 className='text-green-700'>
              We help cities and partners build a portfolio of Nature-based Solutions (NbS) and find
              shared ways to pay for it.
            </h3>
          </div>
        </div>
      </div>
      <div className='mt-6 bg-white-200 rounded-[50px] border border-green-600 px-4 sm:px-20 py-10 grid grid-cols-1 sm:grid-cols-3 sm:gap-x-8 mb-20'>
        <div>
          <p className='text-black bold-intro-lg max-w-sm'>City-wide NbS database</p>
        </div>
        <div className='sm:col-span-2'>
          <p className='book-intro-md'>
            One database of every Nature-based Solutions project in the city.
          </p>
        </div>
        <hr className='sm:col-span-3 my-8 border-green-600' />

        <div>
          <p className='text-black max-w-sm bold-intro-lg'>Project scoring</p>
        </div>
        <div className='sm:col-span-2'>
          <p className='book-intro-md'>
            We score and rank projects using our spatial analysis method.
          </p>
        </div>
        <hr className='sm:col-span-3 my-8 border-green-600' />
        <div>
          <p className='text-black bold-intro-lg max-w-xs'>Financial instruments</p>
        </div>
        <div className='sm:col-span-2'>
          <p className='book-intro-md'>
            With Dark Matter Capital Systems (DmCS), we are exploring tree canopy funds and
            whole-city transition portfolios that make trees an investable asset class.
          </p>
        </div>
        <hr className='sm:col-span-3 my-8 border-green-600' />
        <div>
          <p className='text-black bold-intro-lg max-w-xs'>
            Connecting partners with opportunities
          </p>
        </div>
        <div className='sm:col-span-2'>
          <p className='book-intro-md pb-2'>
            With DmCS, we link cities, NGOs and other partners to opportunities and funding for
            projects.
          </p>
          <p className='book-intro-md'>
            Project example: Glasgow, Scotland; Ongoing project: Nature-Demo
          </p>
        </div>
      </div>

      <SectionHeader title='Citizen-centred design services' id='citi' />
      <div className='bg-white-200 rounded-[50px] border border-indigo-600 px-4 sm:px-20 py-10 '>
        <div className='px-4'>
          <div className=' rounded-lg'>
            <h3 className='text-indigo-600'>
              A city's Nature-based Solutions (NbS) depend on the people and communities who decide
              on them and carry them out.
            </h3>
          </div>
        </div>
      </div>
      <div className='mt-6 bg-white-200 rounded-[50px] border border-indigo-600 px-4 sm:px-20 py-10 grid grid-cols-1 sm:grid-cols-3 sm:gap-x-8 mb-20'>
        <div>
          <p className='text-black bold-intro-lg max-w-xs'>Metric and indicator design</p>
        </div>
        <div className='sm:col-span-2'>
          <p className='book-intro-md'>
            Measures that track both the city's health and its residents' wellbeing.
          </p>
        </div>
        <hr className='sm:col-span-3 my-8 border-indigo-600' />

        <div>
          <p className='text-black max-w-xs bold-intro-lg'>People-centred process design</p>
        </div>
        <div className='sm:col-span-2'>
          <p className='book-intro-md'>
            Processes built around what residents need and say, using data to strengthen the
            relationship between people and urban nature.
          </p>
        </div>
        <hr className='sm:col-span-3 my-8 border-indigo-600' />
        <div>
          <p className='text-black bold-intro-lg max-w-xs'>
            Recognising and rewarding civic stewardship
          </p>
        </div>
        <div className='sm:col-span-2'>
          <p className='book-intro-md'>
            Encouraging and rewarding residents who care for trees, such as watering them or
            reporting disease.
          </p>
        </div>
      </div>

      {/* How we work – how to engage with us */}
      <div id='how-we-work' className='pb-20'>
        <div className='my-10 grid'>
          <div className='place-self-center text-center max-w-4xl '>
            <h2 className='text-dark-wood-800'>How we work with you</h2>
            <p className='book-intro-md mt-4 text-dark-wood-800'>
              We work with cities, NGOs, and private organisations. Here's how we typically engage
              with partners — from understanding location to crystallising benefits and coordinating
              action.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div className='bg-white-200 rounded-[40px] border border-indigo-600 px-6 py-8'>
            <p className='bold-intro-lg text-indigo-700 pb-2'>1. Understand location</p>
            <p className='book-intro-md text-dark-wood-800'>
              We assess place-based risks and opportunities using spatial analysis and heat, flood,
              and air-quality data to identify priority areas.
            </p>
          </div>
          <div className='bg-white-200 rounded-[40px] border border-indigo-600 px-6 py-8'>
            <p className='bold-intro-lg text-indigo-700 pb-2'>2. Crystallise benefits</p>
            <p className='book-intro-md text-dark-wood-800'>
              We quantify ecosystem services and model scenarios to build the evidence base for
              investment and policy decisions.
            </p>
          </div>
          <div className='bg-white-200 rounded-[40px] border border-indigo-600 px-6 py-8'>
            <p className='bold-intro-lg text-indigo-700 pb-2'>3. Engage & coordinate</p>
            <p className='book-intro-md text-dark-wood-800'>
              We design governance, contracts, and funding mechanisms that bring stakeholders
              together to deliver and steward projects over time.
            </p>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='bg-problemSolution h-[40rem] mb-20 pl-4 sm:pl-0 flex flex-col items-center justify-center'>
          <div>
            <div className='mx-auto max-w-xs sm:max-w-3xl '>
              <h2 className='text-white hidden sm:block'>
                We're creating the required infrastructure to help cities, NGOs, and private
                partners secure funding for urban trees and green spaces.
              </h2>
              <h3 className='text-white block sm:hidden px-4'>
                We're creating the required infrastructure to help cities, NGOs, and private
                partners secure funding for urban trees and green spaces.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-b-[140px] bg-dark-wood-800 my-20 '>
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

      {/* Project stories */}
      <div id='project-stories' className='my-10 grid'>
        <div className='place-self-center text-center max-w-3xl pb-10'>
          <h2 className='text-dark-wood-800'>Project stories</h2>
          <p className='book-intro-md mt-4 text-dark-wood-800'>
            We test and grow our tools in real places, with cities, NGOs, and private partners who
            are reimagining how urban nature is valued and financed.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-20 justify-items-stretch'>
        <div className='grid grid-cols-1 justify-items-stretch'>
          <div className='plan-background-shape h-[243px] flex items-center justify-center'>
            <h3 className='text-white-200'>Stuttgart, Germany</h3>
          </div>
          <p className='book-intro-sm max-w-xs mx-auto pt-8'>
            We're implementing our Location-Based Scoring tool to support the municipality in the
            prioritisation of urban Nature-based Solutions.
          </p>
          <p className='book-intro-sm max-w-xs mx-auto pt-2'>
            Partners: City of Stuttgart, The Nature Conservancy and Lucidminds
          </p>
          <div className='pt-4 text-center'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://provocations.darkmatterlabs.org/treesai-is-implementing-location-based-scoring-in-stuttgart-c54c752bdaaf'
              className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
            >
              Read our blog
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 justify-items-stretch'>
          <div className='measure-background-shape h-[243px] flex items-center justify-center'>
            <h3 className=' text-white-200'>Croydon, London</h3>
          </div>
          <p className='book-intro-sm max-w-xs mx-auto pt-8'>
            We co-created the Croydon Climate Adaptation Plan, using spatial data and scoring to
            identify priority neighbourhoods for cooling and nature-based interventions.
          </p>
          <p className='book-intro-sm max-w-xs mx-auto pt-2'>
            Partners: London Borough of Croydon and local stakeholders
          </p>
          <div className='pt-4 text-center'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/Dark-Matter-Labs/croydon_adaptation_plan'
              className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
            >
              Explore adaptation data
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 justify-items-stretch'>
          <div className='plan-background-shape h-[243px] flex items-center justify-center'>
            <h3 className='text-center text-white-200'>
              Outcomes-Based <br /> Public Realm
            </h3>
          </div>
          <p className='book-intro-sm max-w-xs mx-auto pt-8'>
            We explored how public space can be planned, governed and stewarded with more
            transparent, outcomes-based digital tools that connect community priorities, ecological
            value and long-term benefits.
          </p>
          <p className='book-intro-sm max-w-xs mx-auto pt-2'>Partner: Connected Place Catapult</p>
          <div className='pt-4 text-center'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://cp.catapult.org.uk/report/pathways-to-outcomes-based-public-space/'
              className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
            >
              Project report
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 justify-items-stretch'>
          <div className='measure-background-shape h-[243px] flex items-center justify-center'>
            <h3 className=' text-white-200'>Seoul, South Korea</h3>
          </div>
          <p className='book-intro-sm max-w-xs mx-auto pt-8'>
            We're developing a data framework to assess the climate risks of heat island effect and
            running various canopy scenarios to assess the potential cooling effect of trees as a
            climate adaptation and mitigation strategy.
          </p>
          <p className='book-intro-sm max-w-xs mx-auto pt-2'>Partners: VAIV and Lucidminds</p>
          <div className='pt-4 text-center'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://lucidmindsai.medium.com/gus-in-action-quantifying-cooling-effect-of-trees-23a59a75fe60'
              className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
            >
              Read our blog
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 justify-items-stretch'>
          <div className='plan-background-shape h-[243px] flex items-center justify-center'>
            <h3 className='text-center text-white-200'>Berlin, Germany</h3>
          </div>
          <p className='book-intro-sm max-w-xs mx-auto pt-8'>
            We valued the ecosystem services of Berlin&apos;s street trees to inform decisions on
            preserving canopy while extending the M10 tram line.
          </p>
          <p className='book-intro-sm max-w-xs mx-auto pt-2'>
            Partners: The Nature Conservancy and local stakeholders
          </p>
          <div className='pt-4 text-center'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://provocations.darkmatterlabs.org/unlocking-the-value-for-urban-nature-an-economic-case-for-street-tree-preservation-in-berlin-af0714bdd9f3'
              className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
            >
              Read Berlin story
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 justify-items-stretch'>
          <div className='list-background-shape h-[243px] flex items-center justify-center'>
            <h3 className='text-center text-white-200'>Glasgow, Scotland</h3>
          </div>
          <p className='book-intro-sm max-w-xs mx-auto pt-8'>
            We're quantifying the capacity of Glasgow's existing tree stocks to mitigate flooding.
            We're working with project developers and outcome buyers to justify and fund a portfolio
            of Nature-based Solutions.
          </p>
          <p className='book-intro-sm max-w-xs mx-auto pt-2'>
            Partners: Clyde Climate Forest, Glasgow City Council, FloodRe, Nationwide, Scottish
            Water, Scottish Flood Forum and SEPA
          </p>
          <div className='pt-4 text-center'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://darkmatterlabs.notion.site/darkmatterlabs/TreesAI-Glasgow-Pilot-Learning-report-16-10-bd46c620542d4159af830ae6b3a943ed'
              className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
            >
              Read our report
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 justify-items-stretch'>
          <div className='list-background-shape h-[243px] flex items-center justify-center'>
            <h3 className='text-center text-white-200'>Nature Demo (EU)</h3>
          </div>
          <p className='book-intro-sm max-w-xs mx-auto pt-8'>
            As part of Horizon 2020, we're supporting the 20-partner consortium with expertise on
            green financing and innovative governance.
          </p>
          <div className='pt-4 text-center'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://nature-demo.eu/'
              className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800'
            >
              Read more
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 justify-items-stretch'>
          <div className='plan-background-shape h-[243px] flex items-center justify-center'>
            <h3 className='text-center text-white-200'>UR-Breath, Madrid</h3>
          </div>
          <p className='book-intro-sm max-w-xs mx-auto pt-8'>
            {' '}
            We're developing design guidelines and processes for the nature-positive regeneration of
            Villaverde, Madrid.
          </p>
          <p className='book-intro-sm max-w-xs mx-auto pt-2'>Partner: City of Madrid</p>
          <div className='pt-4 text-center'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://urbreath.eu/'
              className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
            >
              Read more
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 justify-items-stretch'>
          <div className='measure-background-shape h-[243px] flex items-center justify-center mx-auto max-w-xs'>
            <h3 className='text-center text-white-200'>Equitable Urban Forestry, UK</h3>
          </div>
          <p className='book-intro-sm max-w-xs mx-auto pt-8'>
            We've developed a framework and a database to assist local authorities and project
            developers in the long-term implementation of data-enabled urban forests, which
            prioritise often-marginalised communities.
          </p>
          <p className='book-intro-sm max-w-xs mx-auto pt-2'>Partner: Urban Forest Accelerator</p>
          <div className='pt-4 text-center'>
            <span className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-dark-wood-700 border border-dark-wood-500'>
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
