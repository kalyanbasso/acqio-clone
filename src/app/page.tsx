import { Header } from '../components/Header'
import { MyCarousel } from '../components/Carousel'
import { InfoTextGrid } from '../components/InfoTextGrid'

export default function Home() {
  return (
    <div>
      <Header />
      <MyCarousel />
      <InfoTextGrid />
    </div>
  )
}
