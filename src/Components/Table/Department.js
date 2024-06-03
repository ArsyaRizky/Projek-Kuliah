import React, { useState, useContext } from "react";
import { AppContext } from "../../States/Provider/App.context";
import CreateDepartement from "../Form/Departement.form";

const Departemen = () => {
  const [add, setAdd] = useState(false);
  const { department } = useContext(AppContext);

  return (
    <>
      {add ? (
        <CreateDepartement setVisible={() => setAdd(false)} />
      ) : (
        <>
          <button className='ui primary button' onClick={() => setAdd(true)}>
            Tambah
          </button>
          <table class='ui single line small table'>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Departemen</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {department?.data?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.status}</td>
                    <td>
                      <div class='html ui'>
                        <button class='ui primary basic button'>Active</button>
                        <button class='ui negative basic button'>
                          In Active
                        </button>
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

export default Departemen;
