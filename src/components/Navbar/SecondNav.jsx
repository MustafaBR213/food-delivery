import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import './SecondNav.css'
const SecondNav = () => {
    
  const [menu, setMenu] = useState("menu");
  
  const {getTotalCartAmount} = useContext(StoreContext)
  
  return (
    <div className='secondnavbar'>
        <ul className="navbar-menuu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>الرئيسية</Link>
            <Link to='/products' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>القائمة</Link>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>تطبيقنا</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>تواصل </a>
        </ul>
    </div>
  )
}

export default SecondNav