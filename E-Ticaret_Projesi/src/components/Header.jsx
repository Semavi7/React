import React, { useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci"
import { CiLight } from "react-icons/ci"
import { FaMoon } from "react-icons/fa"

function Header() {

    const [theme, setTheme] = useState(false);

    const changeTheme = () => {
        const root = document.getElementById('root');
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "rgb(52, 52, 52)";
            root.style.color = "white";
        } else {
            root.style.backgroundColor = "white";
            root.style.color = "rgb(52, 52, 52)";
        }
    }

    return (
        <div className='flex-row-space-between'>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>BURÇHAN AŞ.</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Bir Şeyler Ara...' />
                <div>
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}


                    <CiShoppingBasket className='icon' />
                </div>

            </div>
        </div>
    )
}

export default Header