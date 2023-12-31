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

import image1 from '@/images/photos/presta-fpv.jpg'
import image2 from '@/images/photos/IMG_7694.png'
import image3 from '@/images/photos/IMG_5911.jpg'
import image4 from '@/images/photos/camera-capitole.jpg'
import image5 from '@/images/photos/manarola.jpg'
import portraitImage from '@/images/photos/tango.jpg'

import logoOpera from '@/images/logos/logoopera.png'
import logoEva from '@/images/logos/logoeva.png'
import logoFesti from '@/images/logos/logofesti.png'
import logoOsny from '@/images/logos/logoosny.png'
import logoCapitole from '@/images/logos/logocapitole.png'
import logoRlocation from '@/images/logos/logorlocation.png'
import logoAlaTurka from '@/images/logos/alaturka.png'
import logoCarsamba from '@/images/logos/carsamba.png'
import logoTuzla from '@/images/logos/tuzla.png'
import logoDJBurak from '@/images/logos/djburak.png'
import logoFestivalRouen from '@/images/logos/festivalrouen.png'

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
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 transition group-hover:fill-teal-500 dark:fill-zinc-200 dark:group-hover:fill-teal-500" />
    </Link>
  )
}


function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  const images = [image1, image2, image3, image4, image5];
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
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
        <meta name="image" property="og:image" content="http://fcproductions.fr/large-og.png" />
        <meta
          name="description"
          content="Vidéaste et télépilote de drone FPV ! 🎥 🎞️ Nous vous accompagnons dans vos plus folles productions de Paris jusqu'à Avignon !"
        />
        <meta name="keywords" content="Vidéaste, Télépilote Drone FPV, Productions Vidéo, Drone FPV, Cinématographie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://fcproductions.fr/" />
      </Head>
      
      <Container className="mt-9">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            FC PRODUCTIONS
          </h1>
          <p className="text-zinc-800 dark:text-zinc-100 text-lg animate-pulse">
            Vidéaste - Télépilote Drone FPV
          </p>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 animate-pulse">
            Nous vous accompagnons dans vos plus folles 
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-400 animate-pulse">
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
      


      <h1 className="text-center mt-10 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
      Merci pour leur confiance.
      </h1>

      <Container>


        <div className="items-center md:flex flex-wrap md:gap-x-10 content-between justify-center grid grid-cols-4 mt-5 gap-x-4">
          <a href="avis#operagrandavignon">
            <Image src={logoOpera} alt="logo du grand opéra avignon" width={150}  className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110" />
          </a>
          <a href="avis#eva">
            <Image src={logoEva} alt="logo de eva en réalité virtuelle" width={150} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </a> 
          <a href="avis#festiculture">
            <Image src={logoFesti} alt="logo de festiculture" width={180} className=" transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </a>  
          <a href="avis#bmxosny">
            <Image src={logoOsny} alt="logo du club bmx de osny" width={150} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </a>  
          <a href="avis#ronelocation">
            <Image src={logoRlocation} alt="logo de rone location" width={150} className=" transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </a>  
          <a href="avis#capitole">
            <Image src={logoCapitole} alt="logo du capitole studios" width={160} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </a>
          <a href="avis">
            <Image src={logoAlaTurka} alt="logo de ala turka" width={100} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </a>
          <a href="avis">
            <Image src={logoFestivalRouen} alt="logo du festival de la turquie a rouen" width={150} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </a>
          <a href="avis">
            <Image src={logoCarsamba} alt="logo de la mairie de carsamba samsun" width={130} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </a>
          <a href="avis">
            <Image src={logoTuzla} alt="logo de la mairie de tuzla a istanbul" width={120} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </a>
          <a href="avis">
            <Image src={logoDJBurak} alt="logo de dj burak" width={120} className=" dark:invert-0 dark:filter-none invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
          </a>
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
              <a href="presentation">
                <Image
                  src={portraitImage}
                  alt="portrait de fc productions"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className=" rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
                </a>
                <div className="flex place-content-center">
                <a href="presentation" aria-hidden="true" className="flex mt-2 items-center font-medium tracking-tight opacity-80  text-sm text-teal-500" >
                Découvrir l'histoire de FC Productions
                <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
                </a>
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
