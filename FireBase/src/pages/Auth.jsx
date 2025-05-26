import React, { use, useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { auth } from "../Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            //    const credential =  GoogleAuthProvider.credentialFromResult(response);
            //    const token = credential.accessToken;
            //    const user = response.user;
            const user = response.user;
            if (user) {
                navigate("/");
                toast.success("Giriş yapıldı");
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const login = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            if (user) {
                navigate("/");
                toast.success("Giriş yapıldı");
            }
        } catch (error) {
            toast.error("Giriş yaılamadı" + error.message);
        }
    }

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                toast.success("Kullanıcı oluşturuldu");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='auth'>
            <h3 className='auth-header'>Giriş Yap / Kaydol</h3>
            <div className='input-div'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email adres' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Şifre' />
            </div>
            <div>
                <button onClick={loginWithGoogle} className='google-button'><FaGoogle className='google-icon' />Google ile giriş</button>
                <button onClick={login} className='login-button'>Giriş Yap</button>
                <button onClick={register} className='register-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth