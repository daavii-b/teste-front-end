import { useState } from 'react'
import { Header } from '@/components/header'
import { Container } from '@/components/container'
import { BannerBlackFriday } from '@/components/banner-blackfriday'
import { ProductCarousel } from '@/components/product-carousel'
import { ShopByCategory } from '@/components/shop-by-category'
import type { Product } from '@/api/products/types'

const PRODUCTS: Product[] = Array.from({ length: 10 }, (_, index) => ({
  productName: `Produto ${index + 1}`,
  descriptionShort: `Descrição do Produto ${index + 1}`,
  photo: `https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png`,
  price: 28.9,
}))

function App() {
  const [activeTab, setActiveTab] = useState('Celular')

  return (
    <Container className="root-container">
      <Header />
      <BannerBlackFriday />
      <ShopByCategory />
      <ProductCarousel
        activeTab={activeTab}
        onTabChange={setActiveTab}
        products={PRODUCTS}
        tabs={['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']}
        title="Produtos relacionados"
      />
    </Container>
  )
}

export default App
