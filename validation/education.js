const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "وارد کردن نام موسسه ضروری است";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "وارد کردن مقطع تحصیلی ضروری است";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "وارد کردن رشته تحصیلی ضروری می باشد";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "وارد کردن تاریخ شروع ضروری می باشد";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
