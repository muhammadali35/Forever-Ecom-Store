import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import RelatedProduct from '../RelatedProduct/RelatedProduct';

const Products = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const { products, currancy,cartItem,AddToCart } = useContext(ShopContext);
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const [size, setSize] = useState();

    useEffect(() => {
        // Find the product by ID
        const foundProduct = products.find(item => item._id === id);
        if (foundProduct) {
            setProduct(foundProduct);
            setMainImage(foundProduct.image[0]); // Set the first image as the main image initially
        }
    }, [id, products]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className='container mx-auto px-4'>
            {/* Main product section */}
            <div className='flex flex-col lg:flex-row gap-10'>
                {/* Images section */}
                <div className="flex flex-col lg:flex-row gap-5">
                    {/* Left side small images */}
                    <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto h-24 lg:h-60">
                        {product.image.slice(0, 4).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${product.name} ${index}`}
                                className="w-24 h-24 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-blue-500 transition-all"
                                onClick={() => setMainImage(img)} // Change main image on click
                            />
                        ))}
                    </div>

                    {/* Right side big image */}
                    <div className="flex-1">
                        <img
                            src={mainImage}
                            alt={product.name}
                            className="w-full h-auto max-w-lg lg:max-w-none rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Product info section */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{product.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={require('./../../forever-assets/assets/frontend_assets/star_icon.png')} alt="star" className='w-4' />
                        <img src={require('./../../forever-assets/assets/frontend_assets/star_icon.png')} alt="star" className='w-4' />
                        <img src={require('./../../forever-assets/assets/frontend_assets/star_icon.png')} alt="star" className='w-4' />
                        <img src={require('./../../forever-assets/assets/frontend_assets/star_icon.png')} alt="star" className='w-4' />
                        <img src={require('./../../forever-assets/assets/frontend_assets/star_dull_icon.png')} alt="star" className='w-4' />
                        <p>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currancy} {product.price}</p>

                    {/* Size selection */}
                    <div className='flex flex-col mt-5'>
                        <p>Size</p>
                        <div className='flex gap-2'>
                            {product.sizes.map((item, index) => (
                                <button onClick={() => setSize(item)} className={`border py-2 px-3 bg-gray-100 ${item === size ? 'border-orange-600' : ''}`} key={index}>{item}</button>
                            ))}
                        </div>
                    </div>

                    {/* Add to cart button */}
                    <button className='bg-black text-white px-8 py-3 text-sm mt-5 active:bg-gray-700' onClick={()=>AddToCart(product._id,size)}>ADD TO CART</button>
                </div>
            </div>

            {/* Description and Review section */}
            <div className='flex flex-col md:flex-row gap-9 mt-10'>
                {/* Description box */}
                <div className='flex-1'>
                    <h3 className='text-lg font-medium'>Description</h3>
                    <p className='mt-3 text-gray-500'>
                        This innovative eCommerce product offers premium quality, combining sleek design and functionality. Perfect for everyday use, it delivers exceptional performance and value, with durable materials and a modern aesthetic.
                    </p>
                    <p className='mt-3 text-gray-500'>
                        This versatile eCommerce product offers a perfect blend of style, durability, and functionality. Crafted from high-quality materials, it’s designed to enhance everyday experiences.
                    </p>
                </div>

                {/* Review section */}
                <div className='flex-1'>
                    <h3 className='text-lg font-medium'>Customer Reviews (122)</h3>
                    <p className='mt-3 text-gray-600'>Based on 122 reviews, the average rating is 4.5 out of 5 stars.</p>
                </div>
            </div>

            {/* Related Products */}
            <RelatedProduct category={product.category} subCategory={product.subCategory} />
        </div>
    );
};

export default Products;
