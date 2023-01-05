import { useEffect } from 'react'
import { getAllProducts } from '../../server'
import { ProductCard } from '../../ui'
import { getAllTransport } from '../../Redux/Products/transportSlice'
import { dataTransportSlice } from '../../Redux/Products/transportSlice'
import { useSelector, useDispatch } from 'react-redux'

const Transport = () => {
  const dispatch = useDispatch()
  const { items } = useSelector(dataTransportSlice)

  useEffect(() => {
    getAllProducts().then((res) => dispatch(getAllTransport(res)))
  }, [])

  return (
    <div className="batman-store__container">
      <ProductCard />
    </div>
  )
}

export default Transport