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
            Service Valuation tool makes visible the full range of benefits that urban nature
            provides—both those we can already account for in euros and those we are still
            learning to measure and value.
          </p>
          <p className='book-intro-md text-dark-wood-800'>
            The tool answers: &ldquo;What is the value of a single tree in the city?&rdquo; by
            combining accounted benefits (land value uplift, air quality, energy savings, carbon,
            water, health, road repair) with not-yet-accounted benefits (biodiversity, wellbeing,
            social cohesion, crime reduction, and more).
          </p>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Benefits we quantify</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='rounded-[30px] border border-indigo-600 p-6 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700 mb-3'>Accounted value (examples)</p>
              <ul className='book-intro-md text-dark-wood-800 space-y-1'>
                <li>Land value uplift</li>
                <li>Air quality</li>
                <li>Energy savings</li>
                <li>Reduced medical incidents</li>
                <li>Reduced road repair costs</li>
                <li>Reduced water treatment costs</li>
                <li>Carbon sequestration</li>
              </ul>
            </div>
            <div className='rounded-[30px] border border-indigo-600 p-6 bg-white-200'>
              <p className='bold-intro-lg text-indigo-700 mb-3'>Not yet accounted value</p>
              <ul className='book-intro-md text-dark-wood-800 space-y-1'>
                <li>Biodiversity</li>
                <li>Social cohesion &amp; wellbeing</li>
                <li>Crime decrease</li>
                <li>Improved attention &amp; focus</li>
                <li>Noise reduction</li>
                <li>Storm water reduction</li>
                <li>Reduced heat island effect</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>In practice</h2>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            The tool has been used with The Nature Conservancy in Berlin to value street trees
            and inform decisions on the M10 tram extension, and in Glasgow and other pilots to
            build the case for NbS investment. Dashboards and analysis outputs support
            decision-makers and outcome buyers.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
            <img
              src='/assets/Berlin.png'
              alt='Ecosystem services valuation applied in Berlin'
              className='w-full max-h-80 object-cover'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Berlin: valuing street trees for preservation and tram line planning.
            </p>
          </div>
        </section>
      </div>
    </ToolPageLayout>
  );
}
