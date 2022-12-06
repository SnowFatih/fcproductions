import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/tango.jpg'

export function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>FC - Présentation</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="FC Productions, vidéaste et droniste sur Paris et toute la France"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Qui suis-je ?
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Moi, c'est <strong>Fatih C.</strong> ! J'ai commencé la <strong>vidéographie</strong> ainsi que <strong>photographie</strong> très jeune dans l'événementiel avec <strong>@IZPhotoVideo</strong>. Ce qui m'a 
                permit d'avoir des bases rapidement ainsi que du temps pour perfectionner mes connaissances.
              </p>
              <p>
                Je me suis rapidement penché dans la vidéographie et trouvé une <strong>passion</strong> dans le drone.
                Soif de sensation plus poussée, le FPV m'a vite attiré l'oeil !
              </p>
              <p>
                Suite à des centaines d'heures d'entrainement sur simulateur et en réel, mes perfomances ont augmentés pour enfin réaliser
                du <strong>contenu cinématographique</strong>. 
                Ce genre de machine deviennent de plus en plus en tendance, il est effectivement possible de réaliser des prises de vues supers dynamiques mais aussi des plans séquence très créatifs.
                Le <strong>dynamisme</strong> et l’<strong>originalité</strong> de ces prises de vues permettent de garder l’attention du spectateur jusqu’au bout.
              </p>
              <p>
              <strong>La seule limite... notre créativité !</strong>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.instagram.com/fcproductions55/"
                target="_blank"
                aria-label="Suivez moi sur Instagram"
                icon={InstagramIcon}
                className="mt-4"
              >
                Suivez moi sur Instagram
              </SocialLink>
              <SocialLink
                href="https://www.youtube.com/channel/UC-YvVhHlBAH6UOezaihTK9A"
                target="_blank"
                aria-label="Suivez moi sur Youtube"
                icon={YoutubeIcon}
                className="mt-4"
              >
                Suivez moi sur Youtube
              </SocialLink>
              <SocialLink
                href="/contact"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Contactez moi
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
