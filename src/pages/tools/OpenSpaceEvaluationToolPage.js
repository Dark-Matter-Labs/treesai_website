import ToolPageLayout from '../../components/ToolPageLayout';

const climateResilienceCriteria = [
  'Flood Resilience',
  'Drought Resilience',
  'Water Quality',
  'Biodiversity',
  'Air Quality',
  'Heat Resilience',
  'Climate Change Mitigation',
];

const socialWellbeingCriteria = [
  'Urban Quality & Maintenance',
  'Participatory Planning & Governance',
  'Safety',
  'Health',
  'Accessibility, Inclusivity & Belonging',
  'Community Engagement & Social Cohesion',
  'Direct Economic Benefits',
];

const phases = [
  {
    label: 'Preparation',
    color: 'indigo',
    steps: [
      {
        number: '01',
        title: 'Map the open public spaces for evaluation',
        body: 'Use GIS and other mapping tools to identify and map all open spaces that will be evaluated.',
      },
      {
        number: '02',
        title: 'Define evaluation criteria',
        body: 'Decide which indicators will be included in the evaluation, tailored to local priorities and context.',
      },
      {
        number: '03',
        title: 'Gather existing data',
        body: 'Collect and evaluate geo-spatial and other relevant information for the mapped sites — including biodiversity data, flood risk, land surface temperature, heat vulnerability, and any previous assessment results. Input the data into the evaluation tool.',
      },
    ],
  },
  {
    label: 'Data Collection',
    color: 'green',
    steps: [
      {
        number: '04',
        title: 'Conduct surveys with users',
        body: 'Distribute surveys to people who use the open space. Ensure surveys include diverse perspectives — elders, youth, Indigenous peoples, newcomers, racialized communities, and individuals with disabilities — so the tool captures the voices of sovereignty-seeking communities.',
      },
      {
        number: '05',
        title: 'Conduct surveys with stewards',
        body: 'Distribute surveys to stewards who run and maintain the open space. Ensure diverse perspectives are included, including community collaborators and stewardship circles.',
      },
      {
        number: '06',
        title: 'Conduct site surveys with specialists',
        body: 'Distribute surveys to experts on flood resilience, soil health, plant biodiversity, structural features, heat tolerance, and public health. Their evaluation is informed by specialist knowledge from local environmental agencies, soil scientists, botanists, geologists, and health and social care professionals.',
      },
    ],
  },
  {
    label: 'Data Integration',
    color: 'indigo',
    steps: [
      {
        number: '07',
        title: 'Calculate score',
        body: 'Aggregate data from user, steward, and expert surveys alongside existing records into a single scorecard for each open space. Optionally develop a scoring algorithm that reflects the importance or influence of different evaluation criteria.',
      },
      {
        number: '08',
        title: 'Visualise results',
        body: 'Use graphical representations to illustrate the strengths, weaknesses, and overall scores of open spaces, facilitating easy comparison between sites and identification of priority areas. Highlight opportunities, limitations, and threats.',
      },
      {
        number: '09',
        title: 'Target measures for improving public spaces',
        body: 'Based on evaluation results, develop tailored management plans that address identified needs. Run participatory scenario planning workshops to explore best practice. Enable community-supported plans that define specific actions, responsible parties, timelines, and budget estimates.',
      },
    ],
  },
  {
    label: 'Application',
    color: 'green',
    steps: [
      {
        number: '10',
        title: 'Apply for funding with proof of evidence',
        body: 'Use detailed assessments and visual data to create compelling funding proposals that showcase the social, environmental, and economic benefits of proposed improvements.',
      },
    ],
  },
];

