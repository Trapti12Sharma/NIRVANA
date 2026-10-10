import { createContext, useContext, useState } from 'react'
import ProductDetails from './ProductDetails'

const Ctx = createContext({ open: () => {} })
export const useProductModal = () => useContext(Ctx)

export function ProductModalProvider({ children }) {
  const [product, setProduct] = useState(null)
  return (
    <Ctx.Provider value={{ open: setProduct }}>
      {children}
      {product && <ProductDetails product={product} onClose={() => setProduct(null)} />}
    </Ctx.Provider>
  )
}
