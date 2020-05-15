import React, { Component } from 'react';
import logo from '../../logo.svg'
import './Card.css'

function Card({
    category,
    title,
    description,
    author,
    publicationDate,
    readTime,
}) {
    return(
        <div className='cards'>
            <div className='left'>
                <p>{category}</p>
                 <h2><strong>{title}</strong></h2>
                <p>{description}</p>
                <p>{author}</p>
                <p>{publicationDate}, {readTime}</p>
            </div>
            <div className='right'>
                <figure>
                    <img alt='card-image' src={'https://picsum.photos/seed/picsum/200/300'}/>
                </figure>
            </div>
        </div>
    )
}

export default Card;

//Card
//Category, Title, description, Author, PublicationDate. readTime, image