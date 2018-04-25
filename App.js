import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputs: {
        username: 'idiot username',
        password: 'idiotic password'
      }
    }
  }

  handleInputChange(id, text) {
    const { inputs } = this.state
    const newInputs = { ...inputs, [`${id}`]: text }
    this.setState({ inputs: newInputs })
  }

  onPressLearnMore() {

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
          onPress={ this.onPressLearnMore }
          title='Learn More'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
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
