import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import classes from './styles.module.css'
import { XIcon } from '@heroicons/react/outline'

function Index({ open, onClose }) {
  const [value, setValue] = useState('')

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={`${classes['dialog']}`}>
                <>
                  <div>
                    <XIcon
                      onClick={onClose}
                      className="block h-6 w-6 text-white float-right cursor-pointer"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col items-center px-12 py-4">
                    <div className="mt-2 w-80">
                      <p className={classes['dialog-title']}>
                        Register for your chance to win an exclusive invite
                      </p>
                    </div>

                    <input
                      value={value}
                      className={classes['dialog-input']}
                      onChange={({ target }) => setValue(target.value)}
                      placeholder="First Name *"
                    />

                    <input
                      value={value}
                      className={classes['dialog-input']}
                      onChange={({ target }) => setValue(target.value)}
                      placeholder="Email *"
                    />

                    <input
                      value={value}
                      className={classes['dialog-input']}
                      onChange={({ target }) => setValue(target.value)}
                      placeholder="Instagram handle"
                    />

                    <div className="mt-4">
                      <button className={classes['submit-btn']}>SUBMIT</button>
                    </div>
                  </div>
                </>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Index
