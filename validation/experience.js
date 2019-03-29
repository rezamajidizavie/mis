const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'وارد کردن عنوان شغلی ضروری است';
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = 'وارد کردن نام شرکت ضروری است';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'وارد کردن تاریخ شروع فعالیت ضروری است';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
