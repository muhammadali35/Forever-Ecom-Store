import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../pages/Home/Title'

const TotalCart = () => {
    const {currancy,deliver_fee,getTotalAmount}=useContext(ShopContext)
  return (
    <>
      <div className='w-full'>
<div className='text-2xl'>
   <Title text1={"TOTAL"} text2={'CART'}/>
</div>
<div className='flex flex-col gap-2 mt-2 text-sm'>
<div className='flex justify-between'>
   <p>SubTotal</p>
   <p>{currancy}{getTotalAmount()}.00</p>
</div>
<hr />
<div className='flex justify-between'>
<p>Shipping Free</p>
<p> {currancy}{deliver_fee}</p>
</div>
<hr />
<div className='flex justify-between'>
<b>Total</b>
<b> {currancy}{getTotalAmount() ===0  ? 0:getTotalAmount()+deliver_fee} </b>
</div>
</div>
      </div>
    </>
  )
}

export default TotalCart
