import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import { ReactComponent as Logo } from '../../assets/signature.svg';

import HeaderItem from '../header-item/header-item.component';

import './header.styles.scss';

const Header = ({ sections }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <div className='header-nav'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <HeaderItem key={id} {...otherSectionProps}/>
        ))}
        </div>
      </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});


export default connect(mapStateToProps)(Header);