import React from 'react'

interface ProductFormProps {
  title: string
  onCancel: () => void
}

const ProductForm: React.FC<ProductFormProps> = ({ title, onCancel }) => {
  return (
    <div className='space-y-4 bg-base-bg p-6 rounded-lg font-barlow'>
      <h2 className='text-lg mb-2 text-white'>{title}</h2>
      <div className='border-b border-form-border mb-4' />

      <form className='space-y-4'>
        <div>
          <label htmlFor='name' className='block text-sm font-medium text-white mb-2'>
            Name
          </label>
          <input
            id='name'
            type='text'
            placeholder='Enter product name'
            className='w-full rounded bg-form-bg border border-form-border px-4 py-2 text-sm text-white outline-none font-barlow'
          />
        </div>

        <div>
          <label htmlFor='price' className='block text-sm font-medium text-white mb-2'>
            Price
          </label>
          <input
            id='price'
            type='text'
            placeholder='Enter product price'
            className='w-full rounded bg-form-bg border border-form-border px-4 py-2 text-sm text-white outline-none font-barlow'
          />
        </div>

        <div>
          <label htmlFor='imageUrl' className='block text-sm font-medium text-white mb-2'>
            Image URL
          </label>
          <input
            id='imageUrl'
            type='text'
            placeholder='Enter image URL'
            className='w-full rounded bg-form-bg border border-form-border px-4 py-2 text-sm text-white outline-none font-barlow'
          />
        </div>

        <div>
          <label htmlFor='quantity' className='block text-sm font-medium text-white mb-2'>
            Quantity
          </label>
          <input
            id='quantity'
            type='number'
            defaultValue={1}
            placeholder='Enter product quantity'
            className='w-full rounded bg-form-bg border border-form-border px-4 py-2 text-sm text-white outline-none font-barlow'
          />
        </div>

        <div className='flex justify-between mt-4'>
          <button
            type='button'
            onClick={onCancel}
            className='rounded border border-btn-orange px-4 py-2 text-sm text-btn-orange transition hover:bg-btn-orange hover:text-white font-barlow'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='rounded bg-btn-orange px-6 py-2 text-sm text-white shadow transition hover:opacity-90 font-barlow'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm
