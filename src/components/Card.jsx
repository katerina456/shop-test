import React from 'react';

import star from '../icons/star.svg';

function Card(props) {
  let product = props.product;

  return (
    <div className='card'>
        <div>
            <img src={product.img} alt="" />
        </div>

        <div className='card-info'>
            <div>
                <p>{product.title}</p>
                <div className='card-star'>
                    <img src={star} alt="" />
                    <p>{product.rate}</p>
                </div>
            </div>
            <div>
                <p className='card-price'>{product.price} ₽</p>
                {product.oldPrice && <p className='card-price-old'>{product.oldPrice} ₽</p>}
                <p className='card-buy' onClick={() => {props.handleClick(product)} }>Купить</p>
            </div>
        </div>   
    </div>
  );
}

export default Card;