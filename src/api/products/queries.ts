import { queryOptions } from '@tanstack/react-query'
import { getProducts } from '@/api/products/get-products'

export const productQueries = {
  all: () =>
    queryOptions({
      queryKey: ['products'] as const,
      queryFn: ({ signal }) => getProducts(signal),
      staleTime: 5 * 60 * 1000,
    }),
}
