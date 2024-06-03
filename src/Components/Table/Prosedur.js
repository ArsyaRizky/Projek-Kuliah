import React, { useState, useContext } from "react";
import { AppContext } from "../../States/Provider/App.context";

const Prosedur = () => {
  const { uppOnline } = useContext(AppContext);

  return (
    <>
      <table class='ui single line small table'>
        <thead>
          <tr>
            <th>No</th>
            <th>Departemen</th>
            <th>Nama Dokumen</th>
            <th>Kategori Prosedur</th>
            <th>Nama & Kode Prosedur</th>
            <th>No.Revisi</th>
            <th>Tanggal Revisi</th>
            <th>Attachment File</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {uppOnline?.data?.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data?.department}</td>
                <td>{data?.nama_dokumen}</td>
                <td>{data?.kategori}</td>
                <td>{data?.kode_prosedur}</td>
                <td>{data?.revisi}</td>
                <td>{data?.tanggal_revisi}</td>
                <td>{data?.attachment}</td>
                <td>
                  <div class='html ui'>
                    <button class='ui secondary basic button'>Edit</button>
                    <button class='ui primary basic button'>Active</button>
                    <button class='ui positive basic button'>History</button>
                    <button class='ui negative basic button'>Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Prosedur;
