import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'

import image1 from '@/images/photos/presta-fpv.webp'
import image2 from '@/images/photos/IMG_7694.webp'
import image3 from '@/images/photos/IMG_5911.webp'
import image4 from '@/images/photos/camera-capitole.webp'
import image5 from '@/images/photos/manarola.webp'
import portraitImage from '@/images/photos/tango.webp'

import logoOpera from '@/images/logos/logoopera.webp'
import logoEva from '@/images/logos/logoeva.webp'
import logoFesti from '@/images/logos/logofesti.webp'
import logoOsny from '@/images/logos/logoosny.webp'
import logoCapitole from '@/images/logos/logocapitole.webp'
import logoRlocation from '@/images/logos/logorlocation.webp'
import logoAlaTurka from '@/images/logos/alaturka.webp'
import logoCarsamba from '@/images/logos/carsamba.webp'
import logoTuzla from '@/images/logos/tuzla.webp'
import logoDJBurak from '@/images/logos/djburak.webp'
import logoFestivalRouen from '@/images/logos/festivalrouen.webp'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Lire l'article</Card.Cta>
    </Card>
  )
}

export function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" rel="noopener noreferrer" {...props}>
      <Icon className="h-6 w-6 transition group-hover:fill-teal-500 dark:fill-zinc-200 dark:group-hover:fill-teal-500" />
    </Link>
  )
}


function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  const images = [
    { src: image1, alt: 'Prestation drone FPV en action' },
    { src: image2, alt: 'Tournage vidéo professionnel' },
    { src: image3, alt: 'Prise de vue aérienne drone' },
    { src: image4, alt: 'Caméra de tournage au Capitole' },
    { src: image5, alt: 'Vue aérienne de Manarola en Italie' },
  ];
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={400}
              width={500}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}



export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>FC Productions | Vidéaste et télépilote de drone FPV</title>
        <link rel="icon" href="favicon.ico" />
        {/* <link rel="icon" type="image/x-icon" href="/favicon.ico"/> */}
        <meta name='robots' content='index, follow' />
        <meta name="image" property="og:image" content="https://fcproductions.fr/large-og.png" />
        <meta
          name="description"
          content="Vidéaste et télépilote de drone FPV ! 🎥 🎞️ Nous vous accompagnons dans vos plus folles productions de Paris jusqu'à Avignon !"
        />
        <meta name="keywords" content="Vidéaste, Télépilote Drone FPV, Productions Vidéo, Drone FPV, Cinématographie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://fcproductions.fr/" />
      </Head>
      
      <Container className="mt-9">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            FC PRODUCTIONS
          </h1>
          <p className="text-zinc-800 dark:text-zinc-100 text-lg">
            Vidéaste - Télépilote Drone FPV
          </p>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            Nous vous accompagnons dans vos plus folles
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
          productions dans toute la France !
          </p>
          <div className=" mt-6 flex gap-6 justify-center">
            <SocialLink
              href="https://www.instagram.com/fcproductions55/"
              target="_blank"
              aria-label="Suivez moi sur Instagram"
              icon={InstagramIcon}

            />
            <SocialLink
              href="https://www.youtube.com/channel/UC-YvVhHlBAH6UOezaihTK9A"
              target="_blank"
              aria-label="Suivez moi sur Youtube"
              icon={YoutubeIcon}
            />
          </div>
        </div>
        </Container>

          <div className="relative w-full md:block flex gap-5 pl-5 pr-5 snap-x snap-mandatory overflow-x-auto pb-14">
          <Photos />
          </div>
      


      <h2 className="text-center mt-10 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
      Merci pour leur confiance.
      </h2>

      <Container>


        <div className="items-center md:flex flex-wrap md:gap-x-10 content-between justify-center grid grid-cols-4 mt-5 gap-x-4">
          <Link href="/avis#operagrandavignon">
            <Image src={logoOpera} alt="Logo du Grand Opéra Avignon" width={150}  className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110" />
          </Link>
          <Link href="/avis#eva">
            <Image src={logoEva} alt="Logo EVA réalité virtuelle" width={150} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </Link>
          <Link href="/avis#festiculture">
            <Image src={logoFesti} alt="Logo Festiculture" width={180} className=" transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </Link>
          <Link href="/avis#bmxosny">
            <Image src={logoOsny} alt="Logo Club BMX Osny" width={150} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </Link>
          <Link href="/avis#ronelocation">
            <Image src={logoRlocation} alt="Logo R-One Location" width={150} className=" transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </Link>
          <Link href="/avis#capitole">
            <Image src={logoCapitole} alt="Logo Capitole Studios" width={160} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </Link>
          <Link href="/avis">
            <Image src={logoAlaTurka} alt="Logo Ala Turka" width={100} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </Link>
          <Link href="/avis">
            <Image src={logoFestivalRouen} alt="Logo Festival de la Turquie Rouen" width={150} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </Link>
          <Link href="/avis">
            <Image src={logoCarsamba} alt="Logo Mairie de Carsamba" width={130} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </Link>
          <Link href="/avis">
            <Image src={logoTuzla} alt="Logo Mairie de Tuzla Istanbul" width={120} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </Link>
          <Link href="/avis">
            <Image src={logoDJBurak} alt="Logo DJ Burak" width={120} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </Link>
        </div>
      </Container>


      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="lg:pl-12 rotate-2 mt-10 ">
              <div className="max-w-xs m-auto px-2.5 hover:animate-pulse lg:max-w-none">
              <Link href="/presentation">
                <Image
                  src={portraitImage}
                  alt="Portrait de Fatih C., vidéaste et télépilote drone FPV"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className=" rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
                </Link>
                <div className="flex place-content-center">
                <Link href="/presentation" className="flex mt-2 items-center font-medium tracking-tight opacity-80 text-sm text-teal-500" >
                Découvrir l'histoire de FC Productions
                <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Container>

    </>
  )
}



export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
