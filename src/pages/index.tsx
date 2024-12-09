import Link from 'next/link'

import Atuacao from '@/sections/atuacao'
import Sobre from '@/sections/sobre'

export default function Home() {
  return (
    <>
      <div>
        <h1>LANDING PAGE</h1>
        <Link href="/navbar"></Link>
      </div>
      <header>
        <p>
          Lorem ipsum dolor sit amet. Quo officiis quae et nesciunt ipsa ut fugiat sint? Rem
          suscipit inventore sit eaque quia vel autem voluptatem et quia nemo id exercitationem
          dolor!{' '}
        </p>
        <p>
          Ut pariatur enim ea sint autem a odio tempora. Et velit quasi ut labore expedita est rerum
          nostrum 33 quidem dolorem hic nostrum enim qui repudiandae dolor aut magni pariatur.{' '}
        </p>
      </header>
      <section>
        <article>
          <h2>03 March 2018</h2>
          <p>Rain.</p>
        </article>
        <article>
          <h2>04 March 2018</h2>
          <p>Periods of rain.</p>
        </article>
        <article>
          <h2>05 March 2018</h2>
          <p>Heavy rain.</p>
        </article>
      </section>
      <main>
        <Sobre />
        <Atuacao />
      </main>
    </>
  )
}
