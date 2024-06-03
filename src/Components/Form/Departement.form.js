import react, { useContext } from "react";
import { Formik } from "formik";

import { formikText } from "./../../Helpers/Forms.helper";
import { AppContext } from "../../States/Provider/App.context";
const initialValues = {
  name: "",
  status: true,
};
const CreateDepartement = (params) => {
  const { addDepartment } = useContext(AppContext);

  const onSubmit = async (values) => {
    addDepartment({
      name: values?.name,
      status: values?.status ? "Active" : "In Active",
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
                <label>Nama Departemen</label>
                <input {...formikText(props, "name")} type='text' />
              </div>

              <div className='field'>
                <label>Status</label>
                <select {...formikText(props, "status")}>
                  <option value={true}>Active</option>
                  <option value={false}>In Active</option>
                </select>
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

export default CreateDepartement;
