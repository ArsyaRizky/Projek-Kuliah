import react, { useContext } from "react";
import { Formik } from "formik";

import { formikText } from "../../Helpers/Forms.helper";
import { AppContext } from "../../States/Provider/App.context";
const initialValues = {
  username: "",
  email: "",
  level: "",
  department: "",
  nama_lengkap: "",
};
const CreateAksesUser = (params) => {
  const { addAksesUser, department } = useContext(AppContext);

  const onSubmit = async (values) => {
    addAksesUser({
      username: values?.username,
      email: values?.email,
      level: values?.level,
      department: values?.department,
      nama_lengkap: values?.nama_lengkap,
    });
    params.setVisible();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => {
          return (
            <div className='ui form'>
              <h3 className='text-left'>Create Department</h3>

              <div className='field'>
                <label>Username</label>
                <input {...formikText(props, "username")} type='text' />
              </div>

              <div className='field'>
                <label>Email</label>
                <input {...formikText(props, "email")} type='text' />
              </div>

              <div className='field'>
                <label>Level</label>
                <select {...formikText(props, "level")}>
                  <option value={"Admin"}>Admin</option>
                  <option value={"Approval 1"}>Approval 1</option>
                  <option value={"Approval 2"}>Approval 2</option>
                  <option value={"Approval 3"}>Approval 3</option>
                </select>
              </div>

              <div className='field'>
                <label>Departemen</label>
                <select {...formikText(props, "department")}>
                  {department?.data?.map((data) => {
                    return <option value={data?.name}>{data?.name}</option>;
                  })}
                </select>
              </div>

              <div className='field'>
                <label>Nama Lengkap</label>
                <input {...formikText(props, "nama_lengkap")} type='text' />
              </div>

              <button
                onClick={props.submitForm}
                type='submit'
                className='ui primary button'
              >
                Submit
              </button>
              <button
                onClick={() => params.setVisible()}
                type='submit'
                className='ui secondary button'
              >
                Cancel
              </button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateAksesUser;
