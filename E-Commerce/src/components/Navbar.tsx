import React from 'react';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MagaraIcon from '../images/magara.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct, setCurrentUser, setProducts } from '../redux/appSlice';
import { toast } from 'react-toastify';
import ProductService from '../services/ProductService';
import type { ProductType } from '../types/Type';
import { FaShoppingBasket } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import type { RootState } from '../redux/store';

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { basket } = useSelector((state: RootState) => state.basket);

    const logout = () => {
        localStorage.removeItem("currentUser");
        dispatch(setCurrentUser(null));
        navigate("/login");
        toast.success("Çıkış yapıldı");

    }

    const handleFilter = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if (e.target.value) {
                dispatch(filterProduct(e.target.value));
            }
            else {
                const products: ProductType[] = await ProductService.getAllProduct();
                dispatch(setProducts(products));
            }
        } catch (error) {
            toast.error("Filtreleme yaparken hata oluştu : " + error)
        }
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: '#454242' }}>
            <Toolbar>
                <IconButton
                    onClick={() => navigate('/')}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <img src={MagaraIcon} width={50} height={50} />
                </IconButton>
                <Typography onClick={() => navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
                    MağaraYol
                </Typography>
                <div className='navbar-right'>
                    <TextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilter(e)}
                        sx={{ width: '300px', marginBottom: '25px', marginRight: '20px' }}
                        id="searchInput"
                        placeholder='Bir Şey Ara...'
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                    </InputAdornment>
                                ),
                                style: {
                                    color: 'lightgrey',
                                    borderBottom: '1px solid lightgrey'
                                }
                            },
                        }}
                        variant="standard"
                    />
                    <Badge badgeContent={basket.length} color="warning" sx={{ marginRight: '15px' }}>
                        <FaShoppingBasket style={{ fontSize: '18px', margin: '0px 4px', cursor: 'pointer' }} />
                    </Badge>

                    <Button onClick={logout} color="inherit">Çıkış Yap</Button>
                </div>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar