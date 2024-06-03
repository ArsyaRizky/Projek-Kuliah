import React, { useContext, useState } from "react";
import { AppContext } from "../../States/Provider/App.context";
import CreateAksesUser from "../Form/AksesUser.form";

const ListAkses = () => {
  const [add, setAdd] = useState(false);

  const { aksesUser } = useContext(AppContext);
  return (
    <>
      {add ? (
        <CreateAksesUser setVisible={() => setAdd(false)} />
      ) : (
        <>
          <button onClick={() => setAdd(true)} className='ui primary button'>
            Tambah
          </button>
          <table class='ui single line small table'>
            <thead>
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Email</th>
                <th>Level</th>
                <th>Departemen</th>
                <th>Nama Lengkap</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {aksesUser?.data?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data?.username}</td>
                    <td>{data?.email}</td>
                    <td>{data?.level}</td>
                    <td>{data?.department}</td>
                    <td>{data?.nama_lengkap}</td>
                    <td>
                      <div class='html ui'>
                        <button class='ui secondary basic button'>
                          Edit Level
                        </button>
                        <button class='ui negative basic button'>Hapus</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default ListAkses;
