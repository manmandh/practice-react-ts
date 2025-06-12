import { useContext } from 'react'
import ProductForm from './productForm'
import ProductModalContext from '../../../context/productModalContext/productModalContext'

const ProductModal = () => {
  const { state, dispatch } = useContext(ProductModalContext)

  if (!state.formType) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='w-full max-w-md rounded-2xl bg-[#1c1b2f] p-6 text-white shadow-lg'>
        <ProductForm
          title={state.formType === 'create' ? 'Create new a product' : 'Edit'}
          onCancel={() => dispatch({ type: 'CLOSE_MODAL' })}
        />
      </div>
    </div>
  )
}

export default ProductModal
