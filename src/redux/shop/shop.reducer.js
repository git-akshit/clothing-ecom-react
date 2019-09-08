import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA //collections point to SHOP_DATA array
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: //it will only return state
            return state;
    }
};

export default shopReducer;