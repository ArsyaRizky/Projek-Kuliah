import React, { useContext, useEffect, useMemo, useState } from "react";
import Uppprocess from "../Components/Table/Uppprocess";
import ApprovalPic1 from "../Components/Table/ApprovalPic1";
import ApprovalPic2 from "../Components/Table/ApprovalPic2";
import ApprovalPic3 from "../Components/Table/ApprovalPic3";
import UppApproved from "../Components/Table/UppApproved";
import UppChecked from "../Components/Table/UppChecked";
import KepuasanUser from "../Components/Table/KepuasanUser";
import UppClosed from "../Components/Table/UppClosed";
import UppBatal from "../Components/Table/UppBatal";
import Createupp from "../Components/Createupp/Createupp";
import { AppContext } from "../States/Provider/App.context";
import { useHistory } from "react-router";
import KepuasanUserForm from "../Components/Form/KepuasanUser.form";

const menu = [
  {
    name: "Create UPP",
    alias: "create",
    level: ["Admin", "User"],
  },
  {
    name: "UPP Process",
    alias: "uppProcess",
    level: ["Admin"],
  },
  {
    name: "Approval PIC 1",
    alias: "approval1",
    level: ["Admin", "Approval 1"],
  },
  {
    name: "Approval PIC 2",
    alias: "approval2",
    level: ["Admin", "Approval 2"],
  },
  {
    name: "Approval PIC 3",
    alias: "approval3",
    level: ["Admin", "Approval 3"],
  },
  {
    name: "UPP Approved",
    alias: "approved",
    level: ["Admin"],
  },
  {
    name: "UPP Checked",
    alias: "check",
    level: ["Admin"],
  },
  {
    name: "Kepuasan User",
    alias: "kepuasanUser",
    level: ["Admin", "User"],
  },
  {
    name: "UPP Closed",
    alias: "closed",
    level: ["Admin", "Approval 1", "Approval 2", "Approval 3", "User"],
  },
  {
    name: "UPP batal",
    alias: "batal",
    level: ["Admin", "Approval 1", "Approval 2", "Approval 3", "User"],
  },
];

const UPPScreen = ({ params }) => {
  const [scene, setScene] = useState("create");
  const { currentAkses } = useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    if (currentAkses?.data == null) {
      history.replace("/Login");
    }
  }, [currentAkses]);

  const RenderScene = () => {
    switch (scene) {
      case "create":
        return <Createupp />;
      case "uppProcess":
        return <Uppprocess />;
      case "approval1":
        return <ApprovalPic1 />;
      case "approval2":
        return <ApprovalPic2 />;
      case "approval3":
        return <ApprovalPic3 />;
      case "approved":
        return <UppApproved />;
      case "check":
        return <UppChecked />;
      case "kepuasanUser":
        return <KepuasanUserForm />;
      case "closed":
        return <UppClosed />;
      case "batal":
        return <UppBatal />;
      default:
        return null;
    }
  };
  return (
    <div className='ui grid'>
      <div className='four wide column'>
        <div class='ui vertical pointing menu'>
          {menu.map((data) => {
            const include = data?.level.includes(currentAkses?.data?.level);

            if (include) {
              return (
                <a
                  class={`item ${scene == data?.alias && "active"}`}
                  onClick={() => setScene(data?.alias)}
                >
                  {data?.name}
                </a>
              );
            }
            return null;
          })}
          {/* <a
            class={`item ${scene == "create" && "active"}`}
            onClick={() => setScene("create")}
          >
            Create New UPP
          </a>
          <a
            class={`item ${scene == "uppProcess" && "active"}`}
            onClick={() => setScene("uppProcess")}
          >
            UPP Process
          </a>
          <a
            class={`item ${scene == "approval1" && "active"}`}
            onClick={() => setScene("approval1")}
          >
            Approval PIC 1
          </a>
          <a
            class={`item ${scene == "approval2" && "active"}`}
            onClick={() => setScene("approval2")}
          >
            Approval PIC 2
          </a>
          <a
            class={`item ${scene == "approval3" && "active"}`}
            onClick={() => setScene("approval3")}
          >
            Approval PIC 3
          </a>
          <a
            class={`item ${scene == "approved" && "active"}`}
            onClick={() => setScene("approved")}
          >
            UPP Approved
          </a>
          <a
            class={`item ${scene == "check" && "active"}`}
            onClick={() => setScene("check")}
          >
            UPP Check
          </a>
          <a
            class={`item ${scene == "kepuasanUser" && "active"}`}
            onClick={() => setScene("kepuasanUser")}
          >
            Kepuasan User
          </a>
          <a
            class={`item ${scene == "closed" && "active"}`}
            onClick={() => setScene("closed")}
          >
            UPP Closed
          </a>
          <a
            class={`item ${scene == "batal" && "active"}`}
            onClick={() => setScene("batal")}
          >
            UPP Batal
          </a> */}
        </div>
      </div>
      <div
        className='twelve wide column'
        style={{ maxWidth: "80%", overflowX: "scroll" }}
      >
        <RenderScene />
        {/* <Createupp
    {...this.state}
    handleChange={this.handleChange}
    handleSubmit={this.handleSubmit}
  /> */}
      </div>
    </div>
  );
};

export default UPPScreen;
