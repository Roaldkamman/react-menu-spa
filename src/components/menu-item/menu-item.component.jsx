import React from 'react'; 

import './menu-item.styles.scss';

const MenuItem = ({ item }) => {
  const { name, price, imageUrl, description } = item;
  return (
    <div className='collection-item'>
      <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='description'>{description}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
)};

export default MenuItem;