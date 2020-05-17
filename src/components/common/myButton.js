import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {Spinner} from './spinner';

const MyButton = ({spinner,text,onPress}) => {

    const content = spinner ? (<Spinner/>) :
     (<TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonTextStyle}>
            {text}
        </Text>
     </TouchableOpacity>
              
     )

    return(
        <View style={styles.ButtonWrapper }>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({

    ButtonWrapper: {

        marginTop: 10,
        alignSelf: 'center',
        width: 300,
    },
    buttonTextStyle: {
        borderWidth: 1,
        padding: 25,
        backgroundColor: '#ddbb00',
        borderRadius: 100,
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
})

export {MyButton};