import Image from 'next/image'
import HeroSection from './component/HeroSection'
import Banner from './component/Banner'

export default function Home() {

  return(
    <section>
      <Banner />
      <HeroSection />
    </section>
  )
}
