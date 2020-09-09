import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import menuReducer from './menu/menu.reducer';

const rootReducer = combineReducers({
    directory: directoryReducer,
    menu: menuReducer
});

export default rootReducer;