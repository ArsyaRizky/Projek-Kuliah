import react, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Table } from "semantic-ui-react";
import Prosedur from "../Components/Table/Prosedur";
import { AppContext } from "../States/Provider/App.context";

const ProsedurScreen = () => {
  const { currentAkses } = useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    if (currentAkses?.data == null) {
      history.replace("/Login");
    }
  }, [currentAkses]);

  return (
    <div style={{ overflowX: "scroll" }}>
      <hr />
      <Prosedur />
    </div>
  );
};

export default ProsedurScreen;
