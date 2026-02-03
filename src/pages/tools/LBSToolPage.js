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
            Location-Based Scoring uses geospatial insights and top-down measures to understand
            geo-based climate risk areas. It combines hazard data (heat, air pollution, flood),
            population exposure, and vulnerability (coping capacities and sensitivities) to produce
            a risk score that helps cities and partners prioritise interventions.
          </p>
          <p className='book-intro-md text-dark-wood-800'>
            LBS is designed to work alongside community-driven insights (bottom-up) so that
            geospatial analysis and local knowledge together unlock collective sense-making and
            locally led adaptation.
          </p>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>How risk is calculated</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The impact chain links hazards, vulnerability, and exposure to produce a final risk
            score:
          </p>
          <ul className='list-disc pl-6 book-intro-md text-dark-wood-800 space-y-2'>
            <li>
              <strong>Hazards:</strong> Heat (temperatures, heat stress days, urban heat island),
              air pollution, stress.
            </li>
            <li>
              <strong>Vulnerability:</strong> Coping capacities (green & blue infrastructure,
              ventilation, health care, cooling) and sensitivities (elderly, young, schools,
              low income, impervious surfaces, pre-existing disease).
            </li>
            <li>
              <strong>Exposure:</strong> Population and assets in high-risk areas.
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>In practice</h2>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            LBS has been used in Stuttgart (prioritising NbS with the municipality), Croydon
            (climate adaptation plan and vulnerability indicators at LSOA level), and other
            pilots. Outputs include maps, radar charts on vulnerability indicators, and
            demographics and socioeconomic data to support evidence-based planning.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
