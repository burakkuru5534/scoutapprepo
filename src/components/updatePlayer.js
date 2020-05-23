import React, {Component} from 'react';
import {StyleSheet,View,Text, Alert} from 'react-native';
import {TextArea,MyButton} from './common';
import { connect } from 'react-redux';
import {deletePlayer,updatePlayer,changeName,changeTeam,changePosition,changeValue,changeAge,changeFoot,changeNationalTeam,changeGoal,changeAsist,changeContract,changeScouting} from '../actions';
import { ScrollView } from 'react-native-gesture-handler';

class UpdatePlayer extends Component {

    componentDidMount(){
      
        console.log('before --this.props.player.email--: '+email);

        const {email,name,team,position,value,age,nationalteam,goal,asist,foot,contract,scoutingdate} = this.props.player;
        console.log('after--this.props.player.email--: '+email);
        this.props.changeName(name);
        this.props.changeTeam(team);
        this.props.changePosition(position);
        this.props.changeValue(value);
        this.props.changeAge(age);
        this.props.changeNationalTeam(nationalteam);
        this.props.changeGoal(goal);
        this.props.changeAsist(asist);
        this.props.changeFoot(foot);
        this.props.changeContract(contract);
        this.props.changeScouting(scoutingdate);

        this.checkEmail = this.checkEmail.bind(this);


    }

        onchangeEmail(email){
            this.props.changeEmail(email);
        }

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


        checkEmail(callback){
            const {email} = this.props.user; 
            const playerEmail=this.props.player.email;

            
            if(playerEmail===email){
                callback();
            }else{
                Alert.alert(
                    'You can not update or delete this player,',
                    'This player not belongs to you',
                    [
                        {text: 'OK',onPress:()=>console.log('you pressed ok')}
                       
                    ]
                )

            }

        }

        updatePlayer(){
            this.checkEmail(() => {
               
               console.log('player.email:'+this.props.player.email);
               console.log('player.uid:'+this.props.player.uid);

                    const playerObj={...this.props.player,
                        age:this.props.playerForm.age,
                        asist:this.props.playerForm.asist,
                        contract:this.props.playerForm.contract,
                        foot:this.props.playerForm.foot,
                        goal:this.props.playerForm.goal,
                        name:this.props.playerForm.name,
                        nationalteam:this.props.playerForm.nationalteam,
                        position:this.props.playerForm.position,
                        scoutingdate:this.props.playerForm.scoutingdate,
                        team:this.props.playerForm.team,
                        value:this.props.playerForm.value}                                
    
                    this.props.updatePlayer(playerObj);              
            })                          
        }

        deletePlayer(){

            this.checkEmail(()=>{
                Alert.alert(
                    'Are you sure?',
                    'This player will be deleted after you clicked OK.',
                    [
                        {text: 'OK', onPress:()=>{
                            const {uid}=this.props.player;
                            this.props.deletePlayer(uid);
                        }},
                        {text: 'Cancel', onPress:()=>console.log('canceled')}
                    ]
                )

            })
       
                
        }

        render(){
            const {playerForm} = this.props;

            return(
                <ScrollView style={styles.updateContainer}>

                    <TextArea placeholder='Player Name'
                              value={playerForm.name}
                              onChangeText={this.onChangeName.bind(this)}
                              color='#E87B79'
                              />
                    <TextArea placeholder='Player Team'
                              value={playerForm.team}
                              onChangeText={this.onChangeTeam.bind(this)}
                              color='#E87B79'
                              />
                     <TextArea placeholder='Player Position'
                              value={playerForm.position}
                              onChangeText={this.onChangePosition.bind(this)}
                              color='#E87B79'
                              />
                     <TextArea placeholder='Player Value'
                              value={playerForm.value}
                              onChangeText={this.onChangeValue.bind(this)}
                              color='#E87B79'
                              />
                     <TextArea placeholder='Player Age'
                              value={playerForm.age}
                              onChangeText={this.onChangeAge.bind(this)}
                              color='#E87B79'
                              />
                     <TextArea placeholder='Player Foot'
                              value={playerForm.foot}
                              onChangeText={this.onChangeFoot.bind(this)}
                              color='#E87B79'
                              />
                     <TextArea placeholder='Player National Team'
                              value={playerForm.nationalteam}
                              onChangeText={this.onChangeNationalTeam.bind(this)}
                              color='#E87B79'
                              />
                     <TextArea placeholder='Goals in this season'
                              value={playerForm.goal}
                              onChangeText={this.onChangeGoal.bind(this)}
                              color='#E87B79'
                              />
                     <TextArea placeholder='Asists in this season'
                              value={playerForm.asist}
                              onChangeText={this.onChangeAsist.bind(this)}
                              color='#E87B79'
                              />
                     <TextArea placeholder='End date of Contract'
                              value={playerForm.contract}
                              onChangeText={this.onChangeContract.bind(this)}
                              color='#E87B79'
                              />
                     <TextArea placeholder='Scouting Date Start'
                              value={playerForm.scoutingdate}
                              onChangeText={this.onChangeScouting.bind(this)}
                              color='#E87B79'
                              />
                    <MyButton spinner={false}
                              text='Update Player'
                              onPress={this.updatePlayer.bind(this)}
                              color='#EFF0EE'

                              
                              
                            />
                    <MyButton spinner={false}
                              text='Delete Player'
                              onPress={this.deletePlayer.bind(this)}
                              backgroundColor='#FFA079'
                              color='#EFF0EE'
                              
                            />
                </ScrollView>
            )
        }

    

  
}

const styles = StyleSheet.create({

    updateContainer:{
        flex:1,
        backgroundColor:'white',
        paddingBottom:20,
        marginBottom:10
    }
});

const mapStateToProps = state =>{
    return{
        user: state.auth.user,
        playerForm:state.playerForm
    }
}

export default connect(mapStateToProps,{deletePlayer,updatePlayer,changeName,changeTeam,changePosition,changeValue,changeAge,changeFoot,changeNationalTeam,changeGoal,changeAsist,changeContract,changeScouting})(UpdatePlayer);


/**
 *  age:this.props.playerForm.age,
                               asist:this.props.playerForm.asist,
                               contract:this.props.playerForm.contract,
                               email:this.props.playerForm.email,
                               foot:this.props.playerForm.foot,
                               goal:this.props.playerForm.goal,
                            name:this.props.playerForm.name,
                            nationalteam:this.props.playerForm.nationalteam,
                            position:this.props.playerForm.position,
                            scoutingdate:this.props.playerForm.scoutingdate,
                            team:this.props.playerForm.team,
                            value:this.props.playerForm.value
 */