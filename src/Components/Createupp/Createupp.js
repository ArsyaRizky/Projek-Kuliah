import react, { useContext } from "react";
import { Formik } from "formik";
import { AppContext } from "../../States/Provider/App.context";
import { formikText } from "../../Helpers/Forms.helper";

const initialValues = {
  tanggal_upp: "21/10/2021",
  department: "",
  pengaju: "",
  email_pengaju: "",
  manager_approval: "",
  email_manager_approval: "",
  kategori: "",
  kode_prosedur: "",
  nama_dokumen: "ayam",
  sebelum_perubahan: "",
  setelah_perubahan: "",
  alasan: "",
  attachment: "",
  tanggal_permohonan: "21/10/2021",
  email_approval_pic_1: "ayam@ayam.com",
  tanggal_approval_pic_1: "21/10/2021",
  tanggal_reject_pic_1: "21/10/2021",
  alasan_reject_pic_1: "ayam",
  email_approval_pic_2: "ayam@ayam.com",
  tanggal_approval_pic_2: "21/10/2021",
  tanggal_reject_pic_2: "21/10/2021",
  alasan_reject_pic_2: "ayam",
  email_approval_pic_3: "ayam@ayam.com",
  tanggal_approval_pic_3: "21/10/2021",
  tanggal_reject_pic_3: "21/10/2021",
  alasan_reject_pic_3: "ayam",
  tanggal_sosialisasi: "21/10/2021",
  attachment_prosedur: "ayam",
  revisi: "ayam",
  tanggal_revisi: "21/10/2021",
  evaluasi_kepuasan: "ayam",
  alasan_not_ok: "ayam",
};
const Createupp = () => {
  const { department, prosedurKode, prosedurKategori, setUppOnline } =
    useContext(AppContext);

  const onSubmit = async (values) => {
    setUppOnline(values);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(props) => {
          return (
            <div className='ui form'>
              <h3 className='text-left'>Create UPP</h3>

              <div className='field'>
                <label>Tanggal UPP</label>
                <input
                  {...formikText(props, "tanggal_upp")}
                  type='date'
                  id='date'
                  className='form-control'
                />
              </div>

              <div class='field'>
                <label for='exampleFormControlSelect1'>Departemen</label>
                <select
                  {...formikText(props, "department")}
                  class='form-control'
                  id='FormControlSelect1'
                >
                  <option value={""}>Pilih Department</option>
                  {department?.data?.map((data) => {
                    return <option value={data?.name}>{data?.name}</option>;
                  })}
                </select>
              </div>

              <div className='field'>
                <label>Pengaju</label>
                <input
                  {...formikText(props, "pengaju")}
                  type='text'
                  id='pengaju'
                  className='form-control'
                />
              </div>

              <div className='field'>
                <label>Email Pengaju</label>
                <input
                  {...formikText(props, "email_pengaju")}
                  type='email'
                  id='email'
                  className='form-control'
                />
              </div>

              <div className='field'>
                <label>Manager Approval</label>
                <input
                  {...formikText(props, "manager_approval")}
                  type='text'
                  id='manager'
                  className='form-control'
                />
              </div>

              <div className='field'>
                <label>Email Manager Approval</label>
                <input
                  {...formikText(props, "email_manager_approval")}
                  type='email'
                  id='emailmanager'
                  className='form-control'
                />
              </div>

              <div class='field'>
                <label for='exampleFormControlSelect1'>Kategori Prosedur</label>
                <select
                  {...formikText(props, "kategori")}
                  class='form-control'
                  id='exampleFormControlSelect1'
                >
                  <option value={""}>Pilih Kategori</option>
                  {prosedurKategori?.data?.map((data) => {
                    return <option value={data?.name}>{data?.name}</option>;
                  })}
                </select>
              </div>

              <div class='field'>
                <label for='exampleFormControlSelect2'>
                  Kode & Nama Prosedur
                </label>
                <select
                  {...formikText(props, "kode_prosedur")}
                  class='form-control'
                  id='exampleFormControlSelect2'
                >
                  <option value={""}>Pilih Kode</option>
                  {prosedurKode?.data?.map((data) => {
                    return <option value={data?.name}>{data?.name}</option>;
                  })}
                </select>
              </div>

              <div className='field'>
                <label>Nama Dokumen</label>
                <input
                  {...formikText(props, "name_dokumen")}
                  type='text'
                  id='dokumen'
                  className='form-control'
                  placeholder='Jika prosedur exist, pastikan nama file copy dari prosedur'
                />
              </div>

              <div className='field'>
                <label>Sebelum Perubahan</label>
                <input
                  {...formikText(props, "sebelum_perubahan")}
                  type='text'
                  id='sebelumperbuahan'
                  className='form-control'
                />
              </div>

              <div className='field'>
                <label>Sesudah Perubahan</label>
                <input
                  {...formikText(props, "setelah_perubahan")}
                  type='text'
                  id='sesudahperbuahan'
                  className='form-control'
                />
              </div>

              <div className='field'>
                <label>Alasan</label>
                <input
                  {...formikText(props, "alasan")}
                  type='text'
                  id='alasan'
                  className='form-control'
                />
              </div>

              <div className='field'>
                <label>Attachment</label>
                <input
                  {...formikText(props, "attachment")}
                  type='file'
                  id='alasan'
                  className='form-control'
                />
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

export default Createupp;
