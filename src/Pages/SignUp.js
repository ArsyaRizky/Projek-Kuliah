import { Formik } from "formik";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { formikText } from "../Helpers/Forms.helper";

import { AppContext } from "../States/Provider/App.context";
const initialValues = {
  username: "",
  email: "",
  level: "User",
  department: "",
  nama_lengkap: "",
};
const SignupScreen = (params) => {
  const { addAksesUser, department } = useContext(AppContext);
  const history = useHistory();

  const onSubmit = async (values) => {
    addAksesUser({
      username: values?.username,
      email: values?.email,
      level: values?.level,
      department: values?.department,
      nama_lengkap: values?.nama_lengkap,
    });
    history.replace("/Login");
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
                  placeholder='First name'
                />
              </div>

              <div className='field'>
                <label>Full name</label>
                <input
                  {...formikText(props, "nama_lengkap")}
                  type='text'
                  id='username'
                  placeholder='First name'
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
              {/* <p className='forgot-password text-right'>
        Dont have an account? <Link to='/signUp'>Register</Link>
      </p> */}
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default SignupScreen;
