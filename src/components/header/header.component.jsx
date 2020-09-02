import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/signature.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <Link className='option' to='/food'>
          FOOD
        </Link>
        <Link className='option' to='/drink'>
          DRINK
        </Link>
        <Link className='option' to='/dessert'>
          DESSERT
        </Link>
      </div>
    </div>
);

export default Header;