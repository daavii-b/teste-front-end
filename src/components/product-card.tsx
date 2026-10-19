import type { Product } from '@/api/products/types'
import { formatCurrency } from '@/lib/format-currency'

type ProductCardProps = {
  product: Product
  onBuy?: (product: Product) => void
  onSelect?: (product: Product) => void
}

export function ProductCard({ product, onBuy, onSelect }: ProductCardProps) {
  return (
    <article className="product-card">
      <button
        aria-label={`Ver detalhes de ${product.productName}`}
        className="product-card__details-trigger"
        onClick={() => onSelect?.(product)}
        type="button"
      />

      <div className="product-card__image-wrap">
        <img className="product-card__image" src={product.photo} alt={product.productName} />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__name">{product.productName}</h3>

        <div className="product-card__pricing">
          <del className="product-card__original-price">{formatCurrency(product.price)}</del>
          <p className="product-card__price">{formatCurrency(product.price)}</p>
          <p className="product-card__installments">{`ou 2x de ${formatCurrency(product.price / 2)} sem juros`}</p>
          <p className="product-card__shipping">Frete grátis</p>
        </div>

        <button
          aria-label={`Comprar ${product.productName}`}
          className="product-card__buy"
          onClick={() => onBuy?.(product)}
          type="button"
        >
          Comprar
        </button>
      </div>
    </article>
  )
}
