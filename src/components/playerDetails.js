import React, {Component} from 'react';
import {TouchableOpacity,Text,StyleSheet,View, ImageBackground} from 'react-native';
import {DetailCard} from './common';
import {Actions} from 'react-native-router-flux';

class PlayerDetails extends Component {

    render() {
        return(
            <ImageBackground source={require('../images/background7.jpg')} style={{flex:1}}>
            <TouchableOpacity onPress={()=>{
                Actions.updateplayer()
            }} >
                <DetailCard>
                   
                    <View style={styles.detailWrapper}>
                    <Text style={styles.detailStyle}>
                    Player Name: 
                    </Text>
                    <Text style={styles.infoStyle}> {this.props.player.name}</Text>
                    </View>
                    

                    <View style={styles.detailWrapper}>
                    <Text style={styles.detailStyle}>
                    Player Team: 
                    </Text>
                    <Text style={styles.infoStyle}> {this.props.player.team}</Text>
                    </View>

                    <View style={styles.detailWrapper}>
                    <Text style={styles.detailStyle}>
                    Player Position: 
                    </Text>
                    <Text style={styles.infoStyle}> {this.props.player.position}</Text>
                    </View>

                    <View style={styles.detailWrapper}>
                    <Text style={styles.detailStyle}>
                    Player Market Value: 
                    </Text>
                    <Text style={styles.infoStyle}> {this.props.player.value}</Text>
                    </View>

                    <View style={styles.detailWrapper}>
                    <Text style={styles.detailStyle}>
                    Player Age: 
                    </Text>
                    <Text style={styles.infoStyle}> {this.props.player.age}</Text>
                    </View>

                    <View style={styles.detailWrapper}>
                    <Text style={styles.detailStyle}>
                    Player Strong Foot: 
                    </Text>
                    <Text style={styles.infoStyle}> {this.props.player.foot}</Text>
                    </View>

                    <View style={styles.detailWrapper}>
                    <Text style={styles.detailStyle}>
                    Player National Team: 
                    </Text>
                    <Text style={styles.infoStyle}> {this.props.player.nationalteam}</Text>
                    </View>

                    <View style={styles.detailWrapper}>
                    <Text style={styles.detailStyle}>
                    Player Total Goal in This Season: 
                    </Text>
                    <Text style={styles.infoStyle}> {this.props.player.goal}</Text>
                    </View>

                   
                    <View style={styles.detailWrapper}>
                    <Text style={styles.detailStyle}>
                    Player Total Asist in This Season: 
                    </Text>
                    <Text style={styles.infoStyle}> {this.props.player.asist}</Text>
                    </View>

                    <View style={styles.detailWrapper}>
                    <Text style={styles.detailStyle}>
                    Contract End Date: 
                    </Text>
                    <Text style={styles.infoStyle}> {this.props.player.contract}</Text>
                    </View>

                    <View style={styles.detailWrapper}>
                    <Text style={styles.detailStyle}>
                    Scouting Start Date: 
                    </Text>
                    <Text style={styles.infoStyle}> {this.props.player.scoutingdate}</Text>
                    </View>

                    <Text style={styles.userStyle}>
                        {this.props.player.email}
                    </Text>

                </DetailCard>
            </TouchableOpacity>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({

    detailWrapper:{
        
        flexDirection:'row',
        width:380
    },

    detailStyle:{
        fontSize:15,
        color:'#ddaa00'
    },
    infoStyle:{
        fontSize:15,
        color:'#1122ff'
    },
    userStyle:{
        alignSelf:'flex-end',
        color:'#1122ff'
    }
})


export default PlayerDetails;