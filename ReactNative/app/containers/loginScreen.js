import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Text,
    Keyboard,
    Dimensions,
    LayoutAnimation,
} from 'react-native';
import KeyboardReactiveView from './keyboardReactiveView';
import conversationsScreen from './conversationsScreen';
import StyledNavigationBar from './styledNavigationBar';

const constants = {
  emailPlaceholderText: 'Email',
  passwordPlaceholderText: 'Password',
}

export default class LoginScreen extends Component {
  render() {
    let interactiveViews = this.interactiveViews();
    return (
      <View style={styles.rootView}>
        <StyledNavigationBar
          title={{
              title: 'Log In',
              tintColor: 'white',
          }}
          leftButton={{
              title: 'Back',
              handler: () => this.props.navigator.pop(),
          }}
        />
        <KeyboardReactiveView views={interactiveViews}/>
      </View>
    );
  }

  interactiveViews() {
    return [
      <TextInput
        key='email'
        style={[styles.textArea, styles.textAreaContainer]}
        placeholder={constants.emailPlaceholderText}
        onChangeText={(text) => { this.updateEmailText(text) }}/>,
      <TextInput
        key='password'
        style={[styles.textArea, styles.textAreaContainer]}
        placeholder={constants.passwordPlaceholderText}
        onChangeText={(text) => { this.updatePasswordText(text) }}/>,
      <TouchableHighlight key='button' style={styles.textAreaContainer} underlayColor='transparent' onPress={()=>this.attemptLogin()}>
        <Text key='buttonText' style={styles.textArea}>Login</Text>
      </TouchableHighlight>,
    ];
  }

  attemptLogin() {
    // TODO: Show "loading" alert, send off network request to validate account info, and respond to response appropriately
    this.props.navigator.push({
      component: conversationsScreen,
    });
  }

  updateEmailText(text) {
    this.currentEmailText = text;
  }

  updatePasswordText(text) {
    this.currentPasswordText = text;
  }
};

const styles = StyleSheet.create({
    rootView: {
      flex:1,
      flexDirection:'column',
      backgroundColor:'white',
    },
    navbarStyle: {
      backgroundColor:'black',
    },
    textArea: {
      height: 30,
      textAlign: 'center',
    },
    textAreaContainer: {
      marginVertical: 20,
    }
});