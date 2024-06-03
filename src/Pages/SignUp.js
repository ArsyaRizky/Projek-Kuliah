import axios from 'axios';
import { Formik } from "formik";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { formikText } from "../Helpers/Forms.helper";
import { AppContext } from "../States/Provider/App.context";

const initialValues = {
  username: "",
  email: "",
  password: "", // Ensure password is included in initial values
  level: "User",
  department: "",
  nama_lengkap: "", // This maps to 'fullname' in PHP
};

const SignupScreen = (params) => {
  const { addAksesUser, department } = useContext(AppContext);
  const history = useHistory();

  const onSubmit = async (values) => {
    console.log("Submitting values:", values);
    try {
      const response = await axios.post('http://localhost/tribone-api-master/register.php', {
        username: values.username,
        fullname: values.nama_lengkap, // Ensure mapping is correct
        email: values.email,
        password: values.password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log("Server response:", response.data);
      if (response.data.status === 200) {
        // Success: Navigate to login page
        history.replace("/Login");
      } else {
        // Error: Display the error message
        console.error("Server error message:", response.data.message);
        alert(response.data.message); // Display error message
      }
    } catch (error) {
      console.error("Signup failed:", error.response ? error.response.data : error.message);
      alert("Signup failed, please try again."); // Display generic error message
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => {
          return (
            <div className='ui form'>
              <h3 className='text-center'>Sign Up</h3>

              <div className='field'>
                <label>Username</label>
                <input
                  {...formikText(props, "username")}
                  type='text'
                  id='username'
                  placeholder='Username'
                />
              </div>

              <div className='field'>
                <label>Full name</label>
                <input
                  {...formikText(props, "nama_lengkap")}
                  type='text'
                  id='fullname'
                  placeholder='Full name'
                />
              </div>

              <div className='field'>
                <label>Email address</label>
                <input
                  {...formikText(props, "email")}
                  type='email'
                  id='email'
                  placeholder='Enter email'
                />
              </div>

              <div className='field'>
                <label>Password</label>
                <input
                  {...formikText(props, "password")}
                  type='password'
                  id='password'
                  autoComplete='on'
                  placeholder='Enter password'
                />
              </div>
              <div className='field'>
                <div className='ui checkbox'>
                  <input type='checkbox' name='remember' />
                  <label>Remember me</label>
                </div>
              </div>

              <button onClick={props.submitForm} className='ui primary button'>
                Submit
              </button>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default SignupScreen;
