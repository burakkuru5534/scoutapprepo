
import React, {Component} from 'react';
import {Image,View, Text,TextInput,StyleSheet} from 'react-native';

const Input2 = ({text,inputPlaceHolder, onChangeText,value,secureTextEntry,placeholderTextColor}) =>{
  
    return(

        <View style={styles.inputWrapper}>
            <Image style={{marginLeft:5}} source={require('../../images/password.png')}></Image>
           
           
            <TextInput style={styles.textInputStyle}
             placeholder={inputPlaceHolder} 
             placeholderTextColor={placeholderTextColor}

             secureTextEntry={secureTextEntry} 
             onChangeText={onChangeText} 
             value={value}/>

        </View>

    );
}


const styles= StyleSheet.create({
    inputWrapper:{
        flexDirection:'row',
        height:50,
        width:300,
        backgroundColor:'black',
        opacity:0.7,
        margin:10,
        alignItems:'center',
        alignSelf:'center'
        

    },
    textInputStyle:{
        fontSize:17,
        marginLeft:5,
        color:'white'

        

    },
})



export {Input2}