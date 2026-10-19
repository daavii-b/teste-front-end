import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Minus, Plus, X } from 'lucide-react'
import type { Product } from '@/api/products/types'
import { formatCurrency } from '@/lib/format-currency'

type ProductDialogProps = {
  product: Product
  onOpenChange: (open: boolean) => void
}

export function ProductDialog({ product, onOpenChange }: ProductDialogProps) {
  const dialogId = useId()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const previousBodyOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    dialog.showModal()

    return () => {
      dialog.close()
      document.body.style.overflow = previousBodyOverflow
    }
  }, [])

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-describedby={`${dialogId}-description`}
      aria-labelledby={`${dialogId}-title`}
      className="product-dialog__overlay"
      onCancel={(event) => {
        event.preventDefault()
        onOpenChange(false)
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onOpenChange(false)
      }}
    >
      <div className="product-dialog">
        <button
          aria-label="Fechar detalhes do produto"
          autoFocus
          className="product-dialog__close"
          onClick={() => onOpenChange(false)}
          type="button"
        >
          <X aria-hidden="true" size={18} strokeWidth={1.6} />
        </button>

        <div className="product-dialog__image-container">
          <img className="product-dialog__image" src={product.photo} alt={product.productName} />
        </div>

        <div className="product-dialog__content">
          <h2 className="product-dialog__title" id={`${dialogId}-title`}>
            {product.productName}
          </h2>
          <p className="product-dialog__price">{formatCurrency(product.price)}</p>
          <p className="product-dialog__description" id={`${dialogId}-description`}>
            {product.descriptionShort}
          </p>
          <a className="product-dialog__details-link" href="#product-details">
            Veja mais detalhes do produto <span aria-hidden="true">›</span>
          </a>

          <div className="product-dialog__actions">
            <div className="product-dialog__quantity" aria-label="Quantidade">
              <button
                aria-label="Diminuir quantidade"
                disabled={quantity <= 1}
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                type="button"
              >
                <Minus aria-hidden="true" size={21} />
              </button>
              <span aria-live="polite">{String(quantity).padStart(2, '0')}</span>
              <button
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity((current) => current + 1)}
                type="button"
              >
                <Plus aria-hidden="true" size={21} />
              </button>
            </div>
            <button className="product-dialog__buy" type="button">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </dialog>,
    document.body,
  )
}
