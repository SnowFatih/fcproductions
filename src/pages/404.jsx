import Image from 'next/future/image'
import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import photoSurf from '@/images/photos/IMG_8003.jpg'


export default function NotFound() {
  return (
    <>
      <Head>
        <title>FC - 404</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="Les avis de mes clients."
        />
      </Head>
    
      <SimpleLayout>
    <div className="flex min-h-full flex-col lg:relative">
    <div className="flex grow flex-col">
      <main className="flex grow flex-col">
        <div className="mx-auto flex w-full max-w-7xl grow flex-col px-4 sm:px-6 lg:px-8">
          <div className="my-auto shrink-0 py-16 sm:py-32">
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 ml-5">404</p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl ml-5">
              Page non trouvée
            </h1>
            <div className="mt-6">
              <a href=" /" className="flex items-center text-base text-zinc-600 dark:text-zinc-400 gap-2 transition duration-300 ease-in-out hover:translate-x-4">
                Retourner à l'accueil
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
      <div className="absolute inset-0 ml-40 mt-5 h-full w-96 max-w-lg object-cover">
      <Image src={photoSurf} alt="moanakite" className="w-80 h-fit rounded-lg" />
      </div>
    </div>
  </div>

      </SimpleLayout>
      
    </>
  )
}
