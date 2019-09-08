import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.conponent'
import CollectionPage from '../collection/collection.component';

import CollectionPreview from  '../../components/collection-preview/collection-preview.component';
import collectionItemComponent from '../../components/collection-item/collection-item.component';

const ShopPage = ({ match }) => ( //react router from app gives history,match to components
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}></Route> {/*match.path is the current path */}
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
    </div>
);


export default ShopPage;