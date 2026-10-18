import { Header } from '@/components/header'
import { Container } from '@/components/container'
import { BannerBlackFriday } from './components/banner-blackfriday'

function App() {
  return (
    <Container className="root-container">
      <Header />
      <BannerBlackFriday />
    </Container>
  )
}

export default App
