import Validator from 'laravalidator-js'

export class FormValidator extends Validator
{
  constructor(data) {
    super()
    this.data = data
    this.rules = {
      'fullname': 'required,email',
      'email': 'email',
      'description': 'required'
    }

    this.messages = {
      fullname: {
        required: 'El campo fullname es requerido'
      }
    }

  }

  static make(data = {})
  {
    let validate = new FormValidator(data);
    return validate.exec()
  }

}