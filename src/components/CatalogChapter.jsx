import React from 'react';

import Card from './Card';

function CatalogChapter(props) {
  let products = props.products;

  return (
    <div className='catalog-chapter'>
        <h2 className='h2'>{props.title}</h2>

        <div className='catalog-cards'>
          {products.map((item, index) => {
            return (
              <Card key={item.id} product={item} 
                    handleClick={props.handleClick} />
              )}
          )}
        </div>
    </div>
  );
}

export default CatalogChapter;