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

import { Reviews } from '@/components/Reviews'



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
        
        <Reviews />

      </SimpleLayout>
    </>
  )
}
