function validate(values) {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Field is required'
  }

  if (!values.lastName) {
    errors.lastName = 'Field is required'
  }

  errors.contacts = validateContacts(values.contacts);
  errors.extra = validateExtra(values.extra);

  return errors;
}

export default validate;

function validateContacts(values = {}) {
  const errors = {};

  if (!values.phone) {
    errors.phone = 'Field is required'
  }

  if (!values.email) {
    errors.email = 'Field is required'
  }

  errors.address = validateAddress(values.address);

  return errors;
}

function validateAddress(values = {}) {
  const errors = {};

  if (!values.country) {
    errors.country = 'Field is required'
  }

  if (!values.city) {
    errors.city = 'Field is required'
  }

  return errors;
}

function validateExtra(values = {}) {
  const errors = {};

  if (!values.resources) {
    errors.resources = 'Field is required'
  }

  return errors;
}
