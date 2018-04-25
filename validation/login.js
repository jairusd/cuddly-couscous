import Validator from 'validator'

export default function validateInput(data) {
  let errors = {}

  if (Validator.isEmpty(data.username.trim())) {
    errors.email = 'Username is required'
  }
  if (Validator.isEmpty(data.password.trim())) {
    errors.password = 'Password is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
