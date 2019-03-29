import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { clearCurrentProfile } from "../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(isAuthenticated);
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link style={{ color: "white" }} className="nav-link" to="/register">
            ثبت نام
          </Link>
        </li>
        <li className="nav-item">
          <Link style={{ color: "white" }} className="nav-link" to="/login">
            ورود
          </Link>
        </li>
      </ul>
    );

    const authLinks = (
      <ul className="navbar-nav ml-auto">
       <li className="nav-item">
          <Link style={{ color: "white" }} className="nav-link" to="/feed">
            پست مطلب
          </Link>
        </li>
        <li className="nav-item">
          <Link style={{ color: "white" }} className="nav-link" to="/dashboard">
            داشبورد
          </Link>
        </li>
        <li className="nav-item">
          <a
            style={{ color: "white",float:"right" }}
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px", float: "left" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            خروج
          </a>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <Link className="navbar-brand" to="/">
            همگرد!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/profiles">
                  کاربران <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
  //note that state.auth comes from combine reducers where we named our state auth
};

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
