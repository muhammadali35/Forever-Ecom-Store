import React, { useContext } from 'react';
import Title from './Home/Title';
import { ShopContext } from '../Context/ShopContext';

const Order = () => {
    const { products, currency } = useContext(ShopContext);

    // Log the context data to verify if products and currency are being populated
    console.log('Products:', products);
    console.log('Currency:', currency);

    // Conditional rendering if products are not yet available
    if (!products || products.length === 0) {
        return (
            <div className="text-center py-10">
                <p>No orders found.</p>
            </div>
        );
    }

    return (
        <>
            <div className='border-t pt-16'>
                {/* Title section */}
                <div className='text-2xl'>
                    <Title text1={"MY"} text2={'ORDERS'} />
                </div>

                {/* Orders list */}
                <div>
                    {products.slice(1, 4).map((item, index) => (
                        <div
                            key={index}
                            className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
                        >
                            {/* Image and Item Details */}
                            <div className='flex items-start gap-6 text-sm'>
                                <img
                                    src={item?.image?.[0] || '/path/to/fallback-image.jpg'}
                                    alt={item?.name || 'Product Image'}
                                    className='w-24 h-24 object-cover'
                                />
                                <div>
                                    <h3 className="font-semibold">{item?.name || 'Product Name'}</h3>
                                    <p className="text-gray-500">
                                        Price: {currency}{item?.price}
                                    </p>
                                </div>
                            </div>

                            {/* Buttons for "Ready for Shipping" and "Truck Order" */}
                            <div className='flex gap-4'>
                                <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                                    Ready for Shipping
                                </button>
                                <button className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>
                                    Truck Order
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Order;
