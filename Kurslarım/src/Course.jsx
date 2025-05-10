import React from 'react'
import './css/Course.css'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>
            <img src={image} width={210} height={110} />
            <h5 className='course-title'>{title}</h5>
            <p className='corse-desc'>{description}</p>
            <h3 className='course-price'>{price} ₺</h3>
            <div className='course-link'><a style={{ textDecoration: 'none' }} href={link}>satın almak için</a></div>
        </div>
    )
}

export default Course