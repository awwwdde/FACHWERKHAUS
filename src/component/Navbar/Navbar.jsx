import React, { useState } from "react"
import "./navbar.scss"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>FACHWERKHAUS</h3>

        <ul className={Mobile ? "nav-links-mobile nav-links-mobile-active "  : "nav-links-mobile" } onClick={() => setMobile(false)}>
          <Link to='/' className='link'>
            <li>Главная</li>
          </Link>          
          <Link to='/projects' className='link'>
            <li>Проекты</li>
          </Link>
          <Link to='/materials' className='link'>
            <li>Материалы</li>
          </Link>
          <Link to='/about' className='link'>
            <li>О нас</li>
          </Link>
          <Link to='/contact' className='link'>
            <li>Контакты</li>
          </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
