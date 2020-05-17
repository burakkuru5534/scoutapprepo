import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {changeScouting} from '../actions'
import {TextArea,MyButton} from './common';
import { connect } from 'react-redux';
class UpdatePlayer extends Component {


    componentDidMount(){
        const {scoutingdate}=this.props.player;
        this.props.changeScouting(scoutingdate);
        
    }
    onChangeScouting(scoutingdate){
        this.props.changeScouting(scoutingdate);
    }


    render() {

        const {playerForm} = this.props;
        return(

            <View style={styles.updateContainer}>
                <TextArea placeholder='Scouting Start Date:...'
                              placeholderTextColor='#fff'
                              value={playerForm.scoutingdate}
                              onChangeText={this.onChangeScouting.bind(this)}/>


                    <MyButton
                        spinner={false}
                        text='Update Player'
                        
                        onPress={()=>console.log('onpress')}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    updateContainer:{
        flex:1,
        backgroundColor:'white',
        padding:10
    }
});

const mapStateToProps = state =>{
    return{
        playerForm:state.playerForm
    }
}

export default connect(mapStateToProps,{changeScouting}) (UpdatePlayer);