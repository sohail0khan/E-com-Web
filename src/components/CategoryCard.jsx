import React from 'react'

const CategoryCard = ({name,count,img}) => {
  return (
    <div className='border border-gray--200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg '>
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
          <h3 className='font-medium text-xl'>{name}</h3>
          <p className="text-gray-500">{count}</p>
        </div>
        <img src={img} alt={name} className="w-[100px]" />-[100px]
      </div>
    </div>
  )
}

export default CategoryCard