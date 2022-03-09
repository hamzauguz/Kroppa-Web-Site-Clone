import Companies from 'components/ui/Companies'
import { useEffect, useState } from 'react'
import productData from '../api/companies.json'

function ThisCompanies() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    setProduct(productData)
  }, [])
  return (
    <div className="grid grid-cols-6 gap-7 xl:grid-cols-2 xl:gap-3 mx-10 gap-y-0 my-8 sm:divide-dashed sm:grid-cols-1 sm:gap-2  ">
      {product.length &&
        product.map((product, index) => (
          <Companies key={index} product={product} />
        ))}
    </div>
  )
}
export default ThisCompanies
