import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import searchicon from './../forever-assets/assets/frontend_assets/search_icon.png'
import { useLocation } from 'react-router-dom'
const SearchBar = () => {
    const{search,setSearch,showsearch,setShowSearch}=useContext(ShopContext)
    const [visible,setVisible]=useState(false)
    const location=useLocation();
       useEffect(()=>{
        if (location.pathname.includes('collection')) {
          setVisible(true)
        } else{
            setVisible(false)
        }
       },[location])
  return showsearch  && visible ? (
    <>
<div className='bg-gray-50 border-t border-b border-gray-200 py-4'>
  <div className='inline-flex items-center justify-between bg-white border border-gray-300 shadow-sm px-5 py-2 mx-auto rounded-full w-11/12 sm:w-2/3 md:w-1/2'>
    <div className='flex items-center w-full'>
      <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        className='flex-1 outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400' 
        type="text" 
        placeholder='Search items' 
      />
      <img src={searchicon} className='w-5 ml-3 cursor-pointer' alt="Search Icon" />   
    </div>
    <img 
      onClick={() => setShowSearch(false)} 
      className='w-5 ml-4 cursor-pointer hover:opacity-75 transition-opacity duration-200' 
      src={require('./../forever-assets/assets/frontend_assets/cross_icon.png')} 
      alt="Close Icon" 
    />
  </div>
</div>


    </>
  ):null
}

export default SearchBar
