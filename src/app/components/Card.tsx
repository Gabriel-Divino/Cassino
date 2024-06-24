import React from 'react';
import "./style.css"
import Link from 'next/link';

interface CardProps {
    image: string;
    title: string;
    slug:string;
}

const Card: React.FC<CardProps> = ({ image, title,slug }) => {
    return (
        <div className="card w-60 bg-base-100 shadow-xl"  data-theme="dark" id='card'>
            <figure><img src={image} alt={title} id='image' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions">
                    <Link className="btn  btn-outline btn-accent" href={`/game/${slug}`}>Jogar</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
