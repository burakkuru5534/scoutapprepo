import {
    FETCH_PLAYER
} from '../actions';

const INITIAL_STATE = {
    
}

export default (state=INITIAL_STATE,action) =>{
    switch(action.type){

        case FETCH_PLAYER:
            return action.payload;
        default:
            return state;
    }
}