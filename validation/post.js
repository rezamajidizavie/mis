const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "پست باید بین 10 تا 300 کاراکتر باشد";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'یه چیزی بنویس ناموسا!';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
