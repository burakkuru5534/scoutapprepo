import React, { Component } from 'react';
import { Image, View, Linking, StyleSheet, Text, TouchableOpacity, ScrollView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Input, Input2, Spinner, myButton, MyButton } from './common';
import firebase from 'firebase';
import { connect } from 'react-redux'
import SignUpForm from './SigUpForm';
import ForgotPasswordPage from './ForgotPasswordPage';
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {


    LoginButtonClicked() {
        const { email, password } = this.props;

        this.props.loginUser(email, password);
    }

    ForgotPasswordButtonClicked() {
        return (
            <ForgotPasswordPage />
        );
    }

    SignUpButtonClicked() {
        return <SignUpForm />
    }


    onEmailChanged(text) {
        this.props.emailChanged(text);

    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);

    }
    render() {
        const { error, loading } = this.props
        const errorMsg = error ? (
            <Text style={styles.errorStyle}>

                {error}

            </Text>

        ) :
            null;


        const ForgotPasswordButton = loading ? (
            <Spinner />
        ) : (
                <TouchableOpacity onPress={this.ForgotPasswordButtonClicked.bind(this)}>
                    <Text style={styles.buttonTextStyle}>
                        Forgot Password?
                </Text>

                </TouchableOpacity>
            );

        return (
            <ScrollView>
                 <ImageBackground source={require('../images/background2.jpg')} style={{ padding: 30, paddingTop: '70%', flex: 1, justifyContent: 'center' }}>
                

                <View>

                    <Input
                        inputPlaceHolder='E-mail address...'
                        placeholderTextColor='white'
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email} />
                </View>

                <View>
                    <Input2 text='Şifre:'
                        inputPlaceHolder='Password...'
                        secureTextEntry
                        placeholderTextColor='white'

                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password} />
                </View>

                {errorMsg}

                <MyButton onPress={this.LoginButtonClicked.bind(this)}
                    text='Sign In'
                    spinner={loading}
                    
                />

                <View>
                    <Text style={styles.ForgotPasswordStyle} onPress={
                        () => { this.ForgotPasswordButtonClicked.bind(this) }}>Forgot Password?</Text>

                </View>

                <View style={styles.SignUpBoxStyles}>
                    <Text style={styles.SignUpStyles} onPress={this.SignUpButtonClicked.bind(this)}>New Here? Sign Up</Text>
                </View>

            </ImageBackground>
            </ScrollView>
           


        );
    }
}

const styles = StyleSheet.create({

    ButtonWrapper: {

        marginTop: 10,
        alignSelf: 'center',
        width: 300,
    },
    errorStyle: {
        fontSize: 20,
        color: 'red',
        paddingTop: 5,
        alignSelf: 'center'
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
    ForgotPasswordStyle: {
        color: 'white',
        opacity: 0.7,
        marginTop: 15,
        alignSelf: 'center',
        textDecorationLine: 'underline'

    },
    SignUpStyles: {

        color: 'white',
        marginTop: 15,
        alignSelf: 'center',
        textDecorationLine: 'underline'
    },
    SignUpBoxStyles: {
        marginTop: 100,
        opacity: 0.7,
        borderTopWidth: 1,
        borderTopColor: '#ddbb00'
    }
});

const mapStateToProps = state => {
    const { email, password, loading, error } = state.auth;
    return {
        email, password, loading, error
    }
}


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);