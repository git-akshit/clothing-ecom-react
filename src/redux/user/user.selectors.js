import {createSelector} from 'reselect';

const selectUser = state => state.user; //input selector

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser //2nd argument is the return of the above input selector
)