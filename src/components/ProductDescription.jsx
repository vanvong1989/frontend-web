import React from 'react'

const ProductDescription = () => {
  return (
    <div className='max-padd-container mt-20'>
      <div className='flex gap-3 mb-4'>
        <button className='btn-dark rounded-sm !text-xs !py-[6px] w-36'>Description</button>
        <button className='btn-outline rounded-sm !text-xs !py-[6px] w-36'>Care Guide</button>
        <button className='btn-outline rounded-sm !text-xs !py-[6px] w-36'>Size Guide</button>
      </div>
      <div className='flex flex-col pb-16'>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat 
          impedit esse tenetur soluta accusamus labore deleniti illo, id explicabo, 
          distinctio eos maiores fuga provident beatae placeat quos blanditiis! Vero, facere!</p>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur quia accusamus, 
          nulla rerum quo vero eveniet earum atque, veritatis optio culpa! Voluptatibus sequi, 
          ipsum eveniet error numquam consequuntur necessitatibus.</p>
      </div>
    </div>
  )
}

export default ProductDescription