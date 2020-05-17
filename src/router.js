import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import { StyleSheet } from 'react-native';
import Players from './components/players'
import UpdatePlayer from './components/updatePlayer';
import NewPlayer from './components/newPlayer';
import PlayerDetails from './components/playerDetails';
const RouterComp = () => {
    return (

        <Router>

            <Scene key='root' hideNavBar={true}>

                <Scene key='auth'>

                    <Scene key='login'
                        component={LoginForm}
                        title='login'
                        hideNavBar={true} />

                </Scene>

                <Scene key='main' >

                    <Scene key='players'
                        component={Players}
                        leftTitle='MyPlayers'
                        title='Players'
                        titleStyle={{ paddingLeft: '30%', color: '#ddbb00' }}
                        onLeft={() => Actions.updateplayer()}
                        rightTitle='New Player'
                        onRight={() => Actions.newplayer()} />
                         
                    <Scene key='newplayer' 
                        component={NewPlayer}
                        title='New Player'
                        hideNavBar={true}
                         />

                    <Scene key='updateplayer'
                        component={UpdatePlayer}
                        title='Update Player' />
                    
                     <Scene key='playerdetails'
                        component={PlayerDetails}
                        title='Player Details' />

                </Scene>

            </Scene>

        </Router>

    )
}


const styles = StyleSheet.create({

    navbar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red', // changing navbar color
    }


})



export default RouterComp;