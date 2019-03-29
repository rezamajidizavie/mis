import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileActions";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };
    this.props.createProfile(profileData, this.props.history);
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="آدرس پروفایل توییتر"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="آدرس پروفایل فیسبوک"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="آدرس پروفایل لینکدین"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="آدرس کانال یوتیوب"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="آدرس پیج اینستاگرام"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }
    // select options for status
    const options = [
      { label: "وضعیت حرفه ای را انتخاب نمایید *", value: 0 },
      { label: "توسعه دهنده", value: "توسعه دهنده" },
      { label: "توسعه دهنده تازه کار", value: "توسعه دهنده تازه کار" },
      { label: "توسعه دهنده ارشد", value: "توسعه دهنده ارشد" },
      { label: "مدیر", value: "مدیر" },
      { label: "دانش جو", value: "دانش جو" },
      { label: "معلم", value: "معلم" },
      { label: "کارآموز", value: "کارآموز" },
      { label: "سایر", value: "سایر" }
    ];
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">پروفایل خود را بسازید</h1>
              <p className="lead text-center">
                اطلاعات خود را وارد کنید و پروفایل خود را بسازید!
              </p>
              <small className="d-block pb-3">* = فیلد ضروری</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="آدرس پروفایل *"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="آدرس منحصر به فرد برای پروفایل شما"
                />
                <SelectListGroup
                  placeholder="* وضعیت"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  error={errors.status}
                  options={options}
                  info="وضعیت حرفه ای خود در شغلتان را انتخاب کنید"
                />
                <TextFieldGroup
                  placeholder="شرکت"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="شرکت شما یا شرکتی که در آن مشغول هستید"
                />
                <TextFieldGroup
                  placeholder="وبسایت"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="آدرس وبسایت شخصی یا وبسایت شرکتتان"
                />
                <TextFieldGroup
                  placeholder="آدرس"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="استان و شهر ( مثال تهران،تهران)"
                />
                <TextFieldGroup
                  placeholder="مهارت ها *"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="مهارت ها را به انگلیسی وارد و با کاما جدا کنید (
                   مثال HTML,CSS,JavaScript,PHP)"
                />
                <TextFieldGroup
                  placeholder="نام کاربری در github"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="اگر میخواهید پروژه های اخیرتان در گیت هاب، در پروفایلتان نمایش داده شود نام کاربری گیت هاب خود را قرار دهید"
                />
                <TextAreaFieldGroup
                  placeholder="بیوگرافی کوتاه"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="بیوگرافی کوتاهی از خودتان"
                />

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    لینک شبکه های اجتماعی را وارد نمایید
                  </button>
                  <span className="text-muted" style={{ marginRight: "10px" }}>
                    اختیاری{" "}
                  </span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="ایجاد پروفایل"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
