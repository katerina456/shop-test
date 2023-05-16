import React from 'react';
import { Link } from "react-router-dom";

import UserButton from './UserButton';

import heart from '../icons/heart.svg';
import basket from '../icons/basket.svg';

function Header(props) {
  return (
    <header className='header'>
        <div className='container'>
          <Link to="/shop-test/">
            <h1 className='h1'>QPICK</h1>
          </Link>
          
          <div className='user-buttons'>
            <UserButton img={heart} count={0} />

            <Link to="/shop-test/basket">
              <UserButton img={basket} count={props.count} />
            </Link>
          </div>
        </div>
    </header>
  );
}

export default Header;