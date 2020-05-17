/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/**
 * App js dosyasında kullanıcının ilk kez karşılaşacağı sayfa ile ilgili kodlar bulunuyor.
 * Login sayfası. şifremi unuttum butonu. yeni üye olmak isteyenler için signup butonu.
 */
import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, StyleSheet, ImageBackground, Text } from 'react-native';
import { Spinner } from './components/common/spinner';
import LoginForm from './components/loginForm';
import firebase from './firebase';
import { MyButton } from './components/common';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

class App extends Component {
  state = {
    loggedIn: null,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      const loggedIn = user ? true : false;
      this.setState({
        loggedIn
      })
    })
  }



  renderContent() {
    const { loggedIn } = this.state;

    switch (loggedIn) {
      case true:
        return (
                <MyButton onPress={() => firebase.auth().signOut()}
                          text='Log Out'  >
                </MyButton>
        )


      case false:
        return <Router/>
      default:
        return <Spinner />
    }

  }


  render() {
    const store= createStore(reducers,{},applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
       
       <Router/>

      </Provider>

    );
  }
}

const styles = StyleSheet.create({

  appContainer: {

    flex: 1,
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


export default App;

/**
 *  state = {
    loggedIn: null,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      const loggedIn = user ? true : false;
      this.setState({
        loggedIn
      })
    })
  }



  renderContent() {
    const { loggedIn } = this.state;

    switch (loggedIn) {
      case true:
        return (
                <MyButton onPress={() => firebase.auth().signOut()}
                          text='Log Out'  >
                </MyButton>
        )


      case false:
        return <LoginForm />
      default:
        return <Spinner />
    }

  }
 *  <ImageBackground source={require('./images/background2.jpg')}
          style={styles.appContainer}>
          <ScrollView>
            {this.renderContent()}
          </ScrollView>

        </ImageBackground>
 */