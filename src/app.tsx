import { Header } from '@/components/header'
import { Container } from '@/components/container'
import { BannerBlackFriday } from './components/banner-blackfriday'
import { ShopByCategory } from './components/shop-by-category'

function App() {
  return (
    <Container className="root-container">
      <Header />
      <BannerBlackFriday />
      <ShopByCategory />
    </Container>
  )
}

export default App
