import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import validateInput from './validation/login'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputs: {
        username: 'D',
        password: 'idiotic password'
      },
      errors: {}
    }
  }

  handleInputChange(id, text) {
    const { inputs } = this.state
    const newInputs = { ...inputs, [`${id}`]: text }
    this.setState({ inputs: newInputs })
  }

  isValid() {
    const { isValid, errors } = validateInput(this.state.inputs)
    this.setState({ errors })
    return isValid
  }

  handleSubmit() {
    if (this.isValid()) {
      console.log('Login successful! :)')
    }
  }

  render() {
    const { inputs, errors } = this.state
    return (
      <View style={styles.container}>
        <Text>Fucker App</Text>
        <Text>Username</Text>
        <TextInput
          value= { inputs.username }
          onChangeText={ this.handleInputChange.bind(this, 'username') }
        />
        <Text>{ errors.username }</Text>
        <Text>Password</Text>
        <TextInput
          value= { inputs.password }
          onChangeText={ this.handleInputChange.bind(this, 'password') }
        />
        <Text>{ errors.password }</Text>
        <Button
          onPress={ this.handleSubmit.bind(this) }
          title='Sign In'
          accessibilityLabel='Sign In'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
