import React from 'react';

import BasketCard from './BasketCard';

function Basket(props) {
  let products = props.products;

  const[flag, setFlag] = React.useState(true);

  const basketSumm = React.useMemo(() => {
    let summ = 0;
    products.forEach(item => {
      summ += item.price * item.quantity
    })

    return summ.toFixed(2);
  }, [products, flag]);


  return (
    <main className='basket'>
        <div className='container'>
            <h2 className='h2'>Корзина</h2>
            <div className='basket-products'>
                <div className='choosen-products'>
                    {products.map((item, index) => {
                        return (
                        <BasketCard key={item.id} product={item} apdate={props.apdate}
                                handleClick={props.handleClick} setFlag={setFlag} />
                        )}
                    )}
                </div>
                
                <div className='form'>
                    <div className='summa'>
                        <p>ИТОГО</p>
                        <p>₽ {basketSumm}</p>
                    </div>
                    <button className='button'>
                        <p>Перейти к оформлению</p>
                    </button>
                </div>
            </div>
            
        </div>
             
    </main>
  );
}

export default Basket;