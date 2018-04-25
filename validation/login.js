import Validator from 'validator'

export default function validateInput(data) {
  let errors = {}

  if (Validator.isEmpty(data.username.trim())) {
    errors.username = 'Username is required'
  }

  if (Validator.isEmpty(data.password.trim())) {
    errors.password = 'Password is required'
  } else if (data.password.length < 6 || data.password.length > 12) {
    errors.password = 'Password must be 6-12 characters only'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
