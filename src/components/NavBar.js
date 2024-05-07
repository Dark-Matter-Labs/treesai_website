import { Fragment, Component } from 'react';
import { Link } from 'react-scroll';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Services', href: 'pilot' },
  { name: 'Current Work', href: 'testimonials' },
  { name: 'Resources', href: 'reports' },
  { name: 'Get in touch', href: 'contact' },
];

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <Popover as='header' className='relative '>
        {({ close }) => (
          <>
            <div className='bg-black py-5 mb-4 rounded-b-[60px]'>
              <nav
                className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
                aria-label='Global'
              >
                <div className='flex items-center flex-1'>
                  <div className='flex items-center justify-between w-full md:w-auto'>
                    <div className='sm:mb-10 lg:m-0 md:mb-4'>
                      <img
                        className='h-8 w-auto sm:h-10'
                        src='assets/TreesAI_logo.svg'
                        alt='TreesAI logo'
                      />
                    </div>
                    <div className='-mr-2 flex items-center md:hidden'>
                      <Popover.Button className='bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
                        <span className='sr-only'>Open main menu</span>
                        <MenuIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='hidden lg:block space-x-8 md:flex right-float'>
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        smooth={true}
                        key={item.name}
                        className='book-intro-sm text-white hover:font-bold pointer-cursor'
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>

            <Transition
              show={false}
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
                static
                className='absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden'
              >
                <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='px-5 pt-4 flex items-center justify-between'>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='pt-5 pb-6'>
                    <div className='px-2 space-y-1'>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          smooth={true}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-extraLight'
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }
}
