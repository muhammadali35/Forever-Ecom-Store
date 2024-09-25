import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Title from './Title';
import ProductItem from '../../components/ProductItem/ProductItem';
const Latest = () => {
    const [latest,setLatest]=useState([])
    const { products } = useContext(ShopContext);
    console.log(products)
      useEffect(()=>{
        setLatest(products.slice(0,10));
      },[])
    return (
        <>
            <div className='my-10 '>
                <div className='text-center py-8 text-3xl'>
                    <Title text1={"LATEST"} text2={"COLLLECTION"}/>
                   <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base'>
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut blanditiis maxime alias veritatis, libero eum eaque fuga doloribus praesentium.
                   </p>
                </div>
                 {/* rendering componet */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
                         {
                            latest.map((item,index)=>(
                            <ProductItem key={index} id={item._id} image={item.image}  name={item.name} price={item.price}/>
                            ))
                         }
                    </div>
            </div>
        </>
    )
}

export default Latest
