import type { Product } from '@/api/products/types'

const PRODUCTS_ENDPOINT = '/api/products'

export async function getProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(PRODUCTS_ENDPOINT, { signal, method: 'GET' })

  if (!response.ok) {
    throw new Error(`Falha ao buscar produtos: ${response.status}`)
  }

  const data = await response.json()

  console.log({ data })

  return data.products
}
