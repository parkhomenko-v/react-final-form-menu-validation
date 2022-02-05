const ERROR_MESSAGE = "Field is required";

function validate(values) {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = ERROR_MESSAGE;
  }

  if (!values.lastName) {
    errors.lastName = ERROR_MESSAGE;
  }

  errors.contacts = validateContacts(values.contacts);
  errors.extra = validateExtra(values.extra);

  return errors;
}

export default validate;

function validateContacts(values = {}) {
  const errors = {};

  if (!values.phone) {
    errors.phone = ERROR_MESSAGE;
  }

  if (!values.email) {
    errors.email = ERROR_MESSAGE;
  }

  errors.address = validateAddress(values.address);

  return errors;
}

function validateAddress(values = {}) {
  const errors = {};

  if (!values.country) {
    errors.country = ERROR_MESSAGE;
  }

  if (!values.city) {
    errors.city = ERROR_MESSAGE;
  }

  return errors;
}

function validateExtra(values = {}) {
  const errors = {};

  if (!values.resources) {
    errors.resources = ERROR_MESSAGE;
  }

  return errors;
}
