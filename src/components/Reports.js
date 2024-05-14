import { useState } from 'react';
import SectionHeader from './SectionHeader';

const videos = [
  {
    id: 0,
    title: 'Sebastian Klemm, TreesAI | Greentech.LIVE 2023 Fall Editon',
    href: 'https://www.youtube.com/watch?v=tyK-SvzjuiU',
    date: 'Nov 28, 2023',
    datetime: '2023-11-28',
    category: { name: '28:49' },
    imageUrl: 'assets/GreentechLIVE-SebastianKlemm-TreesAI.jpg',
    preview: '',
    readingLength: 'GreentechLive',
  },
  {
    id: 1,
    title: 'TreesAI in Glasgow 2022',
    href: 'https://vimeo.com/761604792',
    date: 'Oct 18, 2022',
    datetime: '2022-10-18',
    category: { name: '1:35' },
    imageUrl: 'assets/GlasgowVid.png',
    preview: '',
    readingLength: 'Dark Matter Labs',
  },
  {
    id: 2,
    title: 'Carlotta Conte presenting at COP26',
    href: 'https://youtu.be/pfVScBgCU9A',
    date: 'Nov 6, 2021',
    datetime: '2021-11-06',
    category: { name: '19:12' },
    imageUrl: 'assets/COPbanner.png',
    preview: '',
    readingLength: 'Dark Matter Labs',
  },
  {
    id: 3,
    title: 'TreesAI presenting at Mayday C4 events: Deforestation and Carbon Offsets',
    href: 'https://www.youtube.com/watch?v=j9HotCSqh_M',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: '1:24:01' },
    imageUrl: 'assets/video-1.png',
    preview: '',
    readingLength: 'Mayday C4',
  },
  {
    id: 4,
    title: 'What technology can do for sustainability - The Google.org Impact Challenge on Climate',
    href: 'https://www.youtube.com/watch?t=75&v=Y1X3BzuNgdA&feature=youtu.be',
    date: 'Jul 6, 2021',
    datetime: '2021-7-6',
    category: { name: '6:20' },
    imageUrl: 'assets/video-2.png',
    preview:
      'The Google.org Impact Challenge on Climate commits €10M to fund bold ideas that aim to use technology to accelerate Europe’s progress toward a greener, more resilient future.',
    readingLength: 'Euractiv',
  },
  {
    id: 5,
    title: 'Interview with Kate Raworth at Trees as Infrastructure Workshop',
    href: 'https://vimeo.com/showcase/6628565/video/377023491',
    date: '2019',
    datetime: '2019-12-3',
    category: { name: '45:43' },
    imageUrl: 'assets/video-3.png',
    preview:
      'This is the first public workshop of the research project ‘Trees as Infrastructure’ by Dark Matter Labs in partnership with EIT Climate-KIC.',
    readingLength: 'Dark Matter Labs',
  },
  {
    id: 6,
    title: 'Interview with Mathias Disney at Trees as Infrastructure Workshop',
    href: 'https://vimeo.com/showcase/6628565/video/377020523',
    date: '2019',
    datetime: '2019-12-3',
    category: { name: '5:31' },
    imageUrl: 'assets/video-4.png',
    preview: '',
    readingLength: 'Dark Matter Labs',
  },
  {
    id: 8,
    title: 'Interview with Michelle Zucker at Trees as Infrastructure Workshop',
    href: 'https://vimeo.com/showcase/6628565/video/379088421',
    date: '2019',
    datetime: '2019-12-3',
    category: { name: '2:05' },
    imageUrl: 'assets/video-5.png',
    preview: '',
    readingLength: 'Dark Matter Labs',
  },
  {
    id: 9,
    title: 'Interview with Jim C. Smith at Trees as Infrastructure Workshop',
    href: 'https://vimeo.com/showcase/6628565/video/381168491',
    date: '2019',
    datetime: '2019-12-3',
    category: { name: '3:25' },
    imageUrl: 'assets/video-6.png',
    preview: '',
    readingLength: 'Dark Matter Labs',
  },
];

