import React from 'react';
import { Link } from "react-router-dom";

import lang from '../icons/lang.svg';
import vk from '../icons/VK.svg';
import telegram from '../icons/Telegram.svg';
import whatsapp from '../icons/Whatsapp.svg';

function Footer() {
  return (
    <footer className='footer'>
        <div className='container'>
            <div>
                <Link to="/">
                    <h1 className='h1'>QPICK</h1>
                </Link>
            </div>
            
            <div className='footer-menu'>
                <ul>
                    <li><a href="#">Избранное</a></li>
                    <li><a href="#">Корзина</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div className='footer-menu'>
                <ul>
                    <li><a href="#">Условия сервиса</a></li>
                </ul>
                <div className='language'>
                    <img src={lang} alt="" />
                    <p className='active'>Рус</p>
                    <p>Eng</p>
                </div>
            </div>
            <div className='messengers'>
                <img src={vk} alt="" />
                <img src={telegram} alt="" />
                <img src={whatsapp} alt="" />
            </div>
        </div>
    </footer>
  );
}

export default Footer;