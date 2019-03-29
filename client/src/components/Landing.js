import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/landing.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing_background">
        <div className="dark_overlay text-center">
          <div className="landing_area">
            <h1 className="display-3 mb-4 text-white">همگرد</h1>
            <p className="lead-landing">
              {" "}
              پروفایل شخصی خود را درست کنید، مطالب مورد علاقه خود را پست کنید و
              برای دوستان خود کامنت بگذارید
            </p>
            <hr />
            <Link to="/register" className="btn btn-lg btn-success mr-2">
              ثبت نام
            </Link>
            <Link to="/login" className="btn btn-lg btn-danger">
              ورود
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Landing);
