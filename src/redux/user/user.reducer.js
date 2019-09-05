import { UserActionTypes } from './user.types';
//it will hold the state of the user
//a reducer recieves previous/initial state and an action

//it will get state from redux store
//since initially when we load the app there will be no state in redux store as well, so we are setting the initial state here
const INITIAL_STATE = {
    currentUser: null
}

//whenever state is undefined then use INITIAL_STATE, even null is a value
//note every single reducer gets every action fired even the actions are not related to this user, thats why there is default, if none of the action type matches the actions in reducer then we just return the state
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;