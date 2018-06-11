const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
  let errors = {};

  if(!Validator.isLength(data.name, { min:2, max:30 })){
    errors.name = 'Name Must be Between 2 or 30 Characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}; 