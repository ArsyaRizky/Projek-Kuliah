import React, { useContext, useState } from "react";
import { AppContext } from "../../States/Provider/App.context";
import CreateKodeProsedur from "../Form/KodeProsedur.form";

const KodeProsedur = () => {
  const [add, setAdd] = useState(false);

  const { prosedurKode } = useContext(AppContext);

  return (
    <>
      {add ? (
        <CreateKodeProsedur setVisible={() => setAdd(false)} />
      ) : (
        <>
          <button onClick={() => setAdd(true)} className='ui primary button'>
            Tambah
          </button>
          <table class='ui single line small table'>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama & Kode Prosedur</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {prosedurKode?.data?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data?.name}</td>
                    <td>{data?.status}</td>
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

export default KodeProsedur;
