import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'


export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | FC Productions</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <meta name='robots' content='index, follow' />
        <meta name="image" property="og:image" content="http://fcproductions.fr/large-og.png" />
        <meta
          name="description"
          content="Formulaire de contact pour FC PRODUCTIONS"
        />
      </Head>

        <div className=" mt-16 sm:mt-32 px-4 mx-auto max-w-screen-md">

          <header className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Contactez-nous !
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Une demande ? Une prestation envisagée ?
            </p>
            <p className="mb-6 text-base text-zinc-600 dark:text-zinc-400">
            Faites-nous en part !
            </p>
          </header>

          <form action="https://formsubmit.co/a76e41986aeeb899cbba0f821dc1140e" method="POST" className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre e-mail</label>
                    <input type="email" name="E-mail" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="patrick-du-95@gmail.com" required/>
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sujet</label>
                    <input type="text" name="Sujet" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="En quoi peut-on vous aider ?" required/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                    <textarea name="Message" id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Décrivez nous votre demande.." required></textarea>
                </div>
                <div >
                  <p className="text-sm mb-2 text-zinc-600 dark:text-zinc-400">
                    Redirection vers validation Captcha - Vous serez redirigé(e) ici une fois validée.
                  </p>
                
                <input type="hidden" name="_subject" value="Nouveau message sur FC PRODUCTIONS"></input>
                <input type="hidden" name="_next" value="https://fcproductions.fr/thank-you"></input>
                <button type="submit" className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm">Envoyer ma demande</button>
                </div>
            </form>
        </div>

    </>
  )
}
