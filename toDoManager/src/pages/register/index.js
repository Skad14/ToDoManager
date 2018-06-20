import React, { Component } from 'react';

import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

export default class Register extends Component {
  static navigationOptions = {
    title: 'Cadastro',
  }
  state = {
    email: '',
    password: '',
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.safe} behavior="padding">
        <SafeAreaView style={styles.safe}>
          <View style={styles.topo}>
            <Image source={require('assets/icons.jpeg')} style={styles.image} />
            <Text style={styles.text}> Registering new user </Text>
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
            <TouchableOpacity onPress={() => { }} style={styles.button}>
              <Text style={styles.buttonText}> Register user </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}
