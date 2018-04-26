import React from 'react'
import _ from 'lodash'
import { StyleSheet
  , View
  , Image
  , TextInput
  , Text } from 'react-native'
import { Button } from 'react-native-elements'

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
        <View style={styles.logo}>
          <Image
            source={require('./img/logo.png')}
          />
        </View>

        <View style={styles.formGroup}>
          <View style={styles.labelLayout}>
            <Text style={styles.inputLabel}>Email</Text>
          </View>
          <TextInput
            placeholder='Input Email'
            value={ inputs.email }
            onChangeText={ this.handleInputChange.bind(this, 'email') }
            style={styles.input}
          />
          <Text style={styles.errorLabel}>{ errors.email }</Text>
        </View>

        <View style={styles.formGroup}>
          <View style={styles.labelLayout}>
            <Text style={styles.inputLabel}>Password</Text>
          </View>
          <TextInput
            placeholder='Input Password'
            secureTextEntry
            value={ inputs.password }
            onChangeText={ this.handleInputChange.bind(this, 'password') }
            style={styles.input}
          />
          <Text style={styles.errorLabel}>{ errors.password }</Text>
        </View>

        <Button
          onPress={ this.handleSubmit.bind(this) }
          title='Sign In'
          accessibilityLabel='Sign In'
          disabled={!_.isEmpty(errors)}
          backgroundColor='#714DB1'
          color='#ffffff'
          borderRadius={5}
          containerViewStyle={styles.button}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center'
  },
  formGroup: {
    marginBottom: 10
  },
  input: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#714DB1',
    borderWidth: 1,
    padding: 10,
    fontSize: 18
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 22
  },
  labelLayout: {
    paddingBottom: 5
  },
  errorLabel: {
    color: 'red'
  },
  button: {
    width: '100%',
    marginLeft: 0
  },
  logo: {
    margin: 'auto',
    alignItems: 'center',
    marginBottom: 60
  }
})
