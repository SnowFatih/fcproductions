import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

import Image from 'next/future/image'
import photoSurf from '@/images/photos/IMG_8003.jpg'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'



export default function ThankYou() {
  return (
    <>

      <Head>
        <title>Message envoyé ! - FC</title>
        <link rel="icon" href="favicon.ico"/>
        <meta
          name="description"
          content="Merci pour votre envoi."
        />
      </Head>

      <div className="mt-16 sm:mt-32 mx-auto max-w-2xl lg:max-w-5xl">
        <div className="block lg:absolute">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl ml-5">
        Merci pour votre envoi !
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 ml-5">
        Une réponse vous sera adressée sous 24-48 heures maximum ! 
        </p>
        </div>
        <div className="mb-10 mr-10 flex justify-end">
          <a href="http://localhost:3001/">
            <p className="flex items-center text-base text-zinc-600 dark:text-zinc-400 gap-2 transition duration-300 ease-in-out hover:-translate-x-4">
              Retour à l'accueil
              <ArrowUturnLeftIcon className=" h-8 w-8" />
            </p>
          </a>
        </div>
        <div className="place-content-end flex mr-8 lg:mr-16">
          <Image src={photoSurf} alt="moanakite" className="w-80 h-fit rounded-lg" />
        </div>
      </div>

    </>
  )
}
