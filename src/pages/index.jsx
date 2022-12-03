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

import image1 from '@/images/photos/IMG_7694.jpg'
import image2 from '@/images/photos/IMG_5911.jpg'
import image3 from '@/images/photos/IMG_0589.jpg'
import image4 from '@/images/photos/IMG_5793.jpg'
import image5 from '@/images/photos/image4501.jpg'

import logoOpera from '@/images/logos/logoopera.png'
import logoEva from '@/images/logos/logoEva.png'
import logoFesti from '@/images/logos/logofesti.png'
import logoOsny from '@/images/logos/logoOsny.png'
import logoCapitole from '@/images/logos/logocapitole.png'
import logoRlocation from '@/images/logos/logoRlocation.png'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'


function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
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

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Activez les newsletters !</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Recevez un mail à chaque nouvelle publication sur Instagram ou Youtube ! 
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="E-mail"
          aria-label="E-mail"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Activer
        </Button>
      </div>
    </form>
  )
}

// function Resume() {
//   let resume = [
//     {
//       company: 'Planetaria',
//       title: 'CEO',
//       logo: logoPlanetaria,
//       start: '2019',
//       end: {
//         label: 'Present',
//         dateTime: new Date().getFullYear(),
//       },
//     },
//     {
//       company: 'Airbnb',
//       title: 'Product Designer',
//       logo: logoAirbnb,
//       start: '2014',
//       end: '2019',
//     },
//     {
//       company: 'Facebook',
//       title: 'iOS Software Engineer',
//       logo: logoFacebook,
//       start: '2011',
//       end: '2014',
//     },
//     {
//       company: 'Starbucks',
//       title: 'Shift Supervisor',
//       logo: logoStarbucks,
//       start: '2008',
//       end: '2011',
//     },
//   ]

//   return (
//     <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <BriefcaseIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Work</span>
//       </h2>
//       <ol className="mt-6 space-y-4">
//         {resume.map((role, roleIndex) => (
//           <li key={roleIndex} className="flex gap-4">
//             <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
//               <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
//             </div>
//             <dl className="flex flex-auto flex-wrap gap-x-2">
//               <dt className="sr-only">Company</dt>
//               <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
//                 {role.company}
//               </dd>
//               <dt className="sr-only">Role</dt>
//               <dd className="text-xs text-zinc-500 dark:text-zinc-400">
//                 {role.title}
//               </dd>
//               <dt className="sr-only">Date</dt>
//               <dd
//                 className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
//                 aria-label={`${role.start.label ?? role.start} until ${
//                   role.end.label ?? role.end
//                 }`}
//               >
//                 <time dateTime={role.start.dateTime ?? role.start}>
//                   {role.start.label ?? role.start}
//                 </time>{' '}
//                 <span aria-hidden="true">—</span>{' '}
//                 <time dateTime={role.end.dateTime ?? role.end}>
//                   {role.end.label ?? role.end}
//                 </time>
//               </dd>
//             </dl>
//           </li>
//         ))}
//       </ol>
//       <Button href="#" variant="secondary" className="group mt-6 w-full">
//         Download CV
//         <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
//       </Button>
//     </div>
//   )
// }

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
              sizes="(min-width: 640px) 18rem, 11rem"
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
        <title>FC Productions</title>
        <meta
          name="description"
          content="Je suis télépilote de drone FPV en France, au sud et au nord"
        />
      </Head>
      
      <Container className="mt-9">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            FC PRODUCTIONS
          </h1>
          <p className="text-base text-zinc-800 dark:text-zinc-100 text-lg animate-pulse">
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

          
            <div className="flex items-center grid sm:grid-cols-6 grid-cols-3 gap-4 content-between">
              <a href="avis/#operagrandavignon">
                <Image src={logoOpera} alt="logo du grand opéra avignon" className=" dark:invert-0 invert transition delay-4000 duration-300 ease-in-out hover:scale-110" />
              </a>
              <a href="avis/#eva">
                <Image src={logoEva} alt="logo de eva en réalité virtuelle" className=" dark:invert-0 invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
              </a> 
              <a href="avis/#festiculture">
                <Image src={logoFesti} alt="logo de festiculture" className=" transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
              </a>  
              <a href="avis">
                <Image src={logoOsny} alt="logo du club bmx de osny" className=" dark:invert-0 invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
              </a>  
              <a href="avis/#ronelocation">
                <Image src={logoRlocation} alt="logo de rone location" className=" transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
              </a>  
              <a href="avis/#capitolestudios">
                <Image src={logoCapitole} alt="logo du capitole studios" className=" dark:invert-0 invert transition delay-4000 duration-300 ease-in-out hover:scale-110"/>
              </a>
            </div>


      </Container>
      <a href="avis" className="justify-center flex mb-5 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 opacity-80 italic">
      et encore bien d'autres.. Cliquez pour lire leur avis !
      </a>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            
            {/* <Resume /> */}
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
