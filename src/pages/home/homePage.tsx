import { useContext } from 'react'
import ProductModal from '../../components/common/productForm/productModal'
import ProductModalContext from '../../context/productModalContext/productModalContext'

const HomePage = () => {
  const { dispatch } = useContext(ProductModalContext)

  return (
    <div className='font-barlow flex gap-4 items-center justify-center h-screen bg-gray-100'>
      <button className='bg-purple-600 px-4 py-2 rounded-md' onClick={() => dispatch({ type: 'OPEN_CREATE' })}>
        Create new a product
      </button>
      <button className='bg-blue-600 px-4 py-2 rounded-md' onClick={() => dispatch({ type: 'OPEN_EDIT' })}>
        Edit
      </button>

      <ProductModal />
    </div>
  )
}

export default HomePage
