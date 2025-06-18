import React, { useState } from 'react'
import { EditIcon } from '../../assets/icons'

interface Dish {
  id: number
  name: string
  price: number
  bowls: number
  img: string
}

const mockDishes: Dish[] = [
  {
    id: 1,
    name: 'Spicy seasoned seafood noodles',
    price: 2.29,
    bowls: 20,
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 2,
    name: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    bowls: 30,
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 3,
    name: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    bowls: 30,
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 4,
    name: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    bowls: 30,
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 4,
    name: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    bowls: 30,
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 4,
    name: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    bowls: 30,
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 4,
    name: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    bowls: 30,
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 4,
    name: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    bowls: 30,
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=150&h=150&fit=crop&crop=center'
  },
  {
    id: 5,
    name: 'Salted Pasta with mushroom sauce',
    price: 2.69,
    bowls: 30,
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=150&h=150&fit=crop&crop=center'
  }
]

interface ProductCardProps {
  dish: Dish
  selected: boolean
  onEdit: () => void
  onDelete: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ dish, onEdit, onDelete }) => {
  return (
    <div className={`bg-base-dark-bg-2 rounded-xl pt-4 relative transition border border-base-dark-line`}>
      <div className='px-4'>
        <img src={dish.img} alt={dish.name} className='w-20 h-20 object-cover rounded-full mx-auto' />
        <h3 className='text-white text-center mt-4 text-sm font-medium'>{dish.name}</h3>
        <p className='text-gray-400 text-center text-xs mt-1'>
          ${dish.price.toFixed(2)} • {dish.bowls} Bowls
        </p>
      </div>
      <button
        onClick={onEdit}
        className='inline-flex items-center justify-center gap-2 mt-4 w-full h-[52px] bg-primary/25 text-primary text-sm py-1 rounded'
      >
        <img src={EditIcon} className='text-primary' />
        <span>Edit dish</span>
      </button>
      <button onClick={onDelete} className='absolute top-2 right-2 text-white hover:text-red-500'>
        ✕
      </button>
    </div>
  )
}

const ProductsManagement: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredDishes = mockDishes.filter((dish) => dish.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className='bg-base-dark-bg-2 min-h-screen p-6 text-white'>
      <div className='px-20'>
        <div className='flex justify-between items-center mt-[55px] mb-[38px]'>
          <h2 className='text-lg font-semibold mb-4'>Products Management</h2>

          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='bg-[#2d303e] p-2 rounded text-sm w-64'
            placeholder='Search for food, coffee, etc...'
          />
        </div>
        <div className='text-right mb-5'>
          <button className='bg-[#2d303e] text-sm p-2 rounded'>Sort by ▼</button>
        </div>
      </div>

      <div className='h-[1px] bg-base-dark-line'></div>

      <div className='grid grid-cols-5 gap-4 px-20 mt-[26px]'>
        {/* Add new dish */}
        <div className='bg-base-dark-bg-2 rounded-xl flex flex-col items-center justify-center p-4 border-dashed border-2 border-primary cursor-pointer'>
          <span className='text-primary text-xl font-bold'>+</span>
          <p className='text-primary mt-2 text-sm'>Add new dish</p>
        </div>

        {filteredDishes.map((dish) => (
          <ProductCard
            key={dish.id}
            dish={dish}
            selected={dish.id === selectedId}
            onEdit={() => setSelectedId(dish.id)}
            onDelete={() => alert(`Delete dish: ${dish.name}`)}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center mt-6 space-x-2'>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 rounded ${num === 2 ? 'bg-[#ea7c69] text-white' : 'bg-[#2d303e] text-gray-300'}`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductsManagement
