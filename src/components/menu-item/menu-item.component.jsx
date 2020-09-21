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
        <h3 className='name'>{name}</h3>
        <p className='description'>{description}</p>
        <h4 className='price'>${price}</h4>
      </div>
    </div>
)};

export default MenuItem;