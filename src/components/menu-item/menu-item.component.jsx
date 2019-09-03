import React from 'react';
import { withRouter } from 'react-router-dom'; // it is a higher order component, it is function which takes a component and returns a new modified component

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => ( //destructuring title from props, it is same as props.title, match will exactly match to the url
    <div className={`${size} menu-item`} 
         onClick={() => history.push(`${match.url}${linkUrl}`)}> {/*somematchedURL/linkURL */}
        <div className='background-image'  
        style={{
        backgroundImage: `url(${imageUrl })`
    }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
    </div>
)

export default withRouter(MenuItem); // withRouter will now return us MenuItem component which has access to history, match, params