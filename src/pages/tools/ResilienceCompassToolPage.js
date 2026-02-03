import ToolPageLayout from '../../components/ToolPageLayout';

export default function ResilienceCompassToolPage() {
  return (
    <ToolPageLayout
      title='Resilience Compass'
      subtitle='A platform to guide local action on heat adaptation with geospatial analysis and community-driven metrics. Explores how to drive engagement, build legitimacy of change, and strengthen sense of belonging.'
    >
      <div className='space-y-16'>
        <section>
          <h2 className='text-dark-wood-800 mb-4'>What it does</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            Resilience Compass combines top-down geospatial insights (LBS) with bottom-up
            community insights (CI) so that climate adaptation is both data-informed and
            locally led. It translates complex impacts into tangible indicators and presents
            adaptation options that reflect community aspirations, capacities, and goals.
          </p>
          <p className='book-intro-md text-dark-wood-800'>
            The platform supports impact chains from systemic outcomes to clear indicators,
            and includes community engagement features—structured surveys, tailored adaptation
            options, and collaborative mapping—so stakeholders can explore scenarios, surface
            trade-offs, and co-design resilient place-based portfolios of NbS.
          </p>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Core features</h2>
          <ul className='space-y-4'>
            <li className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>Impact chains to tangible indicators</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Translates complex impacts into actionable indicators that actors can use for
                planning and evaluation.
              </p>
            </li>
            <li className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>
                Community engagement &amp; adaptation options
              </p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Includes community-driven insights and presents adaptation strategies—Explore
                (climate risk analysis), Scan (structured survey for tailored options), Plan
                (light-touch impact evaluation), and Share (collaborative mapping).
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>In practice</h2>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            Resilience Compass is being developed and tested in UK research pilots and
            community workshops. It is designed for local authorities, NGOs, and community
            groups who want to combine spatial risk data with local knowledge to prioritise
            and evaluate heat adaptation actions.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200 p-8'>
            <p className='book-intro-md text-dark-wood-800'>
              Interested in piloting Resilience Compass in your area? Get in touch to discuss
              deployment and customisation.
            </p>
          </div>
        </section>
      </div>
    </ToolPageLayout>
  );
}
