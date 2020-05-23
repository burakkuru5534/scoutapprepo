import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {Spinner} from './spinner';

const MyButton = ({spinner,text,onPress,color,backgroundColor}) => {
    
    let {buttonTextStyle} = styles;
    buttonTextStyle = {...buttonTextStyle,color:color || 'white'};

    const content = spinner ? (<Spinner/>) :
     (<TouchableOpacity onPress={onPress} color={color} backgroundColor={backgroundColor}>
          <Text style={buttonTextStyle}>
            {text}
        </Text>
     </TouchableOpacity>
              
     )

     let { buttonWrapper } = styles;
     buttonWrapper = {...buttonWrapper,backgroundColor:backgroundColor || '#ddbb00'};


    return(
        <View style={buttonWrapper }>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({

    buttonWrapper: {

        marginTop: 10,
        alignSelf: 'center',
        width: 300,
        borderRadius:100,
        
        
    },
    buttonTextStyle: {
        borderWidth: 1,
        padding: 25,
        borderRadius: 100,
        textAlign: 'center',
        fontSize: 20
    },
})

export {MyButton};