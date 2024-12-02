import headerLogo from '../assets/images/header-logo.svg'
import { hamburger, close } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react';

const Nav = () => {

  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <header className='padding-x py-8 fixed z-10 w-full'>
        <nav className="max-container flex justify-between items-center">
            <a href='/'>
                <img className='m-0 w-[129px] h-[29px]' src={headerLogo} alt="logo" width={129} height={29} />
            </a>
            

            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {
                    navLinks && navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {link.label}
                            </a>
                        </li>
                    ))
                }
            </ul>

            <div className="hidden max-lg:block">
                <img src={showHamburger ? close : hamburger} alt="hamburger icon" width={25} height={25} className='cursor-pointer' 
                onClick={() => setShowHamburger(!showHamburger)} />
            
                {
                    showHamburger && (
                        <ul className='menu-dropdown'>
                            {
                                navLinks && navLinks.map((link) => (
                                    <li key={link.label} className='menu-items'>
                                        <a href={link.href}
                                        className='font-montserrat leading-normal text-md text-slate-gray'>
                                            {link.label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
                
            </div>
        </nav>
    </header>
  )
}

export default Nav