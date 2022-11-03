import { Disclosure } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import classes from './styles.module.css'

const logo = '/img/logo.png'

const navigation = []

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center sm:items-stretch justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-6 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-[26px] w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:flex-1 md:block sm:ml-24">
                  <div className="flex space-x-20">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          classes['link'],
                          'text-white block px-3 py-2 rounded-md font-normal',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {/* {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : ( */}
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    {/* )} */}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    classes['link'],
                    'text-white block px-3 py-2 rounded-md font-normal',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
