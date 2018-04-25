import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import validateInput from './validation/login'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputs: {
        username: 'i',
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
    console.log('@errors: ', errors)
    this.setState({ errors }, ()=>{
      console.log('@updated state: ', this.state)
    })
    return isValid
  }

  handleSubmit() {
    if (this.isValid()) {
      console.log('success!')
    }
  }

  render() {
    const { inputs } = this.state
    return (
      <View style={styles.container}>
        <Text>Fucker App</Text>
        <Text>Username</Text>
        <TextInput
          value= { inputs.username }
          onChangeText={ this.handleInputChange.bind(this, 'username') }
        />
        <Text>Password</Text>
        <TextInput
          value= { inputs.password }
          onChangeText={ this.handleInputChange.bind(this, 'password') }
        />
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
