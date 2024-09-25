import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Title from '../../pages/Home/Title';
import ProductItem from '../ProductItem/ProductItem';

const BestSaler = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
      if (products && products.length > 0) {
          setBestSeller(products.slice(6, 11));
      }
  }, [products]);
  

    useEffect(() => {
        console.log("Best Seller Products:", bestSeller); // Log after state update
    }, [bestSeller]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={"BEST"} text2={"SALERS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus voluptatem, iure ad dolore provident beatae numquam modi vero reprehenderit vel a esse error nulla reiciendis labore nam. Non, a.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.map((item, index) => (
                    <ProductItem key={index} id={item.id} name={item.name} image={item.image} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default BestSaler;
