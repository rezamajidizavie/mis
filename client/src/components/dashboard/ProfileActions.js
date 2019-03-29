import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link style={styles.link} to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> ویرایش پروفایل
      </Link>
      <Link style={styles.link} to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        اضافه کردن تجربیات
      </Link>
      <Link style={styles.link} to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        اضافه کردن سوابق تحصیلی
      </Link>
    </div>
  );
};

const styles = {
  link:{
    marginRight:"5px"
  }
}

export default ProfileActions;
