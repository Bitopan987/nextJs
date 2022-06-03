export function validations(errors, name, value) {
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  switch (name) {
    case 'username':
      errors.username = !value
        ? 'username is required'
        : value.length < 6
        ? 'username should be atleast 6 characters'
        : '';
      break;
    case 'email':
      errors.email = !value
        ? 'email is required'
        : validateEmail(value)
        ? ''
        : 'Email is invalid';
      break;
    default:
      break;
  }
}
