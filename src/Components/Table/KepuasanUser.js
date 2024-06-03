import React, { useContext } from "react";
import { AppContext } from "../../States/Provider/App.context";

const Uppprocess = () => {
  const { uppOnline } = useContext(AppContext);

  return (
    <table class='ui single line small table'>
      <thead>
        <tr>
          <th>No</th>
          <th>Pengaju</th>
          <th>Tanggal UPP</th>
          <th>Departemen</th>
          <th>Email Pengaju</th>
          <th>Manager Approval</th>
          <th>Email Manager Aproval</th>
          <th>Kategori Prosedur</th>
          <th>Kode & Nama Prosedur</th>
          <th>Nama Dokumen</th>
          <th>Sebelum Perubahan</th>
          <th>Sesudah Perubahan</th>
          <th>Alasan</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {uppOnline?.data?.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data?.pengaju}</td>
              <td>{data?.tanggal_upp}</td>
              <td>{data?.department}</td>
              <td>{data?.email_pengaju}</td>
              <td>{data?.manager_approval}</td>
              <td>{data?.email_manager_approval}</td>
              <td>{data?.kategori}</td>
              <td>{data?.kode_prosedur}</td>
              <td>{data?.nama_dokumen}</td>
              <td>{data?.sebelum_perubahan}</td>
              <td>{data?.setelah_perubahan}</td>
              <td>{data?.alasan}</td>
              <td>
                <div class='html ui'>
                  <button class='ui primary basic button'>Process</button>
                  <button class='ui negative basic button'>Batal</button>
                  <button class='ui secondary basic button'>Edit</button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Uppprocess;
