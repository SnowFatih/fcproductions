import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import miniaOpera from '@/images/miniatures/operaavignon.jpeg'
import miniaEva from '@/images/miniatures/miniaEva.jpeg'
import miniaBmx from '@/images/miniatures/bmx.jpeg'
import miniaCapitole from '@/images/miniatures/capitolestudio.jpeg'
import miniaFesticulute from '@/images/miniatures/festiculture.jpeg'
import miniaCarsamba from '@/images/miniatures/carsamba.jpeg'
import miniaMoanakite from '@/images/miniatures/moanakite.jpeg'

const reviews = [
  {
    title: 'ADVSEA',
    body: "Fc Productions a été un partenaire de choix. À l'écoute de nos besoins, il a été force de proposition et nous a proposer un rendu de qualité.",
    author: 'Vidéo, Drone FPV',
    rating: 5,
  },
  {
    title: 'R-Location',
    body: "Très pro ! Ces réalisations sont au top que ce soit parti prise de vue ou montage. Je recommande fortement, milliers de vues garantie sur les réseaux.",
    author: 'Vidéo, Photo, Drone FPV',
    rating: 5,
  },
  {
    title: 'Festiculture',
    body: "Travail très professionnel, meilleur vidéographe 👍🏻 ",
    author: 'Vidéo, Photo, Drone FPV',
    rating: 5,
  },
  {
    title: 'Cinéma Capitoles Studio',
    body: "Très beau travail, grande efficacité et un vrai regard.",
    author: 'Vidéo, Drone FPV',
    rating: 5,
  },
  {
    title: 'Moana School',
    body: 'Très pro, efficace et à su parfaitement s’adapter à nos besoins.',
    author: 'Vidéo, Photo, Drone FPV',
    rating: 5,
  },
]


export default function Avis() {
  return (
    <>
      <Head>
        <title>FC - Avis Clients</title>
        <meta
          name="description"
          content="Les avis de mes clients"
        />
      </Head>
    
      <SimpleLayout
        title="Les retours clients ! "
        intro="J'ai travaillé avec plusieurs types de clients. Retrouvez ci-dessous les avis (réelles) dece qu'ils avaient à dire sur mes prestations !"
        >


      <article id="LE ID">

          <div className="flex items-center mb-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Par <strong>Marie parie</strong></h3>
              <div className='flex ml-auto'>
                <svg aria-hidden="true" className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-6 h-6  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-6 h-6  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-6 h-6  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="mr-10 w-6 h-6  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
          </div>
          <footer className="mb-5 text-gray-500 dark:text-gray-400 "><p><strong>CEO du Japon</strong> - Avis client récupéré via Forms</p></footer>
          <p className="mb-2 ml-5 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
          <p className="mb-3 ml-5 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>

      </article>
      

      </SimpleLayout>
      
    </>
  )
}
