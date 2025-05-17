import React from 'react'
import "../css/Product.css"
import { useNavigate } from 'react-router-dom'

function Product({ product }) {
    const { id, image, title, description, price } = product;
    const navigate = useNavigate();
    return (
        <div className='card'>
            <img className='images' src={image} alt="" />
            <div>
                <p className='title'>{title}</p>
                <h3 className='price'>{price}₺</h3>
            </div>

            <div className='flex-row'>
                <button onClick={() => navigate("/product-detail/" + id)} className='detail-button'>Detaya Git</button>
            </div>
        </div>
    )
}

export default Product