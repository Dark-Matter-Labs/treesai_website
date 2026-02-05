import ToolPageLayout from '../../components/ToolPageLayout';

export default function LBSToolPage() {
  return (
    <ToolPageLayout
      title='Location-Based Scoring (LBS)'
      subtitle='Sensing the system and identifying key areas for intervention. Maps climate and social risks to prioritise where nature-based solutions can have the greatest impact.'
      toolUrl='https://lbs.treesai.org/'
      toolUrlLabel='Open LBS tool'
    >
      <div className='space-y-16'>
        <section>
          <h2 className='text-dark-wood-800 mb-4'>What it does</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            Location-Based Scoring (LBS) provides an overlay and weighting process of
            location-based vulnerabilities to climate risks in the city—such as heavy rainfall
            hazards, air pollution, and heat islands—and helps decision-makers assess the most
            effective locations for maintaining and increasing green infrastructure to mitigate
            climate risk. It is designed to work alongside community-driven insights
            (bottom-up) so that geospatial analysis and local knowledge together unlock
            collective sense-making and locally led adaptation.
          </p>
          <p className='book-intro-md text-dark-wood-800'>
            The methodology is a risk-based vulnerability assessment aligned with the IPCC’s
            risk framework and adapted from guidelines such as IVAVIA (Impact and Vulnerability
            Analysis of Vital Infrastructures and built-up Areas). It helps cities understand
            hazard–exposure relationships in the local context, identify geographical hotspots
            that lack green in relation to their level of risk and potential, and consolidate
            compound site factors into a single location-based score.
          </p>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>How risk is calculated: the impact chain</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            Climate risk in LBS is the result of the interaction of <strong>vulnerability</strong>,{' '}
            <strong>exposure</strong>, and <strong>hazard</strong>. Vulnerability is determined
            both by sensitivity to damage and by coping capacity to deal with it.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200 mb-6'>
            <img
              src='/assets/tools/lbs-impact-chain.png'
              alt='LBS impact chain: hazard, stress, exposure, vulnerability (coping capacities and sensitivities) leading to risk score'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Impact chain: from hazards and stressors, through population exposure and
              vulnerability (coping capacities vs. sensitivities), to a final risk score.
            </p>
          </div>
          <ul className='list-disc pl-6 book-intro-md text-dark-wood-800 space-y-2'>
            <li>
              <strong>Hazards:</strong> Heat (annual avg/max temperatures, heat stress days,
              urban heat island mapping), air pollution, and stress factors.
            </li>
            <li>
              <strong>Vulnerability — Coping capacities:</strong> Green & blue infrastructure,
              urban ventilation, access to health care, hospital beds, and cooling in
              households.
            </li>
            <li>
              <strong>Vulnerability — Sensitivities:</strong> Elderly and young population,
              schools and nursing homes, population living alone, low income and vulnerable
              groups, impervious non-vegetated surfaces, and residents with pre-existing
              disease.
            </li>
            <li>
              <strong>Exposure:</strong> Population and assets in areas affected by hazards and
              stressors.
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Data: what goes in</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            LBS draws on multiple geospatial data layers. Each geolayer is geoprocessed into
            defined spatial boundaries and resolution (e.g. a 500×500 m grid) so that
            different themes can be combined and compared. Inputs are grouped into four
            indicator types: hazard, exposure, vulnerability, and stress.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200 mb-6'>
            <img
              src='/assets/tools/lbs-resource-allocation.png'
              alt='Geospatial data stack: canopy and green infrastructure, environmental and weather, infrastructure and urban characteristics, institutional, socio-economic and demographics'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Geospatial data used in LBS: canopy & green infrastructure, environmental &
              weather, infrastructure & urban characteristics, institutional, and
              socio-economic & demographics.
            </p>
          </div>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
            <img
              src='/assets/tools/lbs-data-management.png'
              alt='Data management: geoprocessing geolayers to a 500x500m grid; QGIS; input indicators (Hazard, Exposure, Vulnerability, Stress) to Output Indicators Grid'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Data management: once data requirements are collected, each geolayer is
              geoprocessed (e.g. in QGIS) into the chosen resolution. Inputs (hazard,
              exposure, vulnerability, stress indicators) become a unified Indicators Grid
              (e.g. 500×500 m) for analysis.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Value chain: from data to decisions</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            LBS shifts from <strong>sectoral</strong> to <strong>systemic</strong> resource
            allocation. When investments are coordinated across sectors and aligned with
            spatial risk, impact is not only additive but compounded—enabling better
            prioritisation of NbS in the places that need them most.
          </p>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            The value chain runs from defining impact chains and indicators, through data
            collection and geoprocessing, to index score calculation and finally to an
            interactive platform where users can explore risk by location and find locations
            with specific characteristics.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
            <img
              src='/assets/tools/lbs-process.png'
              alt='LBS process: Impact chain, Data collection and geoprocessing, Index score calculation (LBS model), LBS Platform for interactive dashboard'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              End-to-end LBS process: (1) Impact chain — qualitative risk assessment and
              indicator design; (2) Data collection and geoprocessing; (3) LBS model —
              normalization, weighting, aggregation; (4) Onboarding into the LBS platform
              for interactive visualization and exploration.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>How things get done: the LBS process in practice</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            Implementing LBS with a city or partner typically follows a co-created,
            step-by-step process. Below is how we did it in Stuttgart (with the climate
            protection unit, urban planning, civic engineering, health, and tree management
            teams), supported by the Stuttgarter Klima-Innovationsfonds and The Nature
            Conservancy.
          </p>
          <div className='space-y-6'>
            <div className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>1. Scoping: define focus climate themes</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Identify the most pressing hazard–exposure relationships that NbS can help
                mitigate and that could also affect green infrastructure. In Stuttgart we
                defined five: heat risk on population health; drought risk on green
                infrastructure; air pollution risk on population health; surface water
                flooding risk on built-up areas; and surface water flooding risk on the
                transport network.
              </p>
            </div>
            <div className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>2. Impact chains and indicators</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                For each theme, build an impact chain (cause–effect between hazard and
                exposure) and select indicators for hazard, exposure, and vulnerability
                (coping capacity and sensitivity). Indicator choice is guided by data
                availability and by co-creation workshops and expert input.
              </p>
            </div>
            <div className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>3. Data collection and geoprocessing</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Gather spatial data (e.g. from city inventories and open-source or satellite
                data): population density, surface water flooding risk, urban heat island,
                impermeable surfaces, tree register, and other relevant layers. Process all
                layers to a common resolution (e.g. 500×500 m grid) using GIS software so
                that each spatial unit can receive a location score.
              </p>
            </div>
            <div className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>4. Weighting and aggregation</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Weighting of indicators is done in collaboration with the city—e.g. in
                workshops where departments allocate points by importance and relevance. The
                LBS model then normalizes, weights, and aggregates indicators to compute a
                location score per spatial unit for each impact chain.
              </p>
            </div>
            <div className='rounded-[20px] border border-indigo-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700'>5. Platform and dashboard</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Results are onboarded into the LBS platform. Users can (a) explore the risk
                of a location (e.g. by address or by clicking on the map) and (b) find
                locations with a given characteristic. Maps and charts support comparison of
                climate risk across the city and guide the location, design, and maintenance
                of NbS.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Climate risk as a spatial output</h2>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            The final output of the value chain is a risk score that can be visualised
            spatially—for example as a grid or heatmap—so that hotspots and priority areas
            are clear at a glance.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
            <img
              src='/assets/tools/lbs-climate-risk.png'
              alt='Climate risk as the result of vulnerability, exposure, and hazard; risk score shown as spatial grid'
              className='w-full'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Climate risk combines vulnerability, exposure, and hazard; the risk score is
              delivered as a spatial layer for mapping and prioritisation.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>In practice: Stuttgart, Croydon, and beyond</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            LBS has been implemented in <strong>Stuttgart</strong> to prioritise NbS with
            the municipality and is being used to guide the location and design of
            interventions, maintenance schedules, and policy. In <strong>Croydon</strong>, we
            used it to build the climate adaptation evidence base—with vulnerability
            indicators at LSOA level, radar charts, and demographics—to support spatial
            climate adaptation strategy.
          </p>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            Possible next steps for cities using LBS include: linking LBS to ecosystem
            valuation tools for financing; supporting private landowners and utilities to
            integrate green infrastructure; and connecting LBS to real estate or insurance
            risk models.
          </p>
          <div className='rounded-[30px] border border-indigo-600 p-6 bg-white-200'>
            <p className='bold-intro-lg text-indigo-700 mb-2'>Read the Stuttgart story</p>
            <p className='book-intro-md text-dark-wood-800 mb-4'>
              We summarise how LBS was applied in Stuttgart—from scoping and impact chains
              to data, weighting workshops, and the interactive dashboard—in a blog post on
              Provocations.
            </p>
            <a
              href='https://provocations.darkmatterlabs.org/treesai-is-implementing-location-based-scoring-in-stuttgart-c54c752bdaaf'
              target='_blank'
              rel='noreferrer noopener'
              className='inline-flex items-center px-4 py-2 bold-intro-sm rounded-[30px] text-white bg-dark-wood-800 hover:bg-dark-wood-600'
            >
              TreesAI is implementing Location-Based Scoring in Stuttgart
            </a>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
              <img
                src='/assets/LBS.png'
                alt='Location-Based Scoring app interface showing map and risk layers'
                className='w-full h-56 object-cover'
              />
              <p className='book-info-sm text-dark-wood-500 p-4'>
                LBS app: explore risk by location and layer climate and social data.
              </p>
            </div>
            <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
              <img
                src='/assets/Croydon.png'
                alt='Croydon adaptation: vulnerability indicators and demographics example'
                className='w-full h-56 object-cover'
              />
              <p className='book-info-sm text-dark-wood-500 p-4'>
                Example: Croydon LSOA vulnerability and adaptation measures.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ToolPageLayout>
  );
}
