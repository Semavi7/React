import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { ProductType, UserType } from '../types/Type';
import { setCurrentUser, setLoading, setProducts } from '../redux/appSlice';
import ProductService from '../services/ProductService';
import { toast } from 'react-toastify';
import type { RootState } from '../redux/store';
import ProductCart from '../components/ProductCart';
import "../css/HomePage.css"

function HomePage() {

    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.app);

    const getAllProduct = async () => {
        try {
            dispatch(setLoading(true))
            const response: ProductType[] = await ProductService.getAllProduct();
            if (response) {
                dispatch(setProducts(response));
            }
        } catch (error) {
            toast.error("Ürünler getirilirken hata oluştu: " + error)
        } finally {
            dispatch(setLoading(false))
        }
    }

    useEffect(() => {
        getAllProduct();
    }, [])

    useEffect(() => {
        const result = localStorage.getItem("currentUser")
        if (result) {
            const currentUser: UserType = JSON.parse(result) as UserType;
            dispatch(setCurrentUser(currentUser));
        }
    }, [])

    return (
        <div className='product'>
            {
                products && products.map((product: ProductType, index: number) => (
                    <ProductCart key={index} product={product} />
                ))
            }
        </div>
    )
}

export default HomePage