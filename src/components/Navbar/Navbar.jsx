import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
  
  
  const [menu, setMenu] = useState("menu");
  
  const {getTotalCartAmount} = useContext(StoreContext)
  
  
    return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>الرئيسية</Link>
            <Link to='/products' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>القائمة</Link>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>تطبيقنا</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>تواصل معنا</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div src="" alt="" className="navbar-search-icon" >
              <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>تسجيل الدخول</button>
        </div>
    </div>
  )
}

export default Navbar







// import React, { useContext, useState } from 'react'
// import './Navbar.css'
// import {assets} from '../../assets/assets'
// import { Link } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';
// import { IoClose, IoMenu } from "react-icons/io5";
// import { NavLink } from "react-router-dom";

// const Navbar = ({setShowLogin}) => {
//   const [menu, setMenu] = useState("menu");
  
//   const {getTotalCartAmount} = useContext(StoreContext)
  
  
//     return (
//       <header className="headerr">
//       <nav className="nav container">
//         <NavLink to="/" className="nav__logo">
//           Navigation Bar
//         </NavLink>
 
//         <div
//           className={"nav__menu"}
//           id="nav-menu"
//         >
//           <ul className="nav__list">
//             <li className="nav__item">
//               <NavLink to="/" className="nav__link">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink to="/news" className="nav__link">
//                 News
//               </NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink
//                 to="/about-us"
//                 className="nav__link"
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink
//                 to="/favorite"
//                 className="nav__link"
//               >
//                 Favorite
//               </NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink
//                 to="/location"
//                 className="nav__link"
//               >
//                 Location
//               </NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink to="/get-started" className="nav__link nav__cta">
//                 Get Started
//               </NavLink>
//             </li>
//           </ul>
//           <div className="nav__close" id="nav-close">
//             <IoClose />
//           </div>
//         </div>
 
//         <div className="nav__toggle" id="nav-toggle">
//           <IoMenu />
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar