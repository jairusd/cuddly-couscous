import Validator from 'validator'
import _ from 'lodash'

export default function validateInput(data) {
  let errors = {}

  if (Validator.isEmpty(data.email.trim())) {
    errors.email = 'Email is required'
  } else if (!Validator.isEmail(data.email.trim())) {
      errors.email = 'Email is invalid'
    }

  if (Validator.isEmpty(data.password.trim())) {
    errors.password = 'Password is required'
  } else if (data.password.length < 6) {
    errors.password = 'Password must be atleast 6 characters'
  } else if (data.password.length > 12) {
    errors.password = 'Password must be 6-12 characters long'
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
