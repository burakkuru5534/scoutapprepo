import {combineReducers} from 'redux';
import authReducers from './authReducer';
import playerFormReducer from './playerFormReducer';
import playerListReducer from './playerListReducer'

export default combineReducers({
    auth:authReducers,
    playerForm: playerFormReducer,
    playerList: playerListReducer
})