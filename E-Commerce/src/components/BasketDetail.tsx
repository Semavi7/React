import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { setDrawer, updateBalance } from '../redux/appSlice';
import type { ProductType, UserType } from '../types/Type';
import '../css/Basket.css'
import { Button } from '@mui/material';
import { calculateBasket, removeProductFromBasket, setBasket } from '../redux/basketSlice';
import { toast } from 'react-toastify';

function BasketDetail() {
    const { drawer, currentUser } = useSelector((state: RootState) => state.app);
    const { basket, totalAmount } = useSelector((state: RootState) => state.basket);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateBasket());
    }, [basket])

    const closeDrawer = () => {
        dispatch(setDrawer(false));
    }

    const removeProduct = (productId: number) => {
        dispatch(removeProductFromBasket(productId))
    }

    const buy = () => {
        if (currentUser?.balance && currentUser.balance < totalAmount) {
            toast.warn("Bakiyeniz yeterli değildir")
            return;
        }
        if (currentUser?.balance) {
            const remingTotal = currentUser.balance - totalAmount;
            const payload: UserType = {
                ...currentUser,
                balance: remingTotal
            }
            dispatch(updateBalance(payload));
            dispatch(setBasket([]));
            localStorage.removeItem("basket");
            toast.success("Ürünler satın alınmıştır");
        }
    }

    return (
        <Drawer open={drawer} anchor='right' sx={{ width: '200px' }} onClose={closeDrawer} >
            {
                basket && basket.map((product: ProductType) => (
                    <div className='basket-main'>
                        <div className='basket-img'><img src={product.image} width={60} height={60} /></div>
                        <div className='basket-right'>
                            <div className='basket-title'>{product.title.substring(0, 30)}...</div>
                            <div className='basket-description'>{product.description.substring(0, 40)}...</div>
                        </div>
                        <div className='basket-count'>{product.count}</div>
                        <div className='product-price'>{product.price}</div>
                        <div><Button onClick={() => removeProduct(product.id)} size='small' sx={{ textTransform: 'none', height: '25px' }} variant='outlined'>Çıkar</Button></div>
                    </div>
                ))
            }

            <div className='basket-totalmain'>
                <div className='basket-total'>Toplam Tutar: {totalAmount}₺</div>
                <div><Button onClick={buy} sx={{ textTransform: 'none', height: '25px', marginTop: '20px' }} size='small' variant='contained' color='success'>Satın Al</Button></div>
            </div>
        </Drawer>
    )
}

export default BasketDetail