import React, {Component} from 'react';
import {Image, ImageBackground} from 'react-native';
import {TextArea,MyButton} from './common'
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {sendPlayer,changeName,changeTeam,changePosition,changeValue,changeAge,changeFoot,changeNationalTeam,changeGoal,changeAsist,changeContract,changeScouting} from '../actions';

class NewPlayer extends Component {


    onChangeName(name){
        this.props.changeName(name);
    }
    onChangeTeam(team){
        this.props.changeTeam(team);
    }
    onChangePosition(position){
        this.props.changePosition(position);
    }
    onChangeValue(value){
        this.props.changeValue(value);
    }
    onChangeAge(age){
        this.props.changeAge(age);
    }

    onChangeNationalTeam(nationalteam){
        this.props.changeNationalTeam(nationalteam);
    }
    onChangeGoal(goal){
        this.props.changeGoal(goal);
    }
    onChangeFoot(foot){
        this.props.changeFoot(foot);
    }
    onChangeAsist(asist){
        this.props.changeAsist(asist);
    }

    onChangeContract(contract){
        this.props.changeContract(contract);
    }
    onChangeScouting(scoutingdate){
        this.props.changeScouting(scoutingdate);
    }

    onsendPlayer(){
        this.props.sendPlayer(this.props.name,this.props.team,this.props.position,this.props.value,this.props.age,this.props.foot,this.props.nationalteam,this.props.goal,this.props.asist,this.props.contract,this.props.scoutingdate);
    }

    render() {

        return(
            <ImageBackground source={require('../images/background6.jpg')} style={{flex:1,paddingLeft:10,paddingRight:10}}>
                <ScrollView style={{marginBottom:50}}>
                    <Image style={{marginTop:100,alignSelf:'center'}} source={require('../images/player.jpg')}>

                    </Image>
                    <TextArea placeholder='Player Name:...'
                              placeholderTextColor='#fff'
                    onChangeText={this.onChangeName.bind(this)}/>

                    <TextArea placeholder='Player Team:...'
                              placeholderTextColor='#fff'
                              onChangeText={this.onChangeTeam.bind(this)}/>

                    <TextArea placeholder='Player Position:...'
                              placeholderTextColor='#fff'
                              onChangeText={this.onChangePosition.bind(this)}/>

                    <TextArea placeholder='Player Market Value:...'
                              placeholderTextColor='#fff'
                              onChangeText={this.onChangeValue.bind(this)}/>

                    <TextArea placeholder='Player Age:...'
                              placeholderTextColor='#fff'
                              onChangeText={this.onChangeAge.bind(this)}/>

                    <TextArea placeholder='Player Strong Foot:...'
                              placeholderTextColor='#fff'
                              onChangeText={this.onChangeFoot.bind(this)}/>

                     <TextArea placeholder='Player National Team:...'
                              placeholderTextColor='#fff'
                              onChangeText={this.onChangeNationalTeam.bind(this)}/>

                    <TextArea placeholder='Total Goals in this Season:...'
                              placeholderTextColor='#fff'
                              onChangeText={this.onChangeGoal.bind(this)}/>

                    <TextArea placeholder='Total Asists in this Season:...'
                              placeholderTextColor='#fff'
                              onChangeText={this.onChangeAsist.bind(this)}/>

                    <TextArea placeholder='Contract End Date:...'
                              placeholderTextColor='#fff'
                              onChangeText={this.onChangeContract.bind(this)}/>

                    
                    <TextArea placeholder='Scouting Start Date:...'
                              placeholderTextColor='#fff'
                              onChangeText={this.onChangeScouting.bind(this)}/>


                    <MyButton
                        spinner={false}
                        text='Add Player'
                        
                        onPress={this.onsendPlayer.bind(this)}
                    />
                </ScrollView>
            </ImageBackground>

        )
    }
}

const mapStateToProps = state => {
    const {name,team,position,value,age,foot,nationalteam,goal,asist,contract,scoutingdate} = state.playerForm;
    return{
        name,team,position,value,age,nationalteam,goal,foot,asist,contract,scoutingdate
    }

}

export default connect(mapStateToProps,{sendPlayer,changeName,changeTeam,changePosition,changeValue,changeAge,changeFoot,changeNationalTeam,changeGoal,changeAsist,changeContract,changeScouting})(NewPlayer);