import { Formik } from "formik";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { formikText } from "../Helpers/Forms.helper";

import { AppContext } from "../States/Provider/App.context";
const initialValues = {
  email: "",
};
const LoginScreen = (params) => {
  const { aksesUser, setCurrentAkses } = useContext(AppContext);
  const history = useHistory();

  const onSubmit = async (values) => {
    const filter = aksesUser?.data?.filter(
      (data) => data.email === values?.email
    );
    if (filter?.length > 0) {
      setCurrentAkses(filter[0]);
      history.replace("/");
    } else {
      alert("User tidak ada");
    }
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => {
          return (
            <div className='ui form'>
              <h3 className='text-center'>Sign In</h3>

              <div className='field'>
                <label>Email address</label>
                <input
                  type='email'
                  id='email'
                  {...formikText(props, "email")}
                  placeholder='Enter email'
                />
              </div>

              <div className='field'>
                <label>Password</label>
                <input
                  type='password'
                  id='password'
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
              <p className='forgot-password text-right'>
                Dont have an account? <Link to='/signUp'>Register</Link>
              </p>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginScreen;
