import React from "react";

const useAuth = () => {
  return {
    login(auth) {
      auth = true;
    },
    logout(auth) {
      auth = false;
    },
  };
};

export default useAuth;
