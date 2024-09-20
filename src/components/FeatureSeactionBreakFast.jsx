import React from 'react'
import ProductCard from './ProductCard'

const data=[
  {id:0, img:"product__5.webp",name:"Fresh Tomato",price:"$400"},
  {id:1, img:"product__2.webp",name:"Crunchy Crisps",price:"$300"},
  {id:2, img:"product__3.webp",name:"Jewel Cranberries",price:"$200"},
  {id:3, img:"product__4.webp",name:"Almond Organic",price:"$100"}
]

const FeatureSectionBreakFast = () => {
  return (
    <div className='container pt-16'>
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">
            BreakFast & dairy
           </h3>
           <p className='text-gray-500 mt-2'>Buy Best Quality BreakFast online from Big basket stop near you.</p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Eggs & Dairy</button>
          <button className='text-gray-600 hover:text-accent'>Pizza</button>
          <button className='text-gray-600 hover:text-accent'>Snacks</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5
       pt-8 gap-2">
        <div>
          <img className='w-full h-full object-cover' src="/feature__2.webp" alt="banner" />
          </div>

          {
            data.map(el=>(
              <ProductCard key={el.id} img={el.img} name={el.name} price={el.price}/>
            ))
          }
       </div>
    </div>
  )
}

export default FeatureSectionBreakFast