import React, { useState, useContext } from "react";
import { AppContext } from "../../States/Provider/App.context";

const Home = () => {
  const { uppOnline } = useContext(AppContext);

  return (
    <>
      <table class='ui single line small table'>
        <thead>
          <tr>
            <th>No.UPP</th>
            <th>Departemen</th>
            <th>Nama & Kode Prosedur</th>
            <th>Nama Dokumen</th>
            <th>Sebelum Perubahan</th>
            <th>Setelah Perubahan</th>
            <th>Alasan</th>
            <th>Attachment File</th>
          </tr>
        </thead>
        <tbody>
          {uppOnline?.data?.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data?.department}</td>
                <td>{data?.kode_prosedur}</td>
                <td>{data?.nama_dokumen}</td>
                <td>{data?.sebelum_perubahan}</td>
                <td>{data?.setelah_perubahan}</td>
                <td>{data?.alasan}</td>
                <td>{data?.attachment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
