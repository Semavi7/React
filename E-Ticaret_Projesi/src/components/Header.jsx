import React, { useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci"
import { CiLight } from "react-icons/ci"
import { FaMoon } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from '../redux/slices/basketSlice'

function Header() {

    const [theme, setTheme] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { products } = useSelector((store) => store.basket);

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
            <div className='flex-row' onClick={() => navigate('/')}>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>BURÇHAN AŞ.</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Bir Şeyler Ara...' />
                <div>
                    {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="primary">
                        <CiShoppingBasket className='icon' />
                    </Badge>
                </div>

            </div>
        </div>
    )
}

export default Header