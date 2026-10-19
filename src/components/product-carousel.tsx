import { useId, useRef } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Product } from '@/api/products/types'
import { productQueries } from '@/api/products/queries'
import { ProductCard } from '@/components/product-card'

export type ProductCarouselProps = {
  title: string
  tabs?: string[]
  activeTab?: string
  onTabChange?: (tab: string) => void
  onBuyProduct?: (product: Product) => void
  onProductSelect?: (product: Product) => void
}

export function ProductCarouselHeading({ id, title }: { title: string; id: string }) {
  return (
    <div className="product-carousel__heading">
      <span className="product-carousel__line" aria-hidden="true" />
      <h2 className="product-carousel__title" id={id}>
        {title}
      </h2>
      <span className="product-carousel__line" aria-hidden="true" />
    </div>
  )
}

export function ProductCarouselEmptyState() {
  return (
    <p className="product-carousel__empty" role="status">
      Nenhum produto disponível no momento.
    </p>
  )
}

export function ProductCarouselLoading() {
  return (
    <p className="product-carousel__empty" role="status">
      Carregando produtos…
    </p>
  )
}

export function ProductCarouselCategoryTabs({
  title,
  tabs,
  activeTab,
  onTabChange,
}: Pick<ProductCarouselProps, 'title' | 'tabs' | 'activeTab' | 'onTabChange'>) {
  if (!tabs?.length) {
    return (
      <div className="product-carousel__all">
        <button
          aria-pressed={activeTab === 'Ver todos'}
          className="product-carousel__all-button"
          onClick={() => onTabChange?.('Ver todos')}
          type="button"
        >
          Ver todos
        </button>
      </div>
    )
  }

  return (
    <div className="product-carousel__tabs" role="group" aria-label={`Categorias de ${title}`}>
      {tabs.map((tab) => (
        <button
          aria-pressed={activeTab === tab}
          className="product-carousel__tab"
          key={tab}
          onClick={() => onTabChange?.(tab)}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export function ProductCarousel({
  title,
  tabs,
  activeTab,
  onTabChange,
  onBuyProduct,
  onProductSelect,
}: ProductCarouselProps) {
  const titleId = useId()
  const { data: products } = useSuspenseQuery(productQueries.all())

  const trackRef = useRef<HTMLDivElement>(null)

  function scroll(direction: 'previous' | 'next') {
    const track = trackRef.current

    if (!track) return

    track.scrollBy({
      left: (direction === 'previous' ? -1 : 1) * track.clientWidth * 0.85,
      behavior: 'smooth',
    })
  }

  return (
    <section className="product-carousel" aria-labelledby={titleId}>
      <ProductCarouselHeading id={titleId} title={title} />

      <ProductCarouselCategoryTabs
        activeTab={activeTab}
        onTabChange={onTabChange}
        tabs={tabs}
        title={title}
      />
      {products.length > 0 ? (
        <div className="product-carousel__viewport">
          <div className="product-carousel__track-wrapper">
            <button
              aria-label="Produtos anteriores"
              className="product-carousel__control product-carousel__control--previous"
              onClick={() => scroll('previous')}
              type="button"
            >
              <ChevronLeft aria-hidden="true" size={25} />
            </button>
            <div className="product-carousel__track-viewport" ref={trackRef}>
              <ul className="product-carousel__track">
                {products.map((product, index) => (
                  <li
                    className="product-carousel__item"
                    key={`${product.productName}-${product.photo}-${index}`}
                  >
                    <ProductCard
                      onBuy={onBuyProduct}
                      onSelect={onProductSelect}
                      product={product}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <button
              aria-label="Próximos produtos"
              className="product-carousel__control product-carousel__control--next"
              onClick={() => scroll('next')}
              type="button"
            >
              <ChevronRight aria-hidden="true" size={25} />
            </button>
          </div>
        </div>
      ) : (
        <ProductCarouselEmptyState />
      )}
    </section>
  )
}
