const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "آدرس پروفایل باید 2 تا 40 کاراکتر باشد";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "وارد کردن آدرس پروفایل ضروری می باشد";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "وارد کردن وضعیت حرفه ای ضروری می باشد";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "وارد کردن مهارت ها ضروری می باشد";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "آدرس غیر معتبر";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "آدرس غیر معتبر";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "آدرس غیر معتبر";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "آدرس غیر معتبر";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "آدرس غیر معتبر";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "آدرس غیر معتبر";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
