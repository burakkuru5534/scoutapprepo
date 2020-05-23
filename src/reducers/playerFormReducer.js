
import {NAME_CHANGED,
    TEAM_CHANGED,
    POSITION_CHANGED,
    VALUE_CHANGED,
    AGE_CHANGED,
     FOOT_CHANGED,
     NATIONAL_TEAM_CHANGED,
     GOAL_CHANGED,
     ASIST_CHANGED,
     CONTRACT_CHANGED,
     SCOUTING_CHANGED, 
     SEND_PLAYER,
      UPDATE_PLAYER,
      DELETE_PLAYER,
      } from '../actions'

const INITIAL_STATE={
    player:{},
    name:'',
    team:'',
    position:'',
    value:'',
    age:'',
    foot:'',
    nationalteam:'',
    goal:'',
    asist:'',
    contract:'',
    scoutingdate:'',

}


export default (state=INITIAL_STATE,action) =>{

    switch(action.type){
        
        case NAME_CHANGED:     
        return {...state,name:action.payload}

        case TEAM_CHANGED:     
        return {...state,team:action.payload}

        case POSITION_CHANGED:     
        return {...state,position:action.payload}

        case VALUE_CHANGED:     
        return {...state,value:action.payload}

        case AGE_CHANGED:     
        return {...state,age:action.payload}

        case FOOT_CHANGED:     
        return {...state,foot:action.payload}

        case NATIONAL_TEAM_CHANGED:     
        return {...state,nationalteam:action.payload}

        case GOAL_CHANGED:     
        return {...state,goal:action.payload}

        case ASIST_CHANGED:     
        return {...state,asist:action.payload}

        case CONTRACT_CHANGED:     
        return {...state,contract:action.payload}

        case SCOUTING_CHANGED:     
        return {...state,scoutingdate:action.payload}
       

        case SEND_PLAYER:
            return {...state, ...INITIAL_STATE}
        
        case UPDATE_PLAYER:
            return {...state, ...INITIAL_STATE}
        case DELETE_PLAYER:
            return {...state, ...INITIAL_STATE}


        default:
            return state;
    }
}