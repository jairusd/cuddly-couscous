import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
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
  logo: {
    alignSelf: 'center',
    marginBottom: 60,
    marginTop: 30
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 20
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
  }
})
