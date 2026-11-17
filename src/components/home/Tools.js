import { Link } from 'react-router-dom';

const tools = [
  {
    name: 'Location-Based Scoring',
    heading: 'Map risks and needs',
    description:
      'Identify where heat, flooding, social vulnerability, and gaps in green space overlap, so cities can prioritise where urban nature can create the greatest public value.',
    path: '/tools/lbs',
  },
  {
    name: 'Ecosystem Services Calculator',
    heading: 'Value ecosystem benefits',
    description:
      'Quantify the benefits of trees and urban nature — cooling, stormwater management, air quality, health, biodiversity, and avoided costs.',
    path: '/tools/ecosystem-services',
  },
  {
    name: 'Open Space Evaluation Tool',
    heading: 'Evaluate spaces with communities',
    description:
      'Assess open public spaces across climate resilience, community wellbeing and inclusive stewardship — weaving spatial data, Indigenous land stewardship knowledge and community-led surveys around the principle that those who tend to nature are essential guides in how it is valued and cared for.',
    path: '/tools/open-space-evaluation',
  },
  {
    name: 'Registry & Portfolio Platform',
    heading: 'Track portfolios and stewardship',
    description:
      'Monitor projects, outcomes, funding flows, and responsibilities over time, so cities and partners can coordinate long-term care.',
    path: '/tools/registry-portfolio',
  },
];

function ToolCard({ number, tool }) {
  return (
    <article className='border border-indigo-600 rounded-[30px] bg-white shadow-md p-6 flex flex-col'>
      <p className='book-info-sm text-indigo-600 pb-2 uppercase tracking-widest'>
        {String(number).padStart(2, '0')} · {tool.name}
      </p>
      <h3 className='bold-intro-lg text-dark-wood-800 pb-3'>{tool.heading}</h3>
      <p className='book-intro-md text-dark-wood-800 flex-1'>{tool.description}</p>
      <div className='pt-6'>
        <Link to={tool.path} className='btn btn-dark'>
          Explore this capability
        </Link>
      </div>
    </article>
  );
}

export default function Tools() {
  return (
    <section id='tools' className='pt-20 pb-20'>
      <div className='my-10 grid'>
        <div className='place-self-center text-center max-w-4xl'>
          <h2 className='text-dark-wood-800'>Our tools</h2>
          <p className='book-intro-md mt-4 text-dark-wood-800'>
            TreesAI tools combine spatial data, ecosystem service valuation and decision-support
            methods to help cities understand the role of trees and urban nature as infrastructure.
            They help cities identify where nature creates value, where it is most needed, who
            benefits, and what risks or opportunities should shape future investment.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {tools.map((tool, i) => (
          <ToolCard key={tool.path} number={i + 1} tool={tool} />
        ))}
      </div>
    </section>
  );
}
