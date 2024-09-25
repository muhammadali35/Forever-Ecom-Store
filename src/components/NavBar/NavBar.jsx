import React, { useContext, useState } from 'react';
import logo from './../../forever-assets/assets/frontend_assets/logo.png';
import { NavLink, Link } from 'react-router-dom';
import searchicon from './../../forever-assets/assets/frontend_assets/search_icon.png';
import profilicon from './../../forever-assets/assets/frontend_assets/profile_icon.png';
import cart from './../../forever-assets/assets/frontend_assets/cart_icon.png';
import menicon from './../../forever-assets/assets/frontend_assets/menu_icon.png';
import dropdown from './../../forever-assets/assets/frontend_assets/dropdown_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch,getCartCount}=useContext(ShopContext)

  return (
    <>
      <div className='flex items-center justify-between font-medium py-5'>
        <img src={logo} alt="logo" className='w-36' />

        {/* Icons and Menu Button for Small Screens */}
        <div className='flex sm:hidden items-center gap-4'>
          <img src={searchicon} alt="search" className='w-5 cursor-pointer' />
          <img src={profilicon} alt="profile" className='w-5 cursor-pointer' />
          <Link to="cart" className='relative'>
            <img src={cart} alt="cart" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
              10
            </p>
          </Link>
          <img onClick={() => setVisible(!visible)} src={menicon} alt="menu" className='w-5 cursor-pointer' />
        </div>

        {/* Navigation Links for Large Screens */}
        <ul className='hidden sm:flex gap-5 text-gray-700'>
          <NavLink to="home" className="flex flex-col items-center gap-1 ">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to="collection" className="flex flex-col items-center gap-1 ">
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to="about" className="flex flex-col items-center gap-1 ">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to="contact" className="flex flex-col items-center gap-1 ">
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          {/* <NavLink to="login" className="flex flex-col items-center gap-1 ">
            <p>LOGIN</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink> */}
          <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={searchicon} alt="search" className='w-5 cursor-pointer' />
               <NavLink to='/login'>
            <div className='group relative'>
              <img src={profilicon} alt="profile" className='w-5 cursor-pointer ' />
              <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700'>
                  <p className='cursor-pointer hover:text-black'>MY Profile</p>
                  <p className='cursor-pointer hover:text-black'>Orders</p>
                  <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
              </div>
            </div>
            </NavLink>
            <Link to="/cart" className='relative'>
              <img className='w-6' src={cart} alt="cart" />
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                {getCartCount()}
              </p>
            </Link>
          </div>
        </ul>

        {/* Sidebar Menu for Small Screens */}
        {visible && (
          <div className={`absolute top-0 left-0 bottom-0 w-full bg-white transition-all`}>
            <div className='flex flex-col text-gray-600 p-4'>
              <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                <img src={dropdown} alt="dropdown" />
                <p>Back</p>
              </div>
              <NavLink to="home" className="p-2">HOME</NavLink>
              <NavLink to="collection" className="p-2">COLLECTION</NavLink>
              <NavLink to="about" className="p-2">ABOUT US</NavLink>
              <NavLink to="contact" className="p-2">CONTACT</NavLink>
              <NavLink to="login" className="p-2">LOGIN</NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
