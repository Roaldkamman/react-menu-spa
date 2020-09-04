import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectMenu = state => state.menu;

export const selectCollections = createSelector(
    [selectMenu],
    menu => menu.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
