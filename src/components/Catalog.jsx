import React from 'react';

import CatalogChapter from './CatalogChapter';

function Catalog(props) {
  return (
    <main className='catalog'>
        <div className='container'>
            <CatalogChapter title='Наушники' handleClick={props.handleClick}
                            products={props.products.headphones} />

            <CatalogChapter title='Беспроводные наушники' handleClick={props.handleClick}
                            products={props.products.wireless_headphones} />
        </div>       
    </main>
  );
}

export default Catalog;