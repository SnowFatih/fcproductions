import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import miniaOpera from '@/images/miniatures/operaavignon.webp'
import miniaEva from '@/images/miniatures/miniaEva.webp'
import miniaBmx from '@/images/miniatures/bmx.webp'
import miniaCapitole from '@/images/miniatures/capitolestudio.webp'
import miniaFesticulute from '@/images/miniatures/festiculture.webp'
import miniaCarsamba from '@/images/miniatures/carsamba.webp'
import miniaMoanakite from '@/images/miniatures/moanakite.webp'
import miniaLokoumIstanbul from '@/images/miniatures/lokoumistanbul.webp'
import miniaDSEfpv from '@/images/miniatures/dsefpv.webp'
import miniaObrigado from '@/images/miniatures/obrigado.webp'
import miniaSignaleo from '@/images/miniatures/signaleo.webp'
import miniaMyintegration from '@/images/miniatures/myintegration.webp'
import miniaTuzla from '@/images/miniatures/kartingtuzla.webp'
import miniaIsoka from '@/images/miniatures/isoka.webp'


const projects = [
  {
    name: 'Isoka Environnement FPV Indoor',
    description:
      "Oneshot survolant rapidement les locaux d'Isoka Env. à Montélimar.",
    link: { href: 'https://www.youtube.com/watch?v=yfeVkmrkLe4', label: 'Regarder la vidéo' },
    logo: miniaIsoka,
  },
  {
    name: 'FPV Karting Istanbul',
    description:
      "Course de karting au Parc Istanbul suivi en drone FPV.",
    link: { href: 'https://www.youtube.com/watch?v=CFfT9vKjCCk', label: 'Regarder la vidéo' },
    logo: miniaTuzla,
  },
  {
    name: 'MyIntegration',
    description:
      "Plate-forme SaaS MyIntegration qui facilite la synchronisation des données entre SaaS.",
    link: { href: 'https://youtu.be/1mecwevsulY', label: 'Regarder la vidéo' },
    logo: miniaMyintegration,
  },
  {
    name: 'Signaleo Cergy',
    description:
      "Application mobile pour la propreté urbaine à Cergy.",
    link: { href: 'https://www.youtube.com/watch?v=jUaR9dk7wQo', label: 'Regarder la vidéo' },
    logo: miniaSignaleo,
  },
  {
    name: 'Obrigado Rodizio Restaurant',
    description:
      "Présentation du restaurant brésilien à Paris.",
    link: { href: 'https://www.youtube.com/watch?v=TK-BhwsE_ZY', label: 'Regarder la vidéo' },
    logo: miniaObrigado,
  },
  {
    name: 'Restaurant Lokoum Istanbul',
    description:
      "Présentation du restaurant gastronomique turc à Lyon.",
    link: { href: 'https://www.youtube.com/watch?v=WLWi9o0ySQ8&ab_channel=FCProductions', label: 'Regarder la vidéo' },
    logo: miniaLokoumIstanbul,
  },
  {
    name: 'Indoor DSE Menuiserie',
    description:
      "Tour en drone FPV indoor oneshot dans les locaux de DSE Menuiseries à Boissy-l'Aillerie",
    link: { href: 'https://www.youtube.com/watch?v=hlTt2iH01IA&ab_channel=FCProductions', label: 'Regarder la vidéo' },
    logo: miniaDSEfpv,
  },
  {
    name: 'EVA E-Sport Arenas',
    description:
      "Tour en drone FPV indoor pour EVA avec du SFX/VFX pour représenter l'univers de l'arène en réalité virtuelle.",
    link: { href: 'https://youtu.be/4kQwNypdK20', label: 'Regarder la vidéo' },
    logo: miniaEva,
  },
  {
    name: 'Opéra Grand Avignon',
    description:
      "Drone cinewhoop pour voler de l'extérieur en présentant l'intérieur de l'Opéra Grand Avignon.",
    link: { href: 'https://www.youtube.com/watch?v=ti0vquk1bMU&ab_channel=FCVideos', label: 'Regarder la vidéo' },
    logo: miniaOpera,
  },
  {
    name: 'Festiculture',
    description:
      "Événement turc à Paris, Lyon & Colmar regroupant des stands & activités pour représenter la Turquie. Filmé en caméra et cinewhoop.",
    link: { href: 'https://www.youtube.com/watch?v=xcaWs6HxduI&ab_channel=FCVideos', label: 'Regarder la vidéo' },
    logo: miniaFesticulute,
  },
  {
    name: 'BMX Club Osny',
    description:
      "Vidéo en plan séquence de chasing FPV avec un cinewhoop des BMX au club d'Osny.",
    link: { href: 'https://www.youtube.com/watch?v=3ehc0clp0ZM&ab_channel=FCVideos', label: 'Regarder la vidéo' },
    logo: miniaBmx,
  },
  {
    name: 'KiteSurf School',
    description:
      "Vidéo présentation de l'école de surf à Marseille sur des e-surf, kitesurf.. en FPV & caméra.",
    link: { href: 'https://www.youtube.com/watch?v=08StfAsE0rI&ab_channel=FCVideos', label: 'Regarder la vidéo' },
    logo: miniaMoanakite,
  },
  {
    name: 'Cinéma Capitole Studios',
    description:
      "Récapitulatif en caméra de la venue des acteurs pour la présentation de leur film au cinéma.",
    link: { href: 'https://www.youtube.com/watch?v=rePmvci_fLI&ab_channel=FCVideos', label: 'Regarder la vidéo' },
    logo: miniaCapitole,
  },
  {
    name: 'Carsamba Turkiye',
    description:
      "Présentation d'une ville en Turquie pour la mairie avec un drone FPV.",
    link: { href: 'https://www.youtube.com/watch?v=CdjzmS4biJk&ab_channel=FCVideos', label: 'Regarder la vidéo' },
    logo: miniaCarsamba,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projets | FC Productions</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <meta name='robots' content='index, follow' />
        <meta name="image" property="og:image" content="https://fcproductions.fr/large-og.png" />
        <meta
          name="description"
          content="Mes dernières productions"
        />
        <meta name="keywords" content="Projet vidéos, avec drone et fpv" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://fcproductions.fr/projets" />
      </Head>
    
      <SimpleLayout
        title="Mes dernières productions"
        intro="J'ai pu déjà travailler sur plusieurs environnements de tournages différents; passer des tournages indoor à outdoor ! - Ainsi, pour répondre à n’importe quel projet, je dispose d’une large flotte de matériel comportant caméras & drones, plus particulièrement les drones FPV qui peuvent répondre à beaucoup d’attentes."
        >

      <div className='flex md:flex-row flex-col'>
        <div className="mb-12 justify-center w-full flex">
          <a type="button" target="_blank" href="https://www.instagram.com/fcproductions55/" className=" dark:text-white text-black group relative shadow-[0_100px_0_0_hsl(0_0%_90%)_inset] hover:scale-[102%] duration-200 rounded-full px-6 py-1.5 dark:shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]" rel="noopener noreferrer">
            Voir les dernières productions sur Instagram
          </a>
        </div>
        <div className="mb-12 justify-center w-full flex">
          <a type="button" target="_blank" href="https://www.youtube.com/@fcproductions55/videos" className=" dark:text-white text-black group relative shadow-[0_100px_0_0_hsl(0_0%_90%)_inset] hover:scale-[102%] duration-200 rounded-full px-6 py-1.5 dark:shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]" rel="noopener noreferrer">
            Voir les vidéos horizontales sur YouTube
          </a>
        </div>
      </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-48 w-80 items-center justify-center rounded-lg bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt={`Miniature du projet ${project.name}`}
                  className="h-44 w-72 object-contain "
                  unoptimized
                  width={700}
                  height={400}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link target="_blank" href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:hover:text-teal-400 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <div className="mt-12 justify-center w-full flex">
          <a type="button" target="_blank" href="https://www.youtube.com/@fcproductions55/videos" className=" dark:text-white text-black group relative shadow-[0_100px_0_0_hsl(0_0%_90%)_inset] hover:scale-[102%] duration-200 rounded-full px-6 py-1.5 dark:shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]" rel="noopener noreferrer">
            Tout voir sur YouTube
          </a>
        </div>
      </SimpleLayout>
    </>
  )
}
