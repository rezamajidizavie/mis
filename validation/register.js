const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "نام وارد شده باید بین 2 تا 30 کاراکتر";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "ورود نام ضروری می باشد";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "ورود ایمیل ضروری می باشد";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "ایمیل وارد شده نامعتبر می باشد";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "ورود رمز عبور ضروری می باشد";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "رمز عبور باید بین 6 تا 30 کاراکتر باشد";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "تکرار رمز عبور ضروری می باشد";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = " رمز عبور های وارد شده منطبق نمی باشند";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
