import firebase from '../firebase'
import {Actions} from 'react-native-router-flux';

export const NAME_CHANGED='name_changed';
export const TEAM_CHANGED='team_changed';
export const POSITION_CHANGED='position_changed';
export const VALUE_CHANGED='value_changed';
export const AGE_CHANGED='age_changed';
export const FOOT_CHANGED='foot_changed';
export const NATIONAL_TEAM_CHANGED='national_team_changed';
export const GOAL_CHANGED='goal_changed';
export const ASIST_CHANGED='asist_changed';
export const CONTRACT_CHANGED='contract_changed';
export const SCOUTING_CHANGED='scouting_changed';

export const SEND_PLAYER='send_player';
export const FETCH_PLAYER='fetch_player';

export const UPDATE_PLAYER='update_player';
export const DELETE_PLAYER='delete_player';

const REF_DATABASE = '/players';


export const changeName = (name) =>{
    return {
        type:NAME_CHANGED,
        payload: name
    }
}


export const changeTeam = (team) =>{
    return {
        type:TEAM_CHANGED,
        payload: team
    }
}

export const changePosition = (position) =>{
    return {
        type:POSITION_CHANGED,
        payload: position
    }
}

export const changeValue = (value) =>{
    return {
        type:VALUE_CHANGED,
        payload: value
    }
}

export const changeAge = (age) =>{
    return {
        type:AGE_CHANGED,
        payload: age
    }
}

export const changeFoot = (foot) =>{
    return {
        type:FOOT_CHANGED,
        payload: foot
    }
}

export const changeNationalTeam = (nationalteam) =>{
    return {
        type:NATIONAL_TEAM_CHANGED,
        payload: nationalteam
    }
}
export const changeGoal = (goal) =>{
    return {
        type:GOAL_CHANGED,
        payload: goal
    }
}

export const changeAsist = (asist) =>{
    return {
        type:ASIST_CHANGED,
        payload: asist
    }
}

export const changeContract = (contract) =>{
    return {
        type:CONTRACT_CHANGED,
        payload: contract
    }
}

export const changeScouting = (scoutingdate) =>{
    return {
        type:SCOUTING_CHANGED,
        payload: scoutingdate
    }
}


export const sendPlayer = (name,team,position,value,age,foot,nationalteam,goal,asist,contract,scoutingdate) =>{

    //TODO
    const currentUser = firebase.auth().currentUser;
    const email = currentUser.email;
    return(dispatch)=>{
        firebase.database().ref(REF_DATABASE)
        .push({email,name,team,position,value,age,foot,nationalteam,goal,asist,contract,scoutingdate})
        .then(()=>{
            Actions.players();

            dispatch({
                type:SEND_PLAYER
            })
        })
    }

}

export const fetchPlayer = () =>{

    return(dispatch) =>{
        firebase.database().ref(REF_DATABASE)
        .on('value',(snapshot)=>{
            console.log(snapshot.val())
            dispatch({
                type:FETCH_PLAYER,
                payload:snapshot.val()
            })
        })
    }
}

export const updatePlayer = ({age,asist,contract,foot,goal,name,nationalteam,position,scoutingdate,team,value,uid,email}) => {
    return dispatch => {
        firebase.database().ref(REF_DATABASE+'/'+uid)
        .set({
            age,asist,contract,foot,goal,name,nationalteam,position,scoutingdate,team,value,email
        })
        .then(()=>{
            Actions.main();
            dispatch({
                type:UPDATE_PLAYER
            })
        })

    }

}

export const deletePlayer = (uid) =>{

    return dispatch => {
        firebase.database().ref(REF_DATABASE+'/'+uid)
        .remove()
        .then(()=>{
            Actions.main();
            dispatch({
                type:DELETE_PLAYER
            })

        })
    }
}