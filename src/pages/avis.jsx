import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import image from '@/images/photos/IMG_6299.png'

const reviews = [
  {
    id:"festiculture",
    description: "Travail très professionnel, meilleur vidéographe 👍🏻 ",
    description2: "",
    auteur: "Arzu",
    metier: "Festiculture salon d'évènement culturelle",
  },
  {
    id:"capitolestudios",
    description: "Très beau travail, grande efficacité et un vrai regard.",
    description2: "",
    auteur: 'Fanny',
    metier: "Capitole Studios cinéma",
  },
  {
    id:"moanaschool",
    description: 'Très pro, efficace et à su parfaitement s’adapter à nos besoins.',
    description2: "",
    auteur: 'Yanis',
    metier: "Moana School école de glisse",
  },
  {
    id:"eva",
    description: "Tout a été réaliser à la perfection ! Le rendu est magique !",
    description2: "",
    auteur: 'Bastien',
    metier: "EVA arène virtuelle d'e-sport",
  },
  {
    id:"advsea",
    description: "FC Productions a été un partenaire de choix.",
    description2: "À l'écoute de nos besoins, il a été force de proposition et nous a proposer un rendu de qualité.",
    auteur: 'Lina',
    metier: "Éducatrice Spécialisée d'ADVESEA",
  },
  {
    id:"ronelocation",
    description: "Très pro ! Ces réalisations sont au top que ce soit parti prise de vue ou montage.",
    description2: "Je recommande fortement, milliers de vues garantie sur les réseaux.",    
    auteur: 'Erwan',
    metier: "R-One Location voiture de luxe",
  },
]




export default function Avis() {
  return (
    <>
      <Head>
        <title>Avis Clients | FC Productions</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <meta name='robots' content='index, follow' />
        <meta name="image" property="og:image" content="http://fcproductions.fr/large-og.png" />
        <meta
          name="description"
          content="Les avis de mes clients."
        />
      </Head>
    
      <SimpleLayout
        title="Les retours clients ! "
        intro="J'ai travaillé dans différent secteurs de tournage. Retrouvez ci-dessous les avis (réelles) de mes clients sur mes prestations !"
        >
          <Image src={image} className="object-cover h-64 w-full rounded-lg mb-20 contrast-100 saturate-50" alt="fc productions"></Image>

          {reviews.map((reviews) => (
            <div key={reviews.title} className="mb-10">
                    <article id={reviews.id}>
                      <div className="flex items-center mb-1">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Par <strong>{reviews.auteur}</strong></h3>
                          <div className='flex ml-auto'>
                            <svg aria-hidden="true" className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-6 h-6  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-6 h-6  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-6 h-6  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="mr-10 w-6 h-6  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          </div>
                      </div>
                      <footer className="mb-5 text-gray-500 dark:text-gray-400 "><p><strong>{reviews.metier}</strong> - Avis client récupéré via Forms</p></footer>
                      <p className="mb-2 ml-5 font-light text-gray-500 dark:text-gray-400">{reviews.description}</p>
                      <p className="mb-2 ml-5 font-light text-gray-500 dark:text-gray-400">{reviews.description2}</p>
                  </article>
            </div>
          ))}


      </SimpleLayout>
      
    </>
  )
}
