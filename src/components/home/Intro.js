const problemParagraphs = [
  'Cities increasingly depend on urban trees and nature to manage heat, absorb stormwater, improve air quality, support biodiversity, strengthen public health and make everyday places more liveable.',
  'Yet the systems that shape city investment still treat nature as a secondary asset. Urban trees are often funded through short-term planting programmes, while the long-term care, maintenance and governance they need to survive is harder to resource.',
  'This creates a structural gap. The value of urban nature is widely recognised, but it is still rarely visible in the budgets, business cases and investment decisions that determine what cities can protect, plant and sustain over time.',
  'As a result, nature is often treated as a cost, even though it performs essential civic functions: cooling streets, managing water, reducing risk, improving wellbeing and strengthening urban resilience.',
];

const benefits = [
  'Cooling',
  'Flood mitigation',
  'Health',
  'Air quality',
  'Biodiversity',
  'Social connection',
  'Amenity',
  'Resilience',
  'Avoided costs',
];

function Problem() {
  return (
    <section id='problem' className='pt-20 pb-20'>
      <div className='max-w-3xl mb-12'>
        <h2 className='text-dark-wood-800'>A structural gap between value and investment</h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start'>
        <div className='lg:col-span-3 space-y-6'>
          {problemParagraphs.map((text) => (
            <p key={text} className='book-intro-md text-dark-wood-800'>
              {text}
            </p>
          ))}
        </div>
        <div className='lg:col-span-2 flex items-center'>
          <p className='font-favorit font-bold text-4xl leading-6 text-indigo-600'>
            &ldquo;The value is recognised, but not resourced.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

function BeyondCarbon() {
  return (
    <div className='bg-white-300 border border-green-600 rounded-[40px] px-8 sm:px-14 py-10'>
      <div className='mb-2'>
        <span className='book-info-sm text-green-700 uppercase tracking-widest'>
          Value Beyond Carbon
        </span>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-start'>
        <div className='lg:col-span-3 space-y-4'>
          <h3 className='text-dark-wood-800'>Urban nature delivers more than carbon</h3>
          <p className='book-intro-md text-dark-wood-800'>
            TreesAI does not focus on carbon offsets. In cities, carbon captures only a small part
            of the value that trees and nature generate.
          </p>
          <p className='book-intro-md text-dark-wood-800'>
            Instead, we focus on the wider benefits that matter to urban life. By making these more
            visible, TreesAI helps cities build stronger evidence for investment, stewardship and
            long-term care.
          </p>
        </div>
        <div className='lg:col-span-2'>
          <p className='book-info-sm text-dark-wood-700 uppercase tracking-widest mb-4'>
            Benefits we measure
          </p>
          <ul className='flex flex-wrap gap-2'>
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className='px-4 py-1.5 rounded-full border border-green-600 book-info-sm text-green-700 bg-white'
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function WhatWeDo() {
  return (
    <section id='what-we-do' className='pt-4 pb-20'>
      <div className='max-w-3xl mb-10'>
        <h2 className='text-dark-wood-800'>
          Making urban nature visible, measurable and actionable.
        </h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12'>
        <p className='book-intro-md text-dark-wood-800'>
          TreesAI helps cities close that gap by making the value of urban nature visible,
          connecting benefits to beneficiaries, and designing the data, finance and governance
          models needed for long-term stewardship.
        </p>
        <p className='book-intro-md text-dark-wood-800'>
          We combine spatial analysis, ecosystem service valuation and decision-support tools to
          show where urban nature creates value, who benefits from it, and what is needed to sustain
          it over time. Our work supports cities to move beyond isolated planting targets towards a
          more strategic approach — one that connects climate resilience, public health,
          biodiversity, social wellbeing, maintenance, governance and finance.
        </p>
      </div>

      <div className='border-t border-b border-indigo-600 py-8 mb-14 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-12 text-center sm:text-left'>
        <p className='bold-intro-lg text-indigo-700'>Tools generate insight.</p>
        <span className='hidden sm:block w-px h-8 bg-indigo-300 self-center' aria-hidden='true' />
        <p className='bold-intro-lg text-dark-wood-800'>Services turn insight into action.</p>
      </div>

      <BeyondCarbon />
    </section>
  );
}

export default function Intro() {
  return (
    <>
      <Problem />
      <WhatWeDo />
    </>
  );
}
