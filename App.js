import React from 'react'
import _ from 'lodash'
import { StyleSheet
  , View
  , Image } from 'react-native'
import { FormLabel
  , FormInput
  , FormValidationMessage
  , Button
  , Text  } from 'react-native-elements'

import validateInput from './validation/login'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputs: {
        email: '',
        password: ''
      },
      errors: {}
    }
  }

  handleInputChange(id, text) {
    const { inputs } = this.state

    const newInputs = { ...inputs, [`${id}`]: text }

    this.setState({ inputs: newInputs }, ()=>{
      this.isValid()
    })
  }

  isValid() {
    const { isValid, errors } = validateInput(this.state.inputs)
    this.setState({ errors })
    return isValid
  }

  handleSubmit() {
    if (this.isValid()) {
      alert(
        'Login is successful! :)',
        'Success',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    const { inputs, errors } = this.state
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/logo.png')}
        />

        <Text>Email</Text>
        <FormInput
          placeholder='Input Email'
          value={ inputs.email }
          onChangeText={ this.handleInputChange.bind(this, 'email') }
        />
        <FormValidationMessage>{ errors.email }</FormValidationMessage>

        <Text>Password</Text>
        <FormInput
          placeholder='Input Password'
          secureTextEntry
          value={ inputs.password }
          onChangeText={ this.handleInputChange.bind(this, 'password') }
        />
        <FormValidationMessage>{ errors.password }</FormValidationMessage>

        <Button
          onPress={ this.handleSubmit.bind(this) }
          title='Sign In'
          accessibilityLabel='Sign In'
          large
          backgroundColor='#714DB1'
          disabled={!_.isEmpty(errors)}
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
