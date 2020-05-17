import React, {Component} from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';

class Banner extends Component {
    render(){
        return(
            <View></View>
        );
    }
}

const styles= StyleSheet.create({
    bannerContainer: {
        marginTop:10,
        marginLeft:5,        
        width: 400,
        height: 400,

    },
    bannerText:{

        fontSize:34,
        color:'#fff'
    }
});

export default Banner;