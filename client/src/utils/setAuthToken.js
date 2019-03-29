import axios from "axios";

// here we set default token for axios

const setAuthToken = token => {
  if (token) {
    // Apply tp every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
