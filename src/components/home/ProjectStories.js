// `shape` picks one of the leaf backgrounds defined in index.css.
const stories = [
  {
    title: 'Stuttgart, Germany',
    shape: 'plan',
    body: "We're implementing our Location-Based Scoring tool to support the municipality in the prioritisation of urban Nature-based Solutions.",
    partners: 'Partners: City of Stuttgart, The Nature Conservancy and Lucidminds',
    link: {
      label: 'Read our blog',
      href: 'https://provocations.darkmatterlabs.org/treesai-is-implementing-location-based-scoring-in-stuttgart-c54c752bdaaf',
    },
  },
  {
    title: 'Croydon, London',
    shape: 'measure',
    body: 'We co-created the Croydon Climate Adaptation Plan, using spatial data and scoring to identify priority neighbourhoods for cooling and nature-based interventions.',
    partners: 'Partners: London Borough of Croydon and local stakeholders',
    link: {
      label: 'Explore adaptation data',
      href: 'https://github.com/Dark-Matter-Labs/croydon_adaptation_plan',
    },
  },
  {
    title: (
      <>
        Outcomes-Based <br /> Public Realm
      </>
    ),
    key: 'outcomes-based-public-realm',
    shape: 'plan',
    body: 'We explored how public space can be planned, governed and stewarded with more transparent, outcomes-based digital tools that connect community priorities, ecological value and long-term benefits.',
    partners: 'Partner: Connected Place Catapult',
    link: {
      label: 'Project report',
      href: 'https://cp.catapult.org.uk/report/pathways-to-outcomes-based-public-space/',
    },
  },
  {
    title: 'Seoul, South Korea',
    shape: 'measure',
    body: "We're developing a data framework to assess the climate risks of heat island effect and running various canopy scenarios to assess the potential cooling effect of trees as a climate adaptation and mitigation strategy.",
    partners: 'Partners: VAIV and Lucidminds',
    link: {
      label: 'Read our blog',
      href: 'https://lucidmindsai.medium.com/gus-in-action-quantifying-cooling-effect-of-trees-23a59a75fe60',
    },
  },
  {
    title: 'Berlin, Germany',
    shape: 'plan',
    body: "We valued the ecosystem services of Berlin's street trees to inform decisions on preserving canopy while extending the M10 tram line.",
    partners: 'Partners: The Nature Conservancy and local stakeholders',
    link: {
      label: 'Read Berlin story',
      href: 'https://provocations.darkmatterlabs.org/unlocking-the-value-for-urban-nature-an-economic-case-for-street-tree-preservation-in-berlin-af0714bdd9f3',
    },
  },
  {
    title: 'Glasgow, Scotland',
    shape: 'list',
    body: "We're quantifying the capacity of Glasgow's existing tree stocks to mitigate flooding. We're working with project developers and outcome buyers to justify and fund a portfolio of Nature-based Solutions.",
    partners:
      'Partners: Clyde Climate Forest, Glasgow City Council, FloodRe, Nationwide, Scottish Water, Scottish Flood Forum and SEPA',
    link: {
      label: 'Read our report',
      href: 'https://darkmatterlabs.notion.site/darkmatterlabs/TreesAI-Glasgow-Pilot-Learning-report-16-10-bd46c620542d4159af830ae6b3a943ed',
    },
  },
  {
    title: 'Nature Demo (EU)',
    shape: 'list',
    body: "As part of Horizon 2020, we're supporting the 20-partner consortium with expertise on green financing and innovative governance.",
    link: { label: 'Read more', href: 'https://nature-demo.eu/' },
  },
  {
    title: 'UR-Breath, Madrid',
    shape: 'plan',
    body: "We're developing design guidelines and processes for the nature-positive regeneration of Villaverde, Madrid.",
    partners: 'Partner: City of Madrid',
    link: { label: 'Read more', href: 'https://urbreath.eu/' },
  },
  {
    title: 'Equitable Urban Forestry, UK',
    shape: 'measure',
    body: "We've developed a framework and a database to assist local authorities and project developers in the long-term implementation of data-enabled urban forests, which prioritise often-marginalised communities.",
    partners: 'Partner: Urban Forest Accelerator',
  },
];

const shapes = {
  plan: 'plan-background-shape',
  measure: 'measure-background-shape',
  list: 'list-background-shape',
};

function StoryCard({ story }) {
  return (
    <article className='grid grid-cols-1 justify-items-stretch'>
      <div className={`${shapes[story.shape]} h-[243px] flex items-center justify-center`}>
        <h3 className='px-4 text-center text-white-200'>{story.title}</h3>
      </div>
      <p className='book-intro-sm max-w-xs mx-auto pt-8'>{story.body}</p>
      {story.partners && <p className='book-intro-sm max-w-xs mx-auto pt-2'>{story.partners}</p>}
      <div className='pt-4 text-center'>
        {story.link ? (
          <a target='_blank' rel='noreferrer' href={story.link.href} className='btn btn-dark'>
            {story.link.label}
          </a>
        ) : (
          <span className='btn text-dark-wood-700 border border-dark-wood-500 cursor-default'>
            Coming soon
          </span>
        )}
      </div>
    </article>
  );
}

export default function ProjectStories() {
  return (
    <section id='project-stories'>
      <div className='my-10 grid'>
        <div className='place-self-center text-center max-w-3xl pb-10'>
          <h2 className='text-dark-wood-800'>Project stories</h2>
          <p className='book-intro-md mt-4 text-dark-wood-800'>
            We test and grow our tools in real places, with cities, NGOs, and private partners who
            are reimagining how urban nature is valued and financed.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20'>
        {stories.map((story) => (
          <StoryCard key={story.key || story.title} story={story} />
        ))}
      </div>
    </section>
  );
}
