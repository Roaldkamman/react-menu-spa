import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/menu/menu.selector';
import MenuItem from '../../components/menu-item/menu-item.component';

import './menucollection.styles.scss';

const MenuCollectionPage = ({ collection }) => {
  const { items } = collection;
  return (
    <div className='collection-page'>
      <div className='items'>
        {items.map(item => (
          <MenuItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(MenuCollectionPage);