const blogPosts = [
  {
    id: 0,
    title: 'TreesAI is implementing location-based scoring in Stuttgart',
    href: 'https://provocations.darkmatterlabs.org/treesai-is-implementing-location-based-scoring-in-stuttgart-c54c752bdaaf',
    date: 'April 10, 2024',
    datetime: '2024-04-10',
    category: { name: 'Blog' },
    imageUrl: 'assets/StuttgartMedium.png',
    preview:
      'In this blog we summarise how one of our tools, the TreesAI Location-based Scoring, has been applied in Stuttgart to assess climate risks spatially and support the design and prioritisation of different urban nature-based solutions.',
    readingLength: '8 mins',
  },
  {
    id: 1,
    title:
      'Green Urban Scenarios: A Framework for Digital Twin Representation and Simulation for Urban Forests and Their Impact Analysis',
    href: 'https://auf.isa-arbor.com/content/50/1/109',
    date: 'January 1, 2024',
    datetime: '2024-1-1',
    category: { name: 'Academic Paper' },
    imageUrl: 'assets/1.cover-source.jpg',
    preview:
      'The paper presents the Green Urban Scenarios (GUS) framework for designing and monitoring green infrastructures. GUS considers weather, maintenance, tree species, diseases, and spatial distributions of trees to forecast their impacts.',
    readingLength: '1 hour',
  },
  {
    id: 2,
    title: 'IBM Advances Geospatial AI to Address Climate Challenges',
    href: 'https://newsroom.ibm.com/2023-11-30-IBM-Advances-Geospatial-AI-to-Address-Climate-Challenges',
    date: 'November 30, 2023',
    datetime: '2023-11-30',
    category: { name: 'Report' },
    imageUrl: 'assets/NASA_2_Banner.jpg',
    preview:
      'IBM continues to advance its AI model strategy in part through the creation, training, fine-tuning and open-sourcing of foundation models – models that can be used for different tasks and apply information from one situation to another – designed for domains beyond natural language, including geospatial applications.',
    readingLength: '10 mins',
  },
  {
    id: 3,
    title: 'Accelerating green-urban planning simulations with AWS Batch',
    href: 'https://aws.amazon.com/blogs/hpc/accelerating-green-urban-planning-simulations-with-aws-batch/',
    date: 'November 1, 2023',
    datetime: '2023-11-1',
    category: { name: 'Blog' },
    imageUrl: 'assets/GUS2.png',
    preview:
      'In this blog post, we’ll explore how the Netherlands-based organization Lucidminds AI is addressing this challenge through their Green Urban Scenarios simulator (GUS).',
    readingLength: '30 mins',
  },
  {
    id: 4,
    title: 'TreesAI Glasgow Pilot Learning Report',
    href: 'https://darkmatterlabs.notion.site/darkmatterlabs/TreesAI-Glasgow-Pilot-Learning-report-16-10-bd46c620542d4159af830ae6b3a943ed',
    date: 'October 16, 2023',
    datetime: '2023-10-16',
    category: { name: 'Report' },
    imageUrl: 'assets/Frame.png',
    preview:
      'TreesAI provides a series of tools to help establish nature as a critical, and investable, part of urban infrastructure. Over the past two years, we’ve been building the TreesAI Pilot in Glasgow, Scotland.',
    readingLength: '30 mins',
  },
  {
    id: 5,
    title: 'TreesAI: Unlocking system barriers to finance Nature-based Solutions',
    href: 'https://provocations.darkmatterlabs.org/treesai-unlocking-system-barriers-to-finance-nature-based-solutions-398e9d618623',
    date: 'April 18, 2023',
    datetime: '2023-04-18',
    category: { name: 'Report' },
    imageUrl: 'assets/barriers.png',
    preview:
      'How can we overcome existing structural challenges to reach investment readiness for the long-term stewardship of Nature-based Solutions in cities?',
    readingLength: '18 mins',
  },
  {
    id: 6,
    title: 'Green Urban Scenarios: Change in Complexity',
    href: 'https://lucidmindsai.medium.com/green-urban-scenarios-298d75b100b4',
    date: 'Sep 15, 2022',
    datetime: '2022-09-15',
    category: { name: 'Report' },
    imageUrl: 'assets/GUS.png',
    preview:
      'A series of posts on a framework and software that we have built within the TreesAI project.',
    readingLength: '5 mins',
  },
  {
    id: 7,
    title: 'TreesAI - Blue Paper',
    href: 'https://drive.google.com/file/d/127XlBUlQ-9_llwJawalifxWoqbBxG8ha/view?usp=sharing',
    date: 'Dec 17, 2021',
    datetime: '2021-12-17',
    category: { name: 'Paper' },
    imageUrl: 'assets/Bluepaper.png',
    preview: 'A platform to value and invest in Nature: Carbon and beyond.',
    readingLength: '2 hours',
  },
  {
    id: 8,
    title: 'Trees as Infrastructure Report 1',
    href: 'https://provocations.darkmatterlabs.org/trees-as-infrastructure-1dd94e1cfedf',
    date: 'Feb 10, 2020',
    datetime: '2020-02-10',
    category: { name: 'Report' },
    imageUrl: 'https://miro.medium.com/max/2000/1*gEpd55UAV-i1GUi3rFTr7g.jpeg',
    preview: 'Why municipalities are struggling to reach tree-planting targets',
    readingLength: '15 min',
  },
  {
    id: 9,
    title: 'Trees as Infrastructure Report 2',
    href: 'https://provocations.darkmatterlabs.org/trees-as-infrastructure-aa141acdf227',
    date: 'Mar 6, 2020',
    datetime: '2020-03-6',
    category: { name: 'Report' },
    imageUrl: 'https://miro.medium.com/max/3840/1*_tUcwA67m11u_UI54xR15Q.jpeg',
    preview:
      'A proposition for supporting cities to transition towards resilient urban forest infrastructures',
    readingLength: '15 min',
  },
  {
    id: 10,
    title:
      'Delivering urban Nature-based Solutions in Scotland at Scale: Growing regenerative cities',
    href: 'https://drive.google.com/file/d/1OdtF45v59Zh7TDDrNRifnp4e6Cl4OIK0/view',
    date: 'Nov 27, 2020',
    datetime: '2020-02-12',
    category: { name: 'Report' },
    imageUrl: 'assets/nature_scot.jpg',
    preview: 'Growing regenerative cities',
    readingLength: '11 min',
  },
];

