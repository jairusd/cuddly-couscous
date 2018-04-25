import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default class App extends React.Component {
  onPressLearnMore() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Fucker App</Text>
        <Text>Username</Text>
        <TextInput
          value='test'
        />
        <Text>Password</Text>
        <TextInput
          value='test'
        />
        <Button
          onPress={this.onPressLearnMore}
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
