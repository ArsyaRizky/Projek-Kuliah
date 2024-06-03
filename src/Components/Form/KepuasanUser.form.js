import react, { useContext } from "react";
import { Formik } from "formik";

import { formikText } from "../../Helpers/Forms.helper";
import { AppContext } from "../../States/Provider/App.context";
const initialValues = {
  alasan: "",
  status: true,
};
const KepuasanUserForm = (params) => {
  const { addDepartment } = useContext(AppContext);

  const onSubmit = async (values) => {};
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => {
          return (
            <div className='ui form'>
              <h3 className='text-left'>Form Kepuasan</h3>

              <div class='ui checked radio checkbox segment'>
                <input
                  type='radio'
                  checked=''
                  class='hidden'
                  readonly=''
                  tabindex='0'
                />
                <label>Puas</label>
                <input
                  type='radio'
                  checked=''
                  class='hidden'
                  readonly=''
                  tabindex='0'
                />
                <label>Tidak Puas</label>
              </div>

              <div className='field'>
                <label>Alasan</label>
                <input {...formikText(props, "name")} type='text' />
              </div>

              <button
                onClick={props.submitForm}
                type='submit'
                className='ui primary button'
              >
                Submit
              </button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default KepuasanUserForm;
