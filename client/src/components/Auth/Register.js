import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../assets/css/register.css";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">ثبت نام</h1>
              <p className="lead text-center">اکانت همگرد خود را بسازید!</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="نام"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="آدرس ایمیل"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="اگر میخواهید عکس پروفایل داشته باشید از یک ایمیل gravatar استفاده کنید"
                />
                <TextFieldGroup
                  placeholder="رمز عبور"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                  info ="بین 6 تا 30 کاراکتر"
                />
                <TextFieldGroup
                  placeholder="تکرار رمز عبور"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <input
                  type="submit"
                  className="btn btn-success btn-block mt-4"
                  value="ثبت نام"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
  //note that state.auth comes from combine reducers where we named our state auth
};

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
