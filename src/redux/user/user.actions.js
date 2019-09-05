import { UserActionTypes } from './user.types';
//Actions are just functions which return objects, the only thing is that each object is in correct format that the action is expected to be
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});