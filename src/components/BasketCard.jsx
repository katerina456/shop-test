import React from 'react';

import minus from '../icons/minus.svg';
import plus from '../icons/plus.svg';
import del from '../icons/del.svg'

function BasketCard(props) {
  let product = props.product;

  const [quantity, setQuantity] = React.useState(1)

  function increment() {
    let num = quantity + 1
    setQuantity(num)

    props.apdate(product.id, num)
    props.setFlag(prev => !prev)
  }

  function decrement() {
    let num = quantity -1 < 1 ? 1 : quantity -1;
    setQuantity(num)  

    props.apdate(product.id, num)
    props.setFlag(prev => !prev)
  }

  return (
    <div className='basket-card'>
        <div className='basket-card-info'>
            <div className='basket-card-foto'>
                <img src={product.img} alt="" />

                <div className='counter'>
                    <div className='ellipse' onClick={decrement}>
                        <img src={minus} alt="" />
                    </div>
                    <p>{quantity}</p>
                    <div className='ellipse' onClick={increment}>
                        <img src={plus} alt="" />
                    </div>
                </div>
            </div>

            <div className='basket-card-title'>
                <p>{product.title}</p>
                <p className='basket-card-price'>{product.price} ₽</p>
            </div>
        </div>
        
        <div className='basket-card-buy'>
            <div onClick={() => props.handleClick(product)}>
                <img src={del} alt="" />
            </div>
            <p className='card-price'>{product.price*product.quantity} ₽</p>
        </div> 
    </div>
  );
}

export default BasketCard;