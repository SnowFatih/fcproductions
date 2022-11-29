import React from 'react';

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

function Forms({ title, description, adress, phoneNumber, eMail }) {
  return (
    <section className="relative bg-white" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="relative overflow-hidden bg-gradient-to-b from-yellow-300 to-orange-400 py-10 px-6 sm:px-10 xl:p-12">
              <div
                className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              ></div>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
                aria-hidden="true"
              ></div>
              <h3 className="text-lg font-medium text-white">
                {title}
              </h3>
              <p className="mt-6 max-w-3xl text-base text-teal-50">
                {description}
              </p>
              <dl className="mt-8 space-y-6">
                <dd className="flex text-base text-teal-50">
                  <PhoneIcon className="h-6 w-6 shrink-0 " aria-hidden="true" />
                  <span className="ml-3">
                    {phoneNumber}
                  </span>
                </dd>
                <dd className="flex text-base text-teal-50">
                  <EnvelopeIcon className="h-6 w-6 shrink-0 " aria-hidden="true" />
                  <span className="ml-3">
                    {eMail}
                  </span>
                </dd>
                <dd className="flex text-base text-teal-50">
                  <MapPinIcon className="h-6 w-6 shrink-0 " aria-hidden="true" />
                  <span className="ml-3">
                    {adress}
                  </span>
                </dd>
              </dl>
            </div>

            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-warm-gray-900 text-lg font-medium">Envoyez nous un message !</h3>
              <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label
                    htmlFor="first-name"
                    className="text-warm-gray-900 block text-sm font-medium"
                  >
                    Prénom
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4  focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="text-warm-gray-900 block text-sm font-medium"
                  >
                    Nom
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-warm-gray-900 block text-sm font-medium">
                    E-mail
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="text-warm-gray-900 block text-sm font-medium">
                      Téléphone
                    </label>
                    <span id="phone-optional" className="text-warm-gray-500 text-sm">
                      Optionnel
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4  focus:border-yellow-500 focus:ring-yellow-500"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="text-warm-gray-900 block text-sm font-medium">
                    Sujet
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="text-warm-gray-900 block text-sm font-medium"
                    >
                      Message
                    </label>
                    <span id="message-max" className="text-warm-gray-500 text-sm">
                      Max. 500 caractères
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      rows={4}
                      className="border-warm-gray-300 text-warm-gray-900 block w-full rounded-md py-3 px-4 focus:border-yellow-500 focus:ring-yellow-500"
                      aria-describedby="message-max"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-400 px-6 py-3 text-base font-medium text-white  hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
