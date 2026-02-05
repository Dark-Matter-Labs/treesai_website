import ToolPageLayout from '../../components/ToolPageLayout';

export default function EcosystemServicesToolPage() {
  return (
    <ToolPageLayout
      title='Ecosystem Services Valuation'
      subtitle='Making visible the true value of nature. Quantifies the benefits of trees and green space—from cooling and flood mitigation to health and land value—so cities and partners can build robust economic cases for investment.'
      toolUrl='https://ecosystem-services.treesai.org/?lang=en'
      toolUrlLabel='Open valuation dashboard'
    >
      <div className='space-y-16'>
        <section>
          <h2 className='text-dark-wood-800 mb-4'>What it does</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            Investment today often defines value narrowly in monetary terms. Our Ecosystem
            Service Valuation tool translates ecological functions into benefits and, in turn,
            into economic metrics—making the benefits of urban nature visible in financial
            and planning systems so decision-makers can balance new infrastructure with the
            natural capital we already have.
          </p>
          <p className='book-intro-md text-dark-wood-800'>
            The tool answers: &ldquo;What is the value of a single tree in the city?&rdquo; It
            combines benefits we can already quantify in euros (land value uplift, air
            quality, energy savings, carbon, water, health, road repair) with benefits we
            are still learning to measure and value (biodiversity, wellbeing, social
            cohesion, crime reduction, and more). By quantifying what trees provide, we can
            integrate ecological assets into infrastructure planning and make a stronger
            case for preserving and expanding urban nature.
          </p>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Value chain: from nature to economic value</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The tool follows a clear chain: an <strong>NbS scheme</strong> (e.g. increase in
            canopy cover) leads to a <strong>function</strong> (e.g. particulate filtering),
            which delivers a <strong>benefit</strong> (e.g. improved air quality), which
            we then translate into <strong>economic value</strong> (e.g. reduced health
            costs in euros). Each step is grounded in data and established valuation
            methods—for example damage costs avoided, or savings from not having to implement
            other pollution control measures—so that the numbers are transparent and
            defensible.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
            <img
              src='/assets/tools/es-value-chain.png'
              alt='Value chain: NbS scheme (canopy cover) to Function (particulate filtering) to Benefit (improved air quality) to Economic Value (reduced health costs in euros)'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Example: increase in canopy cover → particulate filtering (pollutants
              removed per year) → improved air quality → reduced health costs (€). Sources
              such as USDA Forest Service urban forest studies support the damage-cost
              functions used.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Valuation methods: how we assign value</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            Different NBS benefits are valued using different methods, depending on whether
            they are directly observed in markets, avoided damages, replacement costs, or
            stated preferences. The tool applies a matrix of valuation methods to benefit
            categories so that each type of benefit is treated consistently and
            transparently.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200 mb-6'>
            <img
              src='/assets/tools/es-valuation-methods.png'
              alt='Matrix of NBS benefits (tourism, climate regulation, biodiversity, water quality, health) and valuation methods (market prices, avoided damages, replacement cost, stated preferences, value transfer)'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              NBS benefits and applicable valuation methods. Methods include: market
              prices (directly observed in markets), net factor income, avoided damages
              (damage costs avoided due to NBS), replacement cost (cost of replacing NBS
              with an engineered solution), stated preferences (WTP from surveys), and value
              transfer (results from existing studies in similar contexts).
            </p>
          </div>
          <p className='book-intro-md text-dark-wood-800'>
            In practice we use <strong>avoided damages</strong> for climate regulation and
            flood mitigation, <strong>market prices</strong> for carbon, and{' '}
            <strong>replacement cost</strong> for water quality. The model is supported by
            established tools and frameworks such as GI-VAL, B£ST, and InVEST, combined with
            local data (canopy, meteorology, demographics) to produce site-specific estimates.
          </p>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>What we quantify: single tree value</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            A single tree in the city generates both accounted value (monetised today) and
            not-yet-accounted value (benefits we recognise but do not yet fully price). The
            tool makes both visible so that planning and investment can evolve to capture
            more of the full value of urban nature.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200 mb-6'>
            <img
              src='/assets/tools/es-single-tree-value.png'
              alt='What is the value of a single tree: accounted value (land value uplift, air quality, energy savings, carbon, etc.) and not yet accounted value (biodiversity, wellbeing, social cohesion, crime decrease, etc.)'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Accounted value (examples in €): land value uplift, air quality, energy
              savings, reduced medical incidents, road repair, water treatment, carbon
              sequestration. Not yet accounted: crime decrease, social cohesion, attention
              &amp; focus, noise, inactivity &amp; obesity, hospital time, mental wellbeing,
              visitor spend, jobs, biodiversity.
            </p>
          </div>
          <p className='book-intro-md text-dark-wood-800'>
            Benefit groups we model in depth include <strong>Climate Change Adaptation
            &amp; Mitigation</strong> (shelter from wind, heat island reduction, carbon
            storage), <strong>Water Management &amp; Flood Alleviation</strong> (rainfall
            interception, stormwater reduction, sewer and treatment savings), and{' '}
            <strong>Health &amp; Well-being</strong> (stress reduction, air quality,
            heat-related mortality and morbidity, active lifestyles). The dashboard
            presents total ecosystem service value, value per tree, and a detailed
            breakdown by function with benefit quantification (e.g. kWh saved, kgCO2
            sequestered, litres diverted) and value per year over defined timeframes.
          </p>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>How things get done: data, tools, and dashboard</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            Implementing the valuation typically involves: (1) defining the site and
            scenario (e.g. existing trees in a 50 m buffer from a road or corridor);
            (2) gathering local data—high-resolution canopy data, meteorological
            information, and socioeconomic demographics; (3) running the model with
            chosen valuation methods and tools (GI-VAL, B£ST, InVEST); (4) producing
            scenario-based results (baseline vs. removal or alternative design); and
            (5) sharing results via an interactive web dashboard so that stakeholders can
            explore scenarios, compare outcomes, and zoom into the map.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
            <img
              src='/assets/tools/es-dashboard.png'
              alt='Ecosystem Service Valuation interactive dashboard: scenario selection, total value and value per tree, map with trees, benefits table and charts'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Interactive dashboard: scenario selection, total and per-tree valuation,
              map of trees, and detailed benefit tables (benefit group, tree function,
              quantification, value per year, timeframe) plus charts for benefit
              distribution and value by function.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>In practice: Berlin M10 tram and street tree preservation</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The district council of Berlin Charlottenburg-Wilmersdorf and The Nature
            Conservancy commissioned Trees as Infrastructure to develop and deploy the
            Ecosystem Services Valuation Tool for the Mierendorff Island area affected by
            the planned extension of tram line M10. The aim was to value street trees so
            that the city could make a stronger case for reducing tree removal and
            renegotiating route and compensation.
          </p>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The model assessed ecosystem services within a <strong>50 m buffer</strong> along
            the tram route, quantifying benefits in three areas: Climate Adaptation &amp;
            Mitigation (shelter from wind, temperature moderation, carbon); Water
            Management &amp; Flood Alleviation (rainfall interception, stormwater
            reduction); and Health &amp; Well-being (stress, air quality, active lifestyles).
          </p>
          <div className='rounded-[20px] border border-green-600 px-6 py-4 bg-white-200 mb-6'>
            <p className='bold-intro-lg text-green-800 mb-2'>Key findings (Berlin baseline)</p>
            <ul className='book-intro-md text-dark-wood-800 space-y-1'>
              <li>
                <strong>Baseline:</strong> Total value of ecosystem services from all
                standing trees in the 50 m buffer over 10 years: <strong>€10.5 million</strong>.
                Average value per tree over the same period: <strong>€29,440</strong>.
              </li>
              <li>
                <strong>Optimistic</strong> (35 trees removed): projected loss ~€1 million
                over a decade.
              </li>
              <li>
                <strong>Realistic</strong> (131 trees at risk): projected loss ~€4.2 million
                over a decade.
              </li>
              <li>
                <strong>Alternative route</strong> (45 trees): projected loss ~€300,000—lower
                in part because trees along the alternative route are smaller and the area
                has fewer residents, so per-tree and health-related benefits are lower.
              </li>
            </ul>
          </div>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            A central insight from the study: <strong>not all trees have the same
            value</strong>. The impact of a tree depends on its context—what surrounds it,
            how many people it benefits, local environmental risks, and how much the urban
            system relies on it. Understanding that context is key to preserving urban
            nature and maximising ecosystem services. The district is now using the study to
            support renegotiation of the tram extension, planning alternatives, compensation
            measures, and their purpose.
          </p>
          <div className='rounded-[30px] border border-indigo-600 p-6 bg-white-200'>
            <p className='bold-intro-lg text-indigo-700 mb-2'>Read the Berlin story</p>
            <p className='book-intro-md text-dark-wood-800 mb-4'>
              Full methodology, scenario results, risks and model limitations, and
              implications for policy and financing—including tree protection ordinances,
              compensation frameworks, and coordinated planning—are set out in our blog post
              and report.
            </p>
            <a
              href='https://provocations.darkmatterlabs.org/unlocking-the-value-for-urban-nature-an-economic-case-for-street-tree-preservation-in-berlin-af0714bdd9f3'
              target='_blank'
              rel='noreferrer noopener'
              className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
            >
              Unlocking the value for urban nature: Berlin street tree preservation
            </a>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Risks and model limitations</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The model offers valuable insights but has boundaries. Accuracy depends on data
            quality; incomplete inputs can lead to misestimates. We simplify complex
            natural systems to yield actionable numbers and may not capture every
            site-specific nuance (e.g. microclimates, exact tree placement). Putting a
            price on public commons like clean air remains challenging without standard
            market prices—nevertheless, indicative estimates help make benefits visible in
            policy and planning. The model does not yet fully capture social and cultural
            values or differential impacts on vulnerable populations. It is best used as
            one input among others, combined with local expertise and qualitative insights
            for evidence-informed decision-making.
          </p>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Where else we use it</h2>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            Beyond Berlin, the tool has been used in Glasgow and other pilots to build the
            case for NbS investment. Dashboards and reports support decision-makers,
            outcome buyers, and city stakeholders who want to channel financing toward
            tree maintenance, climate adaptation, and living infrastructure.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
            <img
              src='/assets/Berlin.png'
              alt='Ecosystem services valuation applied in Berlin'
              className='w-full max-h-80 object-cover'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Berlin: valuing street trees to inform the M10 tram extension and street tree
              preservation.
            </p>
          </div>
        </section>
      </div>
    </ToolPageLayout>
  );
}
