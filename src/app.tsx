import { Suspense, useState } from 'react'
import { Header } from '@/components/header'
import { Container } from '@/components/container'
import { BannerBlackFriday } from '@/components/banner-blackfriday'
import { ProductCarousel, ProductCarouselLoading } from '@/components/product-carousel'
import { PartnerSupport } from '@/components/partner-support'
import { BrandNavigation } from '@/components/brand-navigation'
import { Footer } from '@/components/footer'
import { ProductDialog } from '@/components/product-dialog'
import { ShopByCategory } from '@/components/shop-by-category'
import type { Product } from '@/api/products/types'

function App() {
  const [activeTab, setActiveTab] = useState('Celular')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <Container className="root-container">
      <Header />
      <BannerBlackFriday />
      <ShopByCategory />
      <Suspense fallback={<ProductCarouselLoading />}>
        <ProductCarousel
          title="Produtos relacionados"
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onProductSelect={setSelectedProduct}
          tabs={['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']}
        />
      </Suspense>
      <PartnerSupport />
      <Suspense fallback={<ProductCarouselLoading />}>
        <ProductCarousel title="Produtos relacionados" onProductSelect={setSelectedProduct} />
      </Suspense>
      <PartnerSupport />
      <BrandNavigation />
      <Suspense fallback={<ProductCarouselLoading />}>
        <ProductCarousel title="Produtos relacionados" onProductSelect={setSelectedProduct} />
      </Suspense>
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
