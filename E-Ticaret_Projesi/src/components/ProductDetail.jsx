import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "../css/ProductDetail.css"
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';

function ProductDetail() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)

    const { image, title, description, price } = selectedProduct;

    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }

        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }

    return (
        <div className='detail-container'>
            <div className='image-container'>
                <img className='image' src={image} />
            </div>
            <div>
                <h1 className='title'>{title}</h1>
                <h3 className='description'>{description}</h3>
                <h1 className='price1'>{price}</h1>

                <div className='circle-container'>
                    <CiCirclePlus onClick={increment} className='plus' /><span className='count'>{count}</span>
                    <CiCircleMinus onClick={decrement} className='minus' />
                </div>

                <div>
                    <button onClick={addBasket} className='basket-button'>Sepete Ekle</button>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail