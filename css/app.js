import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
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
  },
  logo: {
    margin: 'auto',
    alignItems: 'center',
    marginBottom: 60
  }
})

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
    marginBottom: 60
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
