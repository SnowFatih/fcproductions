import Image from 'next/image'

import { Container } from '@/components/Container'

import logoopera from '@/images/logos/logoopera.png'

const sponsors = [
  { name: 'Transistor', logo: logoopera },
  { name: 'Tuple', logo: logoopera },
  { name: 'StaticKit', logo: logoopera },
  { name: 'Mirage', logo: logoopera },
  { name: 'Laravel', logo: logoopera },
  { name: 'Statamic', logo: logoopera },
]

export function Collab() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-10">
      <Container>
        <div className="mx-auto grid max-w-max grid-cols-1 place-content-center gap-y-5 sm:grid-cols-3 md:gap-x-5">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
