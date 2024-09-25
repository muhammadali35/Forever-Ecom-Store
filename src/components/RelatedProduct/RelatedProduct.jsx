import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Title from '../../pages/Home/Title';
import ProductItem from '../ProductItem/ProductItem';

const RelatedProduct = ({ category, subCategory }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const { products } = useContext(ShopContext);

    useEffect(() => {
        if (products.length > 0) {
            let filteredProducts = products.filter((item) => 
                item.category === category && item.subCategory === subCategory
            );
            setRelatedProducts(filteredProducts.slice(0, 5)); // Get first 5 related products
        }
    }, [category, subCategory, products]);

    return (
        <div className='my-24'>
         <div className='text-center text-3xl py-2'>
           <Title text1={"RELATED"} text2={"PRODUCTS"}/>
         </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-5'>
                {relatedProducts.length > 0 ? (
                    relatedProducts.map((item, index) => (
                     <ProductItem key={index} id={item._id} 
                     name={item.name} price={item.price} image={item.image}
                     />
                    ))
                ) : (
                    <p>No related products found.</p>
                )}
            </div>
        </div>
    );
};

export default RelatedProduct;
