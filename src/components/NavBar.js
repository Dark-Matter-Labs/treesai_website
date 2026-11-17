import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Tools', target: 'tools' },
  { name: 'Services', target: 'services' },
  { name: 'How we work', target: 'how-we-work' },
  { name: 'Project stories', target: 'project-stories' },
  { name: 'Resources', target: 'reports' },
  { name: 'Get in touch', target: 'contact' },
];

function NavLink({ item, className, onClick }) {
  return (
    <a href={`#${item.target}`} onClick={onClick} className={className}>
      {item.name}
    </a>
  );
}

export default function NavBar() {
  return (
    <Popover as='header' className='relative'>
      {({ close }) => (
        <>
          <div className='bg-black py-5 mb-4 rounded-b-[60px]'>
            <nav
              className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
              aria-label='Global'
            >
              <img
                className='h-8 w-auto sm:h-10 sm:mb-10 md:mb-4 lg:m-0'
                src='assets/TreesAI_logo.svg'
                alt='TreesAI logo'
              />
              <Popover.Button className='-mr-2 md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white'>
                <span className='sr-only'>Open main menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
              <div className='hidden md:flex space-x-8'>
                {navigation.map((item) => (
                  <NavLink
                    key={item.target}
                    item={item}
                    className='book-intro-sm text-white hover:underline underline-offset-4'
                  />
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              className='z-20 absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden'
            >
              <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                <div className='px-5 pt-4'>
                  <Popover.Button className='-mr-2 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
                <div className='pt-5 pb-6 px-2 space-y-1'>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.target}
                      item={item}
                      onClick={() => close()}
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-white-300'
                    />
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
