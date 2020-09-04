import React from 'react';
import { withRouter } from 'react-router-dom';

import './interface-item.styles.scss';

const InterfaceItem = ({ title, imageUrl, history, linkUrl, match }) => (
    <div className='menu-item' onClick={() => history.push(`${match.url}${linkUrl}`)}>

      <div 
      className='background-image' 
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      />

      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </div>
    </div>
);

export default withRouter(InterfaceItem); 