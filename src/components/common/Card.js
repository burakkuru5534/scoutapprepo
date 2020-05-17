import React from 'react';
import {StyleSheet,View} from 'react-native';

const MainCard = (props) => {

    return(
        <View style={styles.cardWrapper}>
            {props.children}
        </View>
    )

}

const styles = StyleSheet.create({

    cardWrapper:{
        height:200,
        margin:10,
        borderWidth:1,
        borderRadius:2,
        borderColor:'#dddddd',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        opacity:0.8

    }
});

export {MainCard};