const posts = [
  {
    title: 'TreesAI Shows Communities How to Maintain and Grow Their Urban Forests',
    href: 'https://www.architectmagazine.com/technology/treesai-shows-communities-how-to-maintain-and-grow-their-urban-forests_o',
    description: 'Architect Magazine',
    date: 'Oct 17, 2022',
    datetime: '2022-10-17',
  },
  {
    title: 'Trees as infrastructure in the new Glasgow plan',
    href: 'https://www.domusweb.it/en/speciali/domus-air/2022/treesare-infrastructure.html',
    description: 'Domus',
    date: 'March 31, 2022',
    datetime: '2022-03-31',
  },
  {
    title: 'Turning COP26’s energy and enthusiasm into citywide change',
    href: 'https://www.weforum.org/agenda/2022/01/turning-cop26-s-energy-and-enthusiasm-into-citywide-change',
    description: 'World Economic Forum',
    date: 'Jan 19, 2022',
    datetime: '2022-01-19',
  },
  {
    title: "Beyond Carbon: Why We Can't Plant Our Way Out Of Climate Change",
    href: 'https://www.nadinagalle.com/podcasts/s3e7-beyond-carbon-why-we-cant-plant-our-way-out-of-climate-change-with-carlotta-conte-of-dark-matter-labs',
    description: 'Internet of Nature Podcast by Dr. Nadina Galle',
    date: 'February 16, 2022',
    datetime: '2022-02-16',
  },
  {
    title: 'Glasgow Green Deal',
    href: 'https://www.glasgow.gov.uk/councillorsandcommittees/viewSelectedDocument.asp?c=P62AFQDNZLDNNTDNDN',
    description: 'Glasgow city council',
    date: 'December 20, 2021',
    datetime: '2021-12-20',
  },
  {
    title: 'Three innovative solutions for rewilding our cities',
    href: 'https://twitter.com/wef/status/1466452246724587520',
    description: 'World Economic Forum',
    date: 'December 2, 2021',
    datetime: '2021-12-2',
  },
  {
    title: 'Financing Urban Forests for Environmental and Social Benefits',
    href: 'https://www.morganstanley.com/ideas/tree-ai-nature-urban-infrastructure',
    description: 'Morgan Stanley',
    date: 'November 11, 2021',
    datetime: '2021-11-10',
  },
  {
    title: 'DM Note #5: Mission Holding at DM: The Case of Nature-based Solutions',
    href: 'https://provocations.darkmatterlabs.org/dm-note-5-50e46540dd05',
    description:
      'DM Note #5 is a reflection on how we build and organize missions internally, taking Nature-based Solutions as a case study.',
    date: 'July 21, 2021',
    datetime: '2021-07-21',
  },
  {
    title: 'Inaugural Morgan Stanley Sustainable Solutions Collaborative Cohort',
    href: 'https://www.morganstanley.com/ideas/sustainable-solutions-collaborative-winners-2021',
    description: 'Morgan Stanley',
    date: 'June 9, 2021',
    datetime: '2021-06-9',
  },
  {
    title: 'Trees As Infrastructure インフラストラクチャーとしての街路樹　後編',
    href: 'https://note.com/actant_forest/n/nb2b3d470c2a8',
    description: 'TreesAI translated in Japanese',
    date: 'April 21, 2021',
    datetime: '2021-04-21',
  },
  {
    title: 'These 11 organizations are building a greener Europe',
    href: 'https://blog.google/outreach-initiatives/sustainability/these-11-organizations-are-building-greener-europe/',
    description: 'Google.org',
    date: 'April 13, 2021',
    datetime: '2021-04-13',
  },
  {
    title: 'Building Vitality – Regenerative Construction',
    href: 'https://demoshelsinki.fi/julkaisut/building-vitality-regenerative-construction/',
    description: 'Demos Helsinki',
    date: '16 March, 2021',
    datetime: '2021-03-16',
  },
  {
    title: 'These 20 innovations are helping us to conserve, restore and grow 1 trillion trees',
    href: 'https://www.weforum.org/agenda/2020/09/world-economic-forum-innovations-conserve-preserve-trillion-trees/',
    description: 'World Economic Forum',
    date: 'Sep 30, 2020',
    datetime: '2020-09-30',
  },
];

