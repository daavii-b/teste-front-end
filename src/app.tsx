import { useState } from 'react'
import { Header } from '@/components/header'
import { Container } from '@/components/container'
import { BannerBlackFriday } from '@/components/banner-blackfriday'
import { ProductCarousel } from '@/components/product-carousel'
import { PartnerSupport } from '@/components/partner-support'
import { BrandNavigation } from '@/components/brand-navigation'
import { Footer } from '@/components/footer'
import { ProductDialog } from '@/components/product-dialog'
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <Container className="root-container">
      <Header />
      <BannerBlackFriday />
      <ShopByCategory />
      <ProductCarousel
        title="Produtos relacionados"
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onProductSelect={setSelectedProduct}
        products={PRODUCTS}
        tabs={['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']}
      />
      <PartnerSupport />
      <ProductCarousel
        title="Produtos relacionados"
        onProductSelect={setSelectedProduct}
        products={PRODUCTS}
      />
      <PartnerSupport />
      <BrandNavigation />
      <ProductCarousel
        title="Produtos relacionados"
        onProductSelect={setSelectedProduct}
        products={PRODUCTS}
      />
      <Footer />
      {selectedProduct && (
        <ProductDialog
          product={selectedProduct}
          onOpenChange={(open) => !open && setSelectedProduct(null)}
        />
      )}
    </Container>
  )
}

export default App
