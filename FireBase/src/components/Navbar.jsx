import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from "../Firebase"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Navbar() {

    const navigate = useNavigate();

    const logout = async () => {
        await signOut(auth),
            navigate("/auth"),
            toast.success("Çıkışyapıldı");
    }

    return (
        <div className='navbar'>
            <div className='navbar-left'>FİREBASE</div>
            <div onClick={logout} className='navbar-right'>ÇıkışYap</div>
        </div>
    )
}

export default Navbar