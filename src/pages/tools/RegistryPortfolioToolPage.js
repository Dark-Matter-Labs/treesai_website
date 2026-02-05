import ToolPageLayout from '../../components/ToolPageLayout';

export default function RegistryPortfolioToolPage() {
  return (
    <ToolPageLayout
      title='Registry & Portfolio Platform'
      subtitle='Enabling investment in the places that matter the most. Tracks projects, outcomes, and finance flows so cities and investors can steward long-term, people-centred nature portfolios.'
    >
      <div className='space-y-16'>
        <section>
          <h2 className='text-dark-wood-800 mb-4'>What it does</h2>
          <p className='book-intro-md text-dark-wood-800 mb-4'>
            The TreesAI Platform &amp; Registry supports urban actors to build and manage a
            portfolio of Nature-based Solutions (NbS). It compiles projects into a one-stop
            database, evaluates and scores them using our spatial analysis methodology, and
            connects projects to outcome buyers and fit-for-purpose financial instruments.
          </p>
          <p className='book-intro-md text-dark-wood-800'>
            The goal is to make trees and green infrastructure an investable asset class—with
            clear reporting, transparent outcomes, and governance that allows cities, funds,
            and communities to align around long-term stewardship.
          </p>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>Key capabilities</h2>
          <ul className='space-y-4'>
            <li className='rounded-[20px] border border-green-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-green-800'>City-wide NbS database</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                A comprehensive list of projects and interventions, creating a single view for
                all Nature-based Solutions in a place.
              </p>
            </li>
            <li className='rounded-[20px] border border-green-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-green-800'>Evaluating and scoring projects</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                Based on our spatial analysis and risk/benefit methodology so that priorities
                are evidence-based.
              </p>
            </li>
            <li className='rounded-[20px] border border-green-600 px-6 py-4 bg-white-200'>
              <p className='bold-intro-lg text-green-800'>Financial instruments &amp; connections</p>
              <p className='book-intro-md text-dark-wood-800 mt-1'>
                With Dark Matter Capital Systems we explore tree canopy funds and whole-city
                transition portfolios, and link cities and partners to opportunities and
                funding.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className='text-dark-wood-800 mb-4'>In practice</h2>
          <p className='book-intro-md text-dark-wood-800 mb-6'>
            The platform has been piloted in Glasgow with Clyde Climate Forest, Glasgow City
            Council, FloodRe, Nationwide, Scottish Water, SEPA, and others—quantifying flood
            mitigation capacity and working with outcome buyers to fund NbS portfolios. It is
            also part of international consortia such as Nature-Demo.
          </p>
          <div className='rounded-[30px] border border-indigo-600 overflow-hidden bg-white-200'>
            <img
              src='/assets/Glasgow.png'
              alt='Glasgow pilot: NbS registry and portfolio'
              className='w-full max-h-80 object-cover'
            />
            <p className='book-info-sm text-dark-wood-500 p-4'>
              Glasgow: piloting the NbS registry and portfolio strategy with local and national
              partners.
            </p>
          </div>
        </section>
      </div>
    </ToolPageLayout>
  );
}
