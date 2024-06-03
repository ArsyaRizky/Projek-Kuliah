import { Formik } from "formik";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { formikText } from "../Helpers/Forms.helper";

import { AppContext } from "../States/Provider/App.context";

const initialValues = {
  email: "",
  password: "", // Add password field to initialValues
};

const LoginScreen = (params) => {
  const { setCurrentAkses } = useContext(AppContext);
  const history = useHistory();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost/tribone-api-master/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      const token = data.token;

      if (!token) {
        throw new Error("Token not found in response");
      }

      setCurrentAkses({ token });
      history.replace("/"); // Redirect to desired route upon successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => {
          return (
            <div className="ui form">
              <h3 className="text-center">Sign In</h3>

              {error && <div className="ui negative message">{error}</div>}

              <div className="field">
                <label>Email address</label>
                <input
                  type="email"
                  id="email"
                  {...formikText(props, "email")}
                  placeholder="Enter email"
                />
              </div>

              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  {...formikText(props, "password")} // Capture password field in Formik
                  placeholder="Enter password"
                />
              </div>
              <div className="field">
                <div className="ui checkbox">
                  <input type="checkbox" name="remember" />
                  <label>Remember me</label>
                </div>
              </div>

              <button
                type="submit"
                onClick={props.submitForm}
                className="ui primary button"
              >
                Submit
              </button>
              {error && <p className="error-message">{error}</p>}
              <p className="forgot-password text-right">
                Don't have an account? <Link to="/signUp">Register</Link>
              </p>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginScreen;
