import ToolPageLayout from '../../components/ToolPageLayout';

export default function ResilienceCompassToolPage() {
  return (
    <ToolPageLayout
      title='Resilience Compass'
      subtitle='A platform to guide local action on heat adaptation with geospatial analysis and community-driven metrics. Combines top-down risk data with bottom-up community insights to unlock collective sense-making and locally led adaptation.'
    >
      <div className='space-y-16'>
        <section>
          <h2 className='text-dark-wood-800 mb-4'>What it does</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            Resilience Compass is a Digital Twin and AI-powered decision support system that
            helps drive engagement, build legitimacy of change, and strengthen sense of
            belonging around climate adaptation. It combines <strong>geospatial insights</strong>{' '}
            (via Location-Based Scoring) with <strong>community insights</strong> (via
            locally driven indicators) so that adaptation is both data-informed and
            community-led—catalysing locally led adaptation and unlocking collective
            sense-making.
          </p>
          <p className='book-intro-md text-dark-wood-800'>
            The platform explores innovative metric design, visualisations, and interactive
            interfaces. It translates complex impacts into actionable indicators and
            presents tailored climate adaptation options based on location, user profile,
            and local priorities—so that citizens, community organisations, and local
            authorities can explore risk, share observations, shortlist solutions, and plan
            actions together.
          </p>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Framework: geospatial + community insights</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The Resilience Compass framework integrates two complementary inputs. <strong>LBS</strong>{' '}
            (Location-Based Scoring) provides top-down measures used to understand
            geo-based climate risk areas. <strong>CI</strong> (Community Insights) provides
            bottom-up, community-driven indicators used to understand community-level
            aspirations, capacities, and goals. Together they inform climate adaptation
            (policy) interventions and support growing climate adaptation capacities and
            location-based resilience services.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
            <img
              src='/assets/tools/rc-framework.png'
              alt='Resilience Compass framework: LBS (geospatial) and CI (community insights) feeding into climate adaptation interventions; catalysing locally led adaptation and unlocking collective sense-making'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              LBS and CI feed into climate adaptation interventions; the loop between
              collective sense-making and locally led adaptation keeps the process
              iterative and place-based.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Platform purpose and core features</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The platform connects systemic outcomes (the real-world city) to actors,
            factors, metrics, themes, and finally to clear indicators—evocative
            illustrations and simple, understandable stories that support decision-making.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200 mb-6'>
            <img
              src='/assets/tools/rc-platform-purpose.png'
              alt='Resilience Compass: platform to guide local action; diagram from systemic outcome and actors to factors, metrics, themes, and indicator; approach and core features'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              From systemic outcome and actors to factors, metrics, themes, and indicator.
              Core features: impact chains to tangible indicators; community engagement and
              adaptation options.
            </p>
          </div>
          <ul className='space-y-3'>
            <li className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>Impact chains to tangible indicators</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Translates complex impacts into actionable indicators for planning and
                evaluation.
              </p>
            </li>
            <li className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>Community engagement &amp; adaptation options</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Includes community-driven insights and presents adaptation strategies
                tailored to context.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>How things get done: EXPLORE, SHARE, SCAN, PLAN</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            Resilience Compass is built around four integrated stages, each with a distinct
            role in the value chain from risk analysis to tailored action and planning.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200 mb-6'>
            <img
              src='/assets/tools/rc-technology-approach.png'
              alt='Digital Twin and AI-powered decision support: EXPLORE (LBS climate risk), SHARE (citizen data), SCAN (filtering and tailored options), PLAN (templates and case studies)'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Four stages: EXPLORE (LBS for spatial climate risk analysis), SHARE (citizen
              data collection and collaborative mapping), SCAN (filtering and prioritisation
              for tailored adaptation options), PLAN (case studies and template repository
              for planning actions).
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>EXPLORE</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Climate risk analysis. Location-Based Scoring for spatial risk (e.g. urban
                heat island, exposure, vulnerability). Users can view risk scores, layers,
                and city status data.
              </p>
            </div>
            <div className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>SHARE</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Collaborative geographical mapping. Citizen data collection for sentiment
                and local needs—observations, photos, categories—so that priorities and
                place-based insights feed into the system.
              </p>
            </div>
            <div className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>SCAN</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Structured survey for tailored climate adaptation options. Filtering and
                prioritisation algorithms shortlist adaptation plans and case studies
                relevant to the user and location.
              </p>
            </div>
            <div className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>PLAN</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Planning tools and resources. Case study and template repository for
                planning actions—e.g. climate adaptation toolkits, impact assessment,
                community engagement playbooks.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Data infrastructure and value chain</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The filtering and matching logic integrates multiple data layers to create
            targeted interventions. Inputs flow from broad datasets into a unified pipeline
            that produces tailored climate action recommendations.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
            <img
              src='/assets/tools/rc-data-infrastructure.png'
              alt='Resilience Compass data infrastructure: input data layers (Climate Actions Matrix, Spatial Risks from EXPLORE, Local Insights from SHARE, User Profile from SCAN, Local Policies) leading to Tailored climate action'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Input data: Climate Actions Matrix (general database), Spatial Risks
              (EXPLORE), Local Insights (SHARE), User Profile (SCAN), Local Policies
              (general database). These are integrated to output tailored climate action.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Strategic overview: from data to financing</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            Resilience Compass is designed along four horizons—from data collection and
            risk modelling, through citizen engagement and impact modelling, to linking
            projects to wider financing and ecosystems. Each horizon combines
            solutions/services, data (APIs, AI), and tech infrastructure (e.g. digital
            twins, LBS and CI, conversational interfaces, remote sensing and smart
            contracts).
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200 mb-6'>
            <img
              src='/assets/tools/rc-strategic-overview.png'
              alt='Strategic overview: H0 data collection and risk modelling, H1 citizen engagement, H2 impact and benefits modelling, H3 linking to financing; solutions, data, tech blocks; outcomes: holistic context, citizens inspired, best projects developed, projects financed'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Horizons: H0 (data &amp; risk modelling), H1 (citizen engagement with
              adaptation), H2 (impact/benefits modelling), H3 (linking to financing).
              Outcomes: more holistic context awareness, citizens inspired, best projects
              developed, projects financed.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Main use cases: who uses what</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            Different user groups engage with different stages of the Resilience Compass.
            Local authorities focus on policy translation and strategy; community
            organisations on grant prep and structured support; citizens on advocacy and
            reporting. The platform supports all three with EXPLORE, SHARE, SCAN, and PLAN
            in different combinations.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
            <img
              src='/assets/tools/rc-use-cases.png'
              alt='Main use cases: Local Authorities (B2G) policy translation; Community Organisations (B2C/G) grant prep; Citizens (B2B) advocacy and curiosity; matrix of engagement with EXPLORE, SHARE, SCAN, PLAN'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Local authorities: EXPLORE, SCAN, PLAN. Community organisations: EXPLORE,
              SHARE, PLAN. Citizens: SHARE, SCAN, PLAN. Each group gets tailored access to
              risk analysis, collaborative mapping, adaptation options, and planning
              resources.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Interface: adaptation plans in action</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The interface brings together a map view (select area, review impact analysis),
            user context (location, goals, barriers, resources), and a curated set of
            climate adaptation plans—e.g. advocate for shaded public spaces and cooling
            hubs, tree-planting campaigns, passive cooling, heat resilience workshops,
            green roofs and walls—with type, scale of impact, and tags (air quality,
            health, biodiversity, etc.). Users can dive deeper into strategies and start
            planning with templates and case studies.
          </p>
          <div className='space-y-6'>
            <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
              <img
                src='/assets/tools/rc-interface-design.png'
                alt='Interface design: Explore (climate risk analysis), Scan (structured survey for tailored options), Plan (impact evaluation), Share (collaborative mapping); layered UI with map, dashboard, chatbot'
                className='w-full'
              />
              <p className='book-info-sm text-dark-wood-500 p-4'>
                Four functions: Explore (climate risk), Scan (tailored options), Plan
                (impact evaluation), Share (collaborative mapping). UI includes map,
                risk panels, and conversational support.
              </p>
            </div>
            <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
              <img
                src='/assets/tools/rc-interface-wip.png'
                alt='Resilience Compass interface: map with area selection, climate adaptation plans in action cards (shaded spaces, tree planting, passive cooling, workshops, policy, green roofs), user context and barriers/resources questions'
                className='w-full'
              />
              <p className='book-info-sm text-dark-wood-500 p-4'>
                Map plus adaptation plans in action: cards with type, scale of impact, and
                tags; user context (location, goals, barriers, resources) drives
                recommendations.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>In practice</h2>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            Resilience Compass is being developed and tested in UK research pilots and
            community workshops with local authorities, NGOs, and community groups. The aim
            is to combine spatial risk data with local knowledge so that heat adaptation
            actions are prioritised, co-designed, and—over time—linked to impact
            measurement and financing.
          </p>
          <div className='rounded-[30px] border border-indigo-600 p-6 bg-white-200'>
            <p className='bold-intro-lg text-indigo-700 mb-2'>Pilot with us</p>
            <p className='book-intro-md text-dark-wood-800 mb-4'>
              Interested in piloting Resilience Compass in your area—as a local authority,
              community organisation, or research partner? Get in touch to discuss
              deployment, customisation, and how EXPLORE, SHARE, SCAN, and PLAN can support
              your heat adaptation and resilience goals.
            </p>
          </div>
        </section>
      </div>
    </ToolPageLayout>
  );
}
