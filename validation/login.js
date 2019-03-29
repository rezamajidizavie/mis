const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "ایمیل نامعتبر است";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "وارد کردن ایمیل ضروری می باشد";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "وارد کردن رمز عبور ضروری می باشد";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
