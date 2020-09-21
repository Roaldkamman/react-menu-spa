import React from 'react';  
import { Route } from 'react-router-dom';

import MenuCollectionPage from '../menucollection/menucollection.component';

const MenuPage = ({ match }) => (
  <div>
    <Route path={`${match.path}/:collectionId`} component={MenuCollectionPage}/>
  </div>
);

export default MenuPage;