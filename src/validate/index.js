function validate(values) {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Field is required'
  }

  if (!values.lastName) {
    errors.lastName = 'Field is required'
  }

  return errors;
}

export default validate;
