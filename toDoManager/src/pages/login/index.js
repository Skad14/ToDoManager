import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native'

import styles from './styles'

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  }
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }
  state = {
    email: '',
    password: '',
  }

  registerPage = () => {
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.safe} behavior="padding">
        <SafeAreaView style={styles.safe}>
          <View style={styles.topo}>
            <Image source={require('assets/icons.jpeg')} style={styles.image} />
            <Text style={styles.text}> Login </Text>
          </View>
          <View style={styles.form}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              placeholder="E-mail"
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              autoCorrect={false}
              style={styles.input}
              placeholder="Senha"
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.registerPage} style={styles.button}>
              <Text style={styles.buttonText}> Cadastro </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    )
  }
}
