import _ from 'lodash';
import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {fetchPlayer} from '../actions';
import { FlatList } from 'react-native-gesture-handler';
import { DetailCard} from './common';
import {Actions} from 'react-native-router-flux';
class Players extends Component {


componentDidMount(){

    this.props.fetchPlayer();

}

renderItem({item}) {
    return (

        <TouchableOpacity key={item.uid} 
                          onPress={()=>{
                              Actions.updateplayer({
                                  player:item
                              })
                          }}  >
            <DetailCard>
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
                <View style={styles.detailWrapper}>
                        <Text style={styles.detailStyle}>
                        Player Age: 
                        </Text>
                        <Text style={styles.infoStyle}> {item.age}</Text>
                </View>
                <View style={styles.detailWrapper}>
                        <Text style={styles.detailStyle}>
                        Player Strong Foot: 
                        </Text>
                        <Text style={styles.infoStyle}> {item.foot}</Text>
                </View>
                <View style={styles.detailWrapper}>
                        <Text style={styles.detailStyle}>
                        Player National Team: 
                        </Text>
                        <Text style={styles.infoStyle}> {item.nationalteam}</Text>
                </View>
                <View style={styles.detailWrapper}>
                        <Text style={styles.detailStyle}>
                        Player Goal in this season: 
                        </Text>
                        <Text style={styles.infoStyle}> {item.goal}</Text>
                </View>
                <View style={styles.detailWrapper}>
                        <Text style={styles.detailStyle}>
                        Player asist in this season: 
                        </Text>
                        <Text style={styles.infoStyle}> {item.asist}</Text>
                </View>
                <View style={styles.detailWrapper}>
                        <Text style={styles.detailStyle}>
                        Player Contract End Date: 
                        </Text>
                        <Text style={styles.infoStyle}> {item.contract}</Text>
                </View>
                <View style={styles.detailWrapper}>
                        <Text style={styles.detailStyle}>
                        Player Scouting Start Date: 
                        </Text>
                        <Text style={styles.infoStyle}> {item.scoutingdate}</Text>
                </View>
                
                <Text style={styles.idStyle}>
                    Kullanıcı:{item.email}
                </Text>
            </DetailCard>
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
        fontSize:15,
        color:'#ddaa00'
    },
    infoStyle:{
        fontSize:15,
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
        return {
            
            playerList
        }
        
}

export default connect(mapStateToProps,{fetchPlayer})(Players);