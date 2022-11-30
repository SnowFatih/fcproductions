import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'


export default function Contact() {
  return (
    <>
      <Head>
        <title>FC - Contact</title>
        <meta
          name="description"
          content="Formulaire de contact pour vidéaste, droniste fpv"
        />
      </Head>
      <SimpleLayout
        title="N'hésitez pas à me contacter si vous avez la moindre question."
        intro="Réponse sous 24-48 heures."
      >
        
      </SimpleLayout>

    </>
  )
}
