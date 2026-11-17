import { useState } from 'react';
import SectionHeader from '../SectionHeader';
import { blogPosts, pressItems, videos } from './resourcesData';

const external = { target: '_blank', rel: 'noreferrer noopener' };
const gridClass =
  'mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl';

function ResourceCard({ item, footer }) {
  return (
    <article className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
      {/* The image repeats the title link, so keep it out of the tab order. */}
      <a href={item.href} {...external} tabIndex={-1} aria-hidden='true' className='flex-shrink-0'>
        <img className='h-48 w-full object-cover' src={item.imageUrl} alt='' />
      </a>
      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='book-info-sm'>{item.category.name}</p>
          <a href={item.href} {...external} className='block mt-2'>
            <p className='bold-intro-sm text-gray-900'>{item.title}</p>
            {item.preview && <p className='mt-3 book-intro-sm text-gray-500'>{item.preview}</p>}
          </a>
        </div>
        <div className='mt-6 ml-3'>{footer}</div>
      </div>
    </article>
  );
}

function BlogFooter({ item }) {
  return (
    <div className='flex space-x-1 book-info-sm'>
      <time dateTime={item.datetime}>{item.date}</time>
      <span aria-hidden='true'>&middot;</span>
      <span className='text-gray-500'>{item.readingLength} read</span>
    </div>
  );
}

function VideoFooter({ item }) {
  return (
    <>
      <p className='book-info-sm text-gray-900'>{item.readingLength}</p>
      <p className='book-info-sm'>{item.date}</p>
    </>
  );
}

function PressItem({ item }) {
  return (
    <div>
      <p className='book-info-sm text-gray-500'>
        <time dateTime={item.datetime}>{item.date}</time>
      </p>
      <a href={item.href} {...external} className='mt-2 block'>
        <p className='bold-intro-sm text-gray-900'>{item.title}</p>
        <p className='mt-3 book-intro-sm text-gray-500'>{item.description}</p>
      </a>
      <div className='mt-3'>
        <a href={item.href} {...external} className='bold-intro-sm text-indigo-600 hover:underline'>
          Read full story
        </a>
      </div>
    </div>
  );
}

const tabs = [
  {
    id: 'reports',
    label: 'Reports',
    content: blogPosts.map((item) => (
      <ResourceCard key={item.href} item={item} footer={<BlogFooter item={item} />} />
    )),
  },
  {
    id: 'videos',
    label: 'Videos',
    content: videos.map((item) => (
      <ResourceCard key={item.href} item={item} footer={<VideoFooter item={item} />} />
    )),
  },
  {
    id: 'press',
    label: 'Press',
    content: pressItems.map((item) => <PressItem key={item.href} item={item} />),
  },
];

export default function Resources() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className='relative global-margin py-16 sm:py-24 lg:py-20' id='reports'>
      <SectionHeader title='Resources' />
      <div className='border rounded-[50px] border-indigo-600'>
        <ul
          role='tablist'
          aria-label='Resource types'
          className='flex flex-wrap pt-3 pb-4 border-b mx-auto mt-4 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'
        >
          {tabs.map((tab) => {
            const selected = tab.id === activeTab;
            return (
              <li key={tab.id} role='presentation' className='-mb-px sm:mr-2 md:mr-8 last:mr-0'>
                <button
                  type='button'
                  role='tab'
                  id={`tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 book-intro-md rounded-md block ${
                    selected ? 'text-indigo-600' : 'text-dark-wood-800 hover:text-indigo-600'
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
        <div className='px-4 py-5 mb-6'>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              role='tabpanel'
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              hidden={tab.id !== activeTab}
            >
              {/* Grid sits inside the panel: `.grid` would override the `hidden` attribute. */}
              <div className={gridClass}>{tab.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