export default function OpenSpaceEvaluationToolPage() {
  return (
    <ToolPageLayout
      title='Open Space Evaluation Tool'
      subtitle='Assess open public spaces across climate resilience, community wellbeing and inclusive stewardship — weaving spatial data, Indigenous land stewardship knowledge and community-led surveys around the principle that those who tend to nature are essential guides in how it is valued and cared for.'
    >
      <div className='space-y-16'>
        <section>
          <h2 className='text-dark-wood-800 mb-4'>What it does</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The Open Space Evaluation Tool scores open public spaces in terms of climate
            resilience, social and community wellbeing, and embedding reconciliation. It
            combines geospatial data with surveys from users, stewards, and specialist
            experts to produce a structured scorecard for each space.
          </p>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The tool answers: &ldquo;How well designed are our green spaces in terms of
            resilience and social wellbeing?&rdquo; It makes the multi-dimensional value
            of open spaces visible in planning and investment decisions by grounding
            assessment in both quantitative spatial data and the lived knowledge of
            communities who use and care for these places.
          </p>
          <p className='book-intro-md text-dark-wood-800'>
            Developed with <strong>Evergreen</strong> and <strong>7GenCities</strong>,
            the tool embeds reconciliation principles directly into the evaluation
            process&nbsp;&mdash; ensuring that Indigenous land stewardship knowledge,
            sovereignty-seeking communities, and the voices of people often excluded
            from planning shape how spaces are assessed and improved.
          </p>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-6'>How the tool works</h2>
          <p className='book-intro-md text-dark-wood-800 mb-10'>
            The process runs across four phases, from mapping and data gathering through
            to scoring, visualisation, and funding application.
          </p>
          <div className='space-y-6'>
            {phases.map((phase) => (
              <div key={phase.label}>
                <div
                  className={`inline-block mb-4 px-4 py-1 rounded-full book-info-sm uppercase tracking-widest ${
                    phase.color === 'green'
                      ? 'bg-green-300 text-green-800'
                      : 'bg-indigo-300 text-indigo-800'
                  }`}
                >
                  {phase.label} Phase
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {phase.steps.map((step) => (
                    <div
                      key={step.number}
                      className={`rounded-[20px] border px-6 py-5 bg-white-200 ${
                        phase.color === 'green'
                          ? 'border-green-600'
                          : 'border-indigo-600'
                      }`}
                    >
                      <p
                        className={`book-info-sm uppercase tracking-widest mb-1 ${
                          phase.color === 'green'
                            ? 'text-green-600'
                            : 'text-indigo-500'
                        }`}
                      >
                        Step {step.number}
                      </p>
                      <p className='bold-intro-md text-dark-wood-800 mb-2'>
                        {step.title}
                      </p>
                      <p className='book-intro-md text-dark-wood-800'>{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Criteria for assessment</h2>
          <p className='book-intro-md text-dark-wood-800 mb-8'>
            Each open space is assessed across two broad dimensions, with indicators
            drawn from both ecological science and community-defined priorities.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-[30px] border border-indigo-600 bg-white-200 px-8 py-8'>
              <p className='bold-intro-lg text-indigo-700 mb-5'>Climate Resilience</p>
              <ul className='space-y-3'>
                {climateResilienceCriteria.map((item) => (
                  <li key={item} className='flex items-start gap-3'>
                    <span className='mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400' />
                    <span className='book-intro-md text-dark-wood-800'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='rounded-[30px] border border-green-600 bg-white-200 px-8 py-8'>
              <p className='bold-intro-lg text-green-700 mb-5'>
                Social &amp; Community Wellbeing
              </p>
              <ul className='space-y-3'>
                {socialWellbeingCriteria.map((item) => (
                  <li key={item} className='flex items-start gap-3'>
                    <span className='mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-green-400' />
                    <span className='book-intro-md text-dark-wood-800'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Survey approach: converting qualitative insight into measurable scores</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            For each assessment criterion, the tool uses structured survey questions with
            multiple-choice answers to guide users, stewards, and specialists. Each
            question references specific actors or data to consult and the indicators it
            contributes to.
          </p>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            For example, under <strong>Biodiversity</strong>, questions address the
            proportion of the site covered by natural habitat, structural and ecological
            connectivity of habitats, observed native bird species, and trends in native
            plant and wildlife populations over time. Each scored dimension contributes
            to a total section score, making it straightforward to compare sites and
            identify where investment or stewardship support is most needed.
          </p>
          <div className='rounded-[20px] border border-indigo-600 px-6 py-5 bg-white-200'>
            <p className='bold-intro-md text-indigo-700 mb-2'>
              Principles guiding the survey design
            </p>
            <ul className='book-intro-md text-dark-wood-800 space-y-2'>
              <li>
                <strong>Multiple perspectives:</strong> Each criterion is assessed by
                users, stewards, and specialists separately to capture complementary
                forms of knowledge.
              </li>
              <li>
                <strong>Inclusive by design:</strong> Survey distribution actively
                reaches elders, youth, Indigenous peoples, newcomers, and people with
                disabilities.
              </li>
              <li>
                <strong>Reconciliation-informed:</strong> Guiding questions embed
                Indigenous land stewardship knowledge and sovereignty principles
                throughout the evaluation.
              </li>
              <li>
                <strong>Actionable outputs:</strong> Scores link directly to management
                plans, funding proposals, and community-led improvement processes.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>
            In practice: BrickWorks, Toronto, Canada
          </h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The tool was piloted at <strong>Evergreen BrickWorks</strong> in Toronto&nbsp;&mdash;
            a large urban park and community hub in the Don River Valley. The pilot tested
            the full evaluation process across climate resilience and social wellbeing
            criteria, engaging the site&apos;s diverse community of users, stewards, and
            ecological specialists.
          </p>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            The BrickWorks site presented a rich test case: a brownfield restoration with
            significant biodiversity, high community use, and complex stewardship
            arrangements. The pilot helped validate the survey methodology, refine
            scoring logic, and demonstrate how spatial data and community-led knowledge
            can be integrated into a single evidence base for planning and funding.
          </p>
          <div className='rounded-[30px] border border-indigo-600 p-6 bg-white-200'>
            <p className='bold-intro-lg text-indigo-700 mb-2'>Partners</p>
            <p className='book-intro-md text-dark-wood-800'>
              The Open Space Evaluation Tool was developed in collaboration with{' '}
              <strong>Evergreen</strong>, a national Canadian not-for-profit focused on
              urban nature, and <strong>7GenCities</strong>, whose seven-generation
              stewardship lens shapes the reconciliation principles embedded throughout
              the tool. Supported by TD and Manulife.
            </p>
          </div>
        </section>
      </div>
    </ToolPageLayout>
  );
}