export default function Reports() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className='relative global-margin py-16 sm:py-24 lg:py-20' id='reports'>
      <div className='relative'>
        <SectionHeader title='Resources' />
        <div
          className='flex flex-wrap space-x-4 border rounded-[50px] border-indigo-600'
          aria-label='Tabs'
        >
          <div className='w-full'>
            <ul
              className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row border-b border-gray3 mx-auto mt-4 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'
              role='tablist'
            >
              <li className='-mb-px lg:mr-8 md:mr-8 sm:mr-2 last:mr-0'>
                <a
                  className={
                    'px-3 py-2 book-intro-md rounded-md block ' +
                    (openTab === 1 ? 'text-indigo-600' : 'text-dark-wood-800 hover:text-indigo-600')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle='tab'
                  href='#link2'
                  role='tablist'
                >
                  Reports
                </a>
              </li>
              <li className='-mb-px lg:mr-8 md:mr-8 sm:mr-2 last:mr-0'>
                <a
                  className={
                    'px-3 py-2 book-intro-md rounded-md block ' +
                    (openTab === 2 ? 'text-indigo-600' : 'text-dark-wood-800 hover:text-indigo-600')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle='tab'
                  href='#link1'
                  role='tablist'
                >
                  Videos
                </a>
              </li>
              <li className='-mb-px lg:mr-8 md:mr-8 sm:mr-2  last:mr-0'>
                <a
                  className={
                    'px-3 py-2 book-intro-md rounded-md block ' +
                    (openTab === 3 ? 'text-indigo-600' : 'text-dark-wood-800 hover:text-indigo-600')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle='tab'
                  href='#link3'
                  role='tablist'
                >
                  Press
                </a>
              </li>
            </ul>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 rounded'>
              <div className='px-4 py-5 flex-auto'>
                <div className='tab-content tab-space'>
                  <div className={openTab === 2 ? 'block' : 'hidden'} id='link1'>
                    <div className='mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl'>
                      {videos.map((post) => (
                        <div
                          key={post.id}
                          className='flex flex-col rounded-lg shadow-lg overflow-hidden'
                        >
                          <div className='flex-shrink-0'>
                            <a target='_blank' rel='noreferrer noopener' href={post.href}>
                              <img
                                className='h-48 w-full object-cover'
                                src={post.imageUrl}
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                            <div className='flex-1'>
                              <p className='book-info-sm'>
                                <a
                                  href={post.href}
                                  target='_blank'
                                  rel='noreferrer noopener'
                                  className='hover:underline'
                                >
                                  {post.category.name}
                                </a>
                              </p>
                              <a
                                href={post.href}
                                target='_blank'
                                rel='noreferrer noopener'
                                className='block mt-2'
                              >
                                <p className='bold-intro-sm text-gray-900'>{post.title}</p>
                                <p className='book-intro-sm text-gray-500 text-dark'>
                                  {post.preview}
                                </p>
                              </a>
                            </div>
                            <div className='mt-6 flex items-center'>
                              <div className='ml-3 text-gray-500'>
                                <div className='flex space-x-1'>
                                  <p className='book-info-sm text-gray-900'>{post.readingLength}</p>
                                </div>
                                <div className='flex space-x-1'>
                                  <p className='book-info-sm text-dark'>{post.date}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={openTab === 1 ? 'block' : 'hidden'} id='link2'>
                    <div className='mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl'>
                      {blogPosts.map((post) => (
                        <div
                          key={post.id}
                          className='flex flex-col rounded-lg shadow-lg overflow-hidden'
                        >
                          <div className='flex-shrink-0'>
                            <a target='_blank' rel='noreferrer noopener' href={post.href}>
                              <img
                                className='h-48 w-full object-cover'
                                src={post.imageUrl}
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                            <div className='flex-1'>
                              <p className='book-info-sm text-blue2'>
                                <a
                                  href={post.href}
                                  target='_blank'
                                  rel='noreferrer noopener'
                                  className='hover:underline'
                                >
                                  {post.category.name}
                                </a>
                              </p>
                              <a
                                href={post.href}
                                target='_blank'
                                rel='noreferrer noopener'
                                className='block mt-2'
                              >
                                <p className='bold-intro-sm text-gray-900'>{post.title}</p>
                                <p className='mt-3 book-intro-sm text-gray-500 text-dark'>
                                  {post.preview}
                                </p>
                              </a>
                            </div>
                            <div className='mt-6 flex items-center'>
                              <div className='ml-3'>
                                <div className='flex space-x-1 book-info-sm text-dark'>
                                  <time dateTime={post.datetime}>{post.date}</time>
                                  <span aria-hidden='true'>&middot;</span>
                                  <div className='text-gray-500 book-info-sm'>
                                    <span>{post.readingLength} read</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={openTab === 3 ? 'block' : 'hidden'} id='link4'>
                    <div className='mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl'>
                      {posts.map((post) => (
                        <div key={post.title}>
                          <p className='book-info-sm text-gray-500'>
                            <time dateTime={post.datetime}>{post.date}</time>
                          </p>
                          <a
                            href={post.href}
                            target='_blank'
                            rel='noreferrer noopener'
                            className='mt-2 block'
                          >
                            <p className='bold-intro-sm text-gray-900'>{post.title}</p>
                            <p className='mt-3 book-intro-sm text-gray-500'>{post.description}</p>
                          </a>
                          <div className='mt-3'>
                            <a
                              href={post.href}
                              target='_blank'
                              rel='noreferrer noopener'
                              className='bold-info-sm text-blue2 hover:text-indigo-600'
                            >
                              Read full story
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
