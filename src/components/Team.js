const people = [
  {
    name: 'Arianna Smaron',
    role: 'Product and visual design',
    imageUrl: 'assets/team/Arianna.jpg',
  },
  {
    name: 'Axel Nilsson',
    role: 'Data science',
    imageUrl: 'assets/team/Axel.png',
  },
  {
    name: 'Bulent Ozel',
    role: 'Scenario analyses modelling',
    imageUrl: 'assets/team/Roni.jpg',
  },
  {
    name: 'Carlotta Conte',
    role: 'Mission holder and Nature-based Solutions innovation',
    imageUrl: 'assets/team/Carlotta.jpg',
  },
  {
    name: 'Carolina Christiansen',
    role: 'Financial analysis',
    imageUrl: 'assets/team/Carolina.JPG',
  },
  {
    name: 'Chloe Treger',
    role: 'Natural capital innovation research',
    imageUrl: 'assets/team/Chloe.JPG',
  },
  {
    name: 'Gurden Batra',
    role: 'Full stack development',
    imageUrl: 'assets/team/Gurden.jpg',
  },
  {
    name: 'Konstantina Koulouri',
    role: 'Natural capital innovation research',
    imageUrl: 'assets/team/Kosta.jpg',
  },
  {
    name: 'Marko Petrovic',
    role: 'Impact modelling',
    imageUrl: 'assets/team/Marko.JPG',
  },
  {
    name: 'Oguzhan Yayla',
    role: 'Data infrastructure',
    imageUrl: 'assets/team/Oz.jpg',
  },
  {
    name: 'Raj Kalia',
    role: 'Financial structuring',
    imageUrl: 'assets/team/Raj.jpg',
  },
  {
    name: 'Sofia Valentini',
    role: 'Portfolio structuring and GIS expert',
    imageUrl: 'assets/team/Sofia.jpg',
  },
];

export default function Team() {
  return (
    <div className='bg-gray' id='team'>
      <div className='text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <p className='font-grotesk text-3xl text-gray-900 sm:text-4xl pt-20'>Team</p>
      </div>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
          <div className='space-y-5 sm:space-y-4'>
            <p className='mt-3 text-lg font-regular text-gray-500'>
              We are a team of urban planning, technology and finance experts part of{' '}
              <a
                href='https://darkmatterlabs.org/'
                target='_blank'
                className='hover:text-black'
                rel='noreferrer noopener'
              >
                <b>Dark Matter Labs</b>
              </a>{' '}
              and{' '}
              <a
                href='https://lucidminds.ai/'
                target='_blank'
                className='hover:text-black'
                rel='noreferrer noopener'
              >
                <b>Lucidminds</b>
              </a>
              .
            </p>
          </div>
          <div className='lg:col-span-2'>
            <ul className='space-y-12 sm:grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8'>
              {people.map((person) => (
                <li key={person.name}>
                  <div className='flex items-center space-x-4 lg:space-x-6'>
                    <img
                      className='w-16 h-16 rounded-full lg:w-20 lg:h-20'
                      src={person.imageUrl}
                      alt='TreesAI team member'
                    />
                    <div className='font-medium text-lg leading-6 space-y-1'>
                      <h3>{person.name}</h3>
                      <p className='text-green2'>{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
