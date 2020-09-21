import React from 'react';
import { withRouter } from 'react-router-dom';

import './header-item.styles.scss';

const HeaderItem = ({ title, history, linkUrl, match }) => (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <h1 className='item-title'>{title.toUpperCase()}</h1>
    </div>
);

export default withRouter(HeaderItem); 