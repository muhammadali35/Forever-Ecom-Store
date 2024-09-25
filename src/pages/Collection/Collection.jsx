import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import Title from '../Home/Title';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
const drop = require('./../../forever-assets/assets/frontend_assets/cart_icon.png');

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(true);
    const [filterProduct,setFilterProduct]=useState([]);
    const [category, setCategory] = useState([]);
    const [subcategory,setSubCategoty]=useState([]);
     const[sort,setSort]=useState('relevent')
     const {search,showsearch}=useContext(ShopContext)

   
    const toggle = (e) => {
      if (category.includes(e.target.value)) {
          setCategory(prev => prev.filter(item => item !== e.target.value));
      } else {
          setCategory(prev => [...prev, e.target.value]);
      }
  };
  const subToggle=(e)=>{
    if (subcategory.includes(e.target.value)) {
       setSubCategoty(pre=>pre.filter(item=>item!==e.target.value));
    }else {
      setSubCategoty(prev => [...prev, e.target.value]);
  }
  }
  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showsearch && search) {
        productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    // Apply category filter
    if (category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    // Apply subcategory filter
    // if (subcategory.length > 0) {
    //     console.log("Subcategories selected:", subcategory);
    //     productsCopy = productsCopy.filter(item => subcategory.includes(item.subcategory));
    //     console.log("Filtered products by subcategory:", productsCopy);
    // }

    setFilterProduct(productsCopy);
};

    // useEffect(()=>{
    //   setFilterProduct(products);
    // },[])
    const sortProuct=()=>{
       let fpCopy=filterProduct.slice();
        switch(sort){
          case 'low-high':
          setFilterProduct(fpCopy.sort((a,b)=>a.price-b.price));
          break;
          case 'high-low':
            setFilterProduct(fpCopy.sort((a,b)=>b.price-a.price));
            break;
            default:
                applyFilter();
                break;
        }
    }

    useEffect(()=>{
      applyFilter()
    },[category,subcategory,search,showsearch]);

    useEffect(()=>{
     sortProuct();
    },[sort])


    return (
        <>
            <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t mb-3'>
                {/* Filter options */}
                <div className='min-w-60'>
                    <p
                        className='my-2 text-xl flex items-center cursor-pointer gap-2'
                        onClick={() => setShowFilter(!showFilter)}
                    >
                        Filters
                        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={drop} alt="dropdown icon" />
                    </p>
                    {/* Category Filter */}
                    <div className={`border border-gray-300 pl-5 py-3 mt-3 ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value="Men" onChange={toggle}/>
                                Men
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value="Women" onChange={toggle}/>
                                Women
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value="Kids" onChange={toggle}/>
                                Kids
                            </p>
                        </div>
                    </div>
                    {/* Sub Category */}
                    <div className={`border border-gray-300 pl-5 py-3 mt-3 ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className='mb-3 text-sm font-medium'>TYPES</p>
                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value="Topwear" onChange={subToggle}/>
                                Topwear
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value="Bottomwear" onChange={subToggle} />
                                Bottomwear
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value="Winterwear" onChange={subToggle}/>
                                Winterwear
                            </p>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className='flex-1'>
             <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={"All"} text2={"Collections"}/>
            {/* product sort */}
            <select onChange={(e)=>setSort(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
           <option value="relevent" >
             sort by :Relevent
           </option>
           <option value="low-high">  sort by :Low to High</option>
           <option value="high-low">sort by :High to Low</option>
            </select>
             </div>
             {/* map product */}
             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
  {filterProduct.map((item, index) => (
  <Link key={index} to={`/product/${item._id}`}>
  <ProductItem
      name={item.name}
      id={item._id}
      price={item.price}
      image={item.image[0]} // Make sure to use the correct image
  />
</Link>

  ))}
</div>


                </div>
            </div>
        </>
    );
};

export default Collection;
