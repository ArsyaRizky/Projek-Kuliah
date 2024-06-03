import React, { useContext, useEffect, useMemo, useState } from "react";

import Departemen from "../Components/Table/Department";
import KodeProsedur from "../Components/Table/KodeProsedur";
import KategoriProsedur from "../Components/Table/KategoriProsedur";
import ListAkses from "../Components/Table/ListAkses";
import { AppContext } from "../States/Provider/App.context";
import { useHistory } from "react-router";

const AdminScreen = ({ params }) => {
  const [scene, setScene] = useState("departement");
  const { currentAkses } = useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    if (currentAkses?.data == null) {
      history.replace("/Login");
    }
  }, [currentAkses]);

  const RenderScene = () => {
    switch (scene) {
      case "departement":
        return <Departemen />;
      case "prosedur":
        return <KodeProsedur />;
      case "kategori":
        return <KategoriProsedur />;
      case "akses":
        return <ListAkses />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className='ui grid'>
        <div className='four wide column'>
          <div class='ui vertical pointing menu'>
            <a
              class={`item ${scene == "departement" && "active"}`}
              onClick={() => setScene("departement")}
            >
              LIST DEPARTEMEN
            </a>
            <a
              class={`item ${scene == "prosedur" && "active"}`}
              onClick={() => setScene("prosedur")}
            >
              LIST NAMA & KODE PROSEDUR
            </a>
            <a
              class={`item ${scene == "kategori" && "active"}`}
              onClick={() => setScene("kategori")}
            >
              LIST KATEGORI PROSEDUR
            </a>
            <a
              class={`item ${scene == "akses" && "active"}`}
              onClick={() => setScene("akses")}
            >
              LIST AKSES
            </a>
          </div>
        </div>
        <div className='twelve wide column' style={{ maxWidth: "80%" }}>
          <RenderScene />
        </div>
      </div>
    </>
  );
};

export default AdminScreen;
