import Works from 'components/ui/Works'
import { useEffect, useState } from 'react'
import worksData from '../api/works.json'

function WelcomePage() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    setProduct(worksData)
  }, [])
  return (
    <div className="flex flex-wrap items-center mx-4 ">
      {product.length &&
        product.map((product, index) => (
          <Works key={index} product={product} />
        ))}
    </div>
  )
}
export default WelcomePage
