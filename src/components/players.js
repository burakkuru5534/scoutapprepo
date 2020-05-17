import _ from 'lodash';
import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {fetchPlayer} from '../actions';
import { FlatList } from 'react-native-gesture-handler';
import { MainCard} from './common';
import {Actions} from 'react-native-router-flux';
class Players extends Component {


componentDidMount(){

    this.props.fetchPlayer();

}

renderItem({item}) {
    return (

        <TouchableOpacity key={item.uid} 
                          onPress={()=>{
                              Actions.playerdetails({
                                  player:item
                              })
                          }}  >
            <MainCard>
                <View style={styles.detailWrapper}>
                        <Text style={styles.detailStyle}>
                        Player Name: 
                        </Text>
                        <Text style={styles.infoStyle}> {item.name}</Text>
                </View>

                <View style={styles.detailWrapper}>
                        <Text style={styles.detailStyle}>
                        Player Team: 
                        </Text>
                        <Text style={styles.infoStyle}> {item.team}</Text>
                </View>

               <View style={styles.detailWrapper}>
                        <Text style={styles.detailStyle}>
                        Player Position: 
                        </Text>
                        <Text style={styles.infoStyle}> {item.position}</Text>
                </View>

               <View style={styles.detailWrapper}>
                        <Text style={styles.detailStyle}>
                        Player Market Value: 
                        </Text>
                        <Text style={styles.infoStyle}> {item.value}</Text>
                </View>
                
                <Text style={styles.idStyle}>
                    Kullanıcı:{item.email}
                </Text>
            </MainCard>
        </TouchableOpacity>
    )
}




    render() {

        const {playerList} = this.props;

        return(
            <ImageBackground source={require('../images/background9.jpg')} style={styles.playerListWrapper}>
               <FlatList   data={playerList}
                           renderItem={this.renderItem}
                           keyExtractor={(item)=> item.uid}      />
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({

    playerListWrapper:{
        flex:1,
        backgroundColor:'#555555',
        padding:10,
    },
    detailWrapper:{
        
        flexDirection:'row',
        width:380,
        paddingLeft:10
    },

    detailStyle:{
        fontSize:22,
        color:'#ddaa00'
    },
    infoStyle:{
        fontSize:22,
        color:'#1122ff'
    },

    idStyle:{

        color:'#1122ff',
        fontSize:14,
        alignSelf:'flex-end'

    }

})


const mapStateToProps= state => {

    const playerList= _.map(state.playerList,(val,uid)=>{
        return {...val, uid}
    });
    console.log(playerList);
        return {
            playerList
        }
}

export default connect(mapStateToProps,{fetchPlayer})(Players);