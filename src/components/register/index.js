import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import classes from './styles.module.css'
import { XIcon } from '@heroicons/react/outline'
import { useTranslation } from 'react-i18next'

function Index({ open, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [instaHandle, setInstaHandle] = useState('')
  const { t } = useTranslation()

  const handleSubmit = async () => {
    try {
      await fetch('https://api.apispreadsheets.com/data/mAPggmjkeatjtiap/', {
        method: 'POST',
        body: JSON.stringify({ name, email, insta_handle: instaHandle }),
      })
      onClose()
    } catch (e) {
      onClose()
      console.log(e, ' =====> error wgile submittion')
    }
  }

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
                    <div className="mt-2 w-85">
                      <p className={classes['dialog-title']}>
                        {t('regsiterTitle')}
                      </p>
                    </div>

                    <input
                      value={name}
                      className={classes['dialog-input']}
                      onChange={({ target }) => setName(target.value)}
                      placeholder={`${t('name')} *`}
                    />

                    <input
                      value={email}
                      className={classes['dialog-input']}
                      onChange={({ target }) => setEmail(target.value)}
                      placeholder={`${t('email')} *`}
                    />

                    <input
                      value={instaHandle}
                      className={classes['dialog-input']}
                      onChange={({ target }) => setInstaHandle(target.value)}
                      placeholder={`${t('weChat')} *`}
                    />

                    <div className="mt-4">
                      <button
                        onClick={handleSubmit}
                        className={classes['submit-btn']}
                      >
                        {t('submit')}
                      </button>
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
