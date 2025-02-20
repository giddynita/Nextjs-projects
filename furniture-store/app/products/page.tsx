import ProductsContainer from '@/components/products/ProductsContainer'

type SearchParams = Promise<{ layout?: string; search?: string }>
const ProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams
}) => {
  const { layout, search } = await searchParams
  const layoutType = layout || 'grid'
  const searchWord = search || ''

  return (
    <>
      <ProductsContainer layoutType={layoutType} searchWord={searchWord} />
    </>
  )
}
export default ProductsPage
