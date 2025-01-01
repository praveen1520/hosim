import  { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const Navbar = () => {
    const navigate=useNavigate()
    const {token,setToken,userData}=useContext(AppContext)
    const [showMenu,setShowmenu]=useState(false)
    const logout=()=>{
        setToken(false)
        localStorage.removeItem('token')
    }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img src={assets.logo} alt="Logo" className='w-44 cursor-pointer' onClick={()=>navigate("/")} />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/">
            <li className='py-1'>
                Home
            </li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="/doctors">
            <li className='py-1'>
                AllDoctors
            </li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="/about">
            <li className='py-1'>
                About
            </li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="/contact">
            <li className='py-1'>
                Contact
            </li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        
      </ul>
      <div className='flex items-center gap-4'>
        {
            token && userData ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img src={userData.image} alt="profilepic" className="w-8 rounded-full" />
                <img src={assets.dropdown_icon} alt="" className="w-2.5" />
                <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                <p className='hover:text-black cursor-pointer' onClick={()=>navigate("my-profile")}>My Profile</p>
                                <p className='hover:text-black cursor-pointer' onClick={()=>navigate("my-appointments")}>My Appointments</p>
                                <p onClick={logout} className='hover:text-black cursor-pointer' >Logout</p>
                            </div>
                </div>
            </div>:<button onClick={()=>navigate("/login")}className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">
            Create Account
            </button>
        }
        <img src={assets.menu_icon} alt="" className="w-6 md:hidden" onClick={()=>setShowmenu(true)}/>
        <div className={`${showMenu?"fixed w-full":"h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className="flex items-center justify-between px-5 py-6">
                <img src={assets.logo} alt="" className="w-36" />
                <img src={assets.cross_icon} alt="" className="w-7"  onClick={()=>setShowmenu(false)}/>
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                <NavLink to="/" onClick={()=>setShowmenu(false)} >
                    <p className="px-4 py-2 rounded inline-block">Home</p>
                    
                </NavLink>
                <NavLink to="/doctors" onClick={()=>setShowmenu(false)}>
                   <p className="px-4 py-2 rounded inline-block" >ALL DOCTORS</p>
                </NavLink>
                <NavLink to="/about"  onClick={()=>setShowmenu(false)}>
                   <p className="px-4 py-2 rounded inline-block">About</p>
                </NavLink>
                <NavLink to="/contact"  onClick={()=>setShowmenu(false)}>
                   <p className="px-4 py-2 rounded inline-block">Contact Us</p>
                </NavLink>
            </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
