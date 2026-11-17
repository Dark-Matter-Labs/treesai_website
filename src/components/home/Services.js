import { Fragment } from 'react';
import SectionHeader from '../SectionHeader';
import HowWeWork from './HowWeWork';
import dataIcon from '../../images/data.png';
import mgmtIcon from '../../images/mgmt.png';
import citizenIcon from '../../images/citi.png';

const externalLink = (href, label) => (
  <a className='text-indigo-600' target='_blank' rel='noreferrer' href={href}>
    {label}
  </a>
);

// Each service has a summary card and a detail block below it, joined by `id`.
const services = [
  {
    id: 'data',
    title: 'Build the evidence base',
    summary:
      'Data sourcing, spatial analysis, ecosystem service modelling, benefit mapping, and dashboard development.',
    icon: dataIcon,
    accent: 'indigo',
    detailTitle: 'Data services',
    statement:
      'We turn existing data into evidence that helps cities, NGOs and private partners choose and deliver Nature-based Solutions (NbS).',
    items: [
      {
        name: 'Spatial analysis',
        body: 'Where Nature-based Solutions can help a place adapt to and mitigate climate change.',
      },
      {
        name: 'Baseline and scenario valuation',
        body: 'The costs and benefits of green infrastructure projects, measured against a baseline, so adaptation choices rest on evidence.',
      },
      {
        name: 'Participation platforms',
        body: 'Digital tools that let residents and partners take part in decisions about urban forests.',
      },
      {
        name: 'Impact modelling',
        body: (
          <>
            With {externalLink('https://lucidminds.ai/', 'Lucidminds')}, we are testing their{' '}
            {externalLink('https://gus.earth/', 'Green Urban Scenarios (GUS)')} model to predict the
            effect of proposed changes.
          </>
        ),
        note: 'Project example: Seoul, South Korea; Ongoing project: Stuttgart, Germany',
      },
    ],
  },
  {
    id: 'mgmt',
    title: 'Shape strategy and investment',
    summary:
      'Prioritisation, business case development, finance logic, governance design, and portfolio planning.',
    icon: mgmtIcon,
    accent: 'green',
    detailTitle: 'Management services',
    statement:
      'We help cities and partners build a portfolio of Nature-based Solutions (NbS) and find shared ways to pay for it.',
    items: [
      {
        name: 'City-wide NbS database',
        body: 'One database of every Nature-based Solutions project in the city.',
      },
      {
        name: 'Project scoring',
        body: 'We score and rank projects using our spatial analysis method.',
      },
      {
        name: 'Financial instruments',
        body: 'With Dark Matter Capital Systems (DmCS), we are exploring tree canopy funds and whole-city transition portfolios that make trees an investable asset class.',
      },
      {
        name: 'Connecting partners with opportunities',
        body: 'With DmCS, we link cities, NGOs and other partners to opportunities and funding for projects.',
        note: 'Project example: Glasgow, Scotland; Ongoing project: Nature-Demo',
      },
    ],
  },
  {
    id: 'citi',
    title: 'Design with communities',
    summary:
      'Citizen-centred research, stakeholder engagement, co-design workshops, pilot design, and learning processes.',
    icon: citizenIcon,
    accent: 'indigo',
    detailTitle: 'Citizen-centred design services',
    statement:
      "A city's Nature-based Solutions (NbS) depend on the people and communities who decide on them and carry them out.",
    items: [
      {
        name: 'Metric and indicator design',
        body: "Measures that track both the city's health and its residents' wellbeing.",
      },
      {
        name: 'People-centred process design',
        body: 'Processes built around what residents need and say, using data to strengthen the relationship between people and urban nature.',
      },
      {
        name: 'Recognising and rewarding civic stewardship',
        body: 'Encouraging and rewarding residents who care for trees, such as watering them or reporting disease.',
      },
    ],
  },
];

// Full class names so Tailwind's content scan keeps them.
const accents = {
  indigo: { text: 'text-indigo-600', border: 'border-indigo-600', header: undefined },
  green: { text: 'text-green-700', border: 'border-green-600', header: 'typology' },
};

function ServiceCard({ service }) {
  return (
    <div className='flex flex-col items-center border border-indigo-600 rounded-[30px] bg-white shadow-md px-6 sm:px-12 lg:px-10 py-8 lg:w-3/5'>
      <h3 className={`${accents[service.accent].text} pb-2 text-center`}>{service.title}</h3>
      <p className='book-intro-md text-dark-wood-800 text-center pb-2 flex-1'>{service.summary}</p>
      <img className='py-4 h-48' src={service.icon} alt='' />
      <a href={`#${service.id}`} className='btn btn-dark'>
        Find out more
      </a>
    </div>
  );
}

function ServiceDetail({ service }) {
  const accent = accents[service.accent];
  const box = `bg-white-200 rounded-[50px] border ${accent.border} px-4 sm:px-20 py-10`;
  return (
    <>
      <SectionHeader type={accent.header} title={service.detailTitle} id={service.id} />
      <div className={box}>
        <h3 className={`px-4 ${accent.text}`}>{service.statement}</h3>
      </div>
      <div className={`mt-6 mb-20 grid grid-cols-1 sm:grid-cols-3 sm:gap-x-8 ${box}`}>
        {service.items.map((item, i) => (
          <Fragment key={item.name}>
            {i > 0 && <hr className={`sm:col-span-3 my-8 ${accent.border}`} />}
            <h4 className='text-black bold-intro-lg max-w-xs'>{item.name}</h4>
            <div className='sm:col-span-2'>
              <p className='book-intro-md'>{item.body}</p>
              {item.note && <p className='book-intro-md pt-2'>{item.note}</p>}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default function Services() {
  return (
    <>
      <section id='services' className='pb-20'>
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
        <HowWeWork />
        <div className='lg:flex justify-center gap-8 space-y-8 lg:space-y-0'>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {services.map((service) => (
        <ServiceDetail key={service.id} service={service} />
      ))}
    </>
  );
}
