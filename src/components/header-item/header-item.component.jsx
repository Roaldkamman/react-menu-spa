import React from 'react';
import { withRouter } from 'react-router-dom';

const HeaderItem = ({ title, history, linkUrl, match }) => (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </div>
    </div>
);

export default withRouter(HeaderItem); 