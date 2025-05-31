import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/appSlice';
import { toast } from 'react-toastify';
import ProductService from '../services/ProductService';
import type { ProductType } from '../types/Type';
import "../css/ProductDetail.css"
import { Button } from '@mui/material';
import { addProductToBasket } from '../redux/basketSlice';

function ProductDetail() {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState<ProductType | null>();
    const [count, setCount] = useState<number>(0);

    const getProductById = async (productId: number) => {
        try {
            dispatch(setLoading(true))
            const product: ProductType = await ProductService.getProductById(productId);
            setProduct(product);
        } catch (error) {
            toast.error("Ürün getirilirken hata oluştu" + error)
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    const addBasket = () => {
        if (product) {
            const payload: ProductType = {
                ...product,
                count: count
            }
            dispatch(addProductToBasket(payload));
            toast.success("Ürün sepete eklendi");
        }
    }

    useEffect(() => {
        getProductById(Number(productId));
    }, [])

    return (
        <Container maxWidth="lg">
            {product && <>
                <div className='detail-main'>
                    <div>
                        <img src={product.image} width={250} height={400} />
                    </div>
                    <div className='detail-right'>
                        <div className='detail-title'>{product.title}</div>
                        <div className='detail-description'>{product.description}</div>
                        <div className='detail-price'>{product.price}</div>

                        <div className='detail-quantity'>
                            <span onClick={() => setCount(count + 1)} className='quantity-plus'>+</span>
                            <span className='quantity-quantity'>{count}</span>
                            <span onClick={() => setCount(count - 1)} className='quantity-minus'>-</span>
                        </div>

                        <div>
                            <Button onClick={addBasket} color='info' variant='contained' size='small' sx={{ textTransform: 'none', marginTop: '20px' }}>Sepete Ekle</Button>
                        </div>
                    </div>
                </div>


            </>}
        </Container>
    )
}

export default ProductDetail