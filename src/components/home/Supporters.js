const logos = [
  { name: 'EIT Climate-KIC', file: 'eit-climatekic.png' },
  { name: 'NatureScot', file: 'NatureScot.png' },
  { name: 'Morgan Stanley', file: 'Morgan_Stanley.png' },
  { name: 'World Economic Forum', file: 'world_economic_forum.png' },
  { name: 'Google.org', file: 'google.org_logo.png' },
  { name: 'Stuttgart Innovations Fonds', file: 'inno.png' },
  { name: 'The Nature Conservancy', file: 'TNC.png' },
  { name: 'Woodland Trust', file: 'WT.png' },
  { name: 'EU Commission', file: 'EU.png' },
  { name: 'Esmee Fairbairn Foundation', file: 'EFF.png' },
  { name: 'Glasgow City Council', file: 'GCC.png' },
  { name: 'Madrid City Council', file: 'Madrid.png' },
  { name: 'Stuttgart City Council', file: 'Stuttgart.png' },
  { name: 'VAIV', file: 'VAIV.png' },
  { name: 'IBM', file: 'IBM.png' },
  { name: 'Lucidminds', file: 'LM.png' },
  { name: 'Evergreen', file: 'Evergreen.png' },
  { name: 'Politics for Tomorrow', file: 'p4t.png' },
];

function MissionBanner() {
  return (
    <div className='bg-problemSolution h-[40rem] mb-20 pl-4 sm:pl-0 flex items-center justify-center'>
      <h2 className='mx-auto max-w-xs sm:max-w-3xl px-4 sm:px-0 text-white text-3xl leading-5 sm:text-4xl sm:leading-6'>
        We're creating the required infrastructure to help cities, NGOs, and private partners secure
        funding for urban trees and green spaces.
      </h2>
    </div>
  );
}

export default function Supporters() {
  return (
    <>
      <MissionBanner />
      <section className='rounded-b-[140px] bg-dark-wood-800 my-20 py-16'>
        <div className='text-center pb-4 border-b border-white-200'>
          <h3 className='mt-2 text-white-200'>Supported by</h3>
        </div>
        <ul className='px-10 pt-[4.5rem] pb-10 lg:pt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 lg:gap-x-4'>
          {logos.map((logo) => (
            <li
              key={logo.name}
              className='flex flex-shrink-0 flex-grow justify-center lg:flex-grow-0'
            >
              <img className='h-40' src={`assets/partner_logos/${logo.file}`} alt={logo.name} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
