
import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import { MdLightMode , MdDarkMode} from "react-icons/md";
import { useState } from 'react';


let rightNavCss =" py-2 px-4 my-2 me-2 mb-2 text-sm  focus:outline-none bg-gray-800 font-bold  rounded-lg border-2 border-gray-800 hover:border-blue-700  hover:bg-gray-100 hover:text-blue-700 flex "
const Navbar = () => {
  const [colorMode, setcolorMode] = useState(false)
  // const ref = useRef()
  const toggleColorTheme = () => {
    setcolorMode(!colorMode)
    if(colorMode){

    }
  }
  
  return (
    <div className='h-18 text-2xl w-full bg-gray-900 z-50 fixed'>
        
    <div className='flex h-full justify-between items-center  px-14 '>
      
        <NavLink className=" hover:scale-110 duration-200 font-bold text-3xl bg-gradient-to-r from-[#00aaff] to-[#fff] inline-block text-transparent bg-clip-text"  to="/" >Philipkart </NavLink >
        <div className=' flex text-white'>
        <NavLink className={(e)=>{return e.isActive?(rightNavCss +" btnFocused "):rightNavCss}} to={"/create"} > < IoMdAdd className=' font-black text-xl'/></NavLink >
        <button onClick={toggleColorTheme} className={rightNavCss + " font-black text-xl"}>
          {colorMode?<MdLightMode/>:<MdDarkMode />}
        </button>
        </div>
    </div>
    </div>
  )
}

export default Navbar
