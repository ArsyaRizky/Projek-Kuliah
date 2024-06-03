import react, { useContext, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { AppContext } from "../States/Provider/App.context";
import { useHistory } from "react-router";

import Home from "./../Components/Table/Home";

const HomeScreen = () => {
  const { currentAkses } = useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    if (currentAkses?.data == null) {
      history.replace("/Login");
    }
  }, [currentAkses]);

  return (
    <div>
      <div>
        <br />
        <h3>SOSIALISASI PERUBAHAN PROSEDUR TERBARU</h3>
        <hr />
        <Home />
      </div>
    </div>
  );
};

export default HomeScreen;
