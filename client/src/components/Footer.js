import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-dark text-white mt-5 p-4 text-center">
          تمامی حقوق محفوظ است {new Date().getFullYear()} - Reza Majidi
        </footer>
      </div>
    );
  }
}

export default Footer;
