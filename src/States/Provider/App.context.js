import { types } from "./../../Constants/App.constant";
import React, { createContext, useReducer } from "react";
import {
  aksesUserState,
  currentUserState,
  departmentState,
  initialState,
  prosedurKategoriState,
  prosedurKodeState,
  UPPOnlineState,
} from "./../Reducer/App.reducers";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [department, dispatchDepartment] = useReducer(
    departmentState,
    initialState.department
  );

  const [prosedurKode, dispatchProsedur] = useReducer(
    prosedurKodeState,
    initialState.kodeProsedur
  );

  const [prosedurKategori, dispatchKategori] = useReducer(
    prosedurKategoriState,
    initialState.kategori
  );

  const [aksesUser, dispatchAksesUser] = useReducer(
    aksesUserState,
    initialState.userAkses
  );

  const [uppOnline, dispatchUPPOnline] = useReducer(
    UPPOnlineState,
    initialState.uppOnline
  );

  const [currentAkses, dispatchCurrentAkses] = useReducer(
    currentUserState,
    initialState.currentAkses
  );

  const addDepartment = async (data) => {
    dispatchDepartment({ type: types.SET_DEPARTMENT_SUCCESS, data: data });
  };

  const addProsedurKode = async (data) => {
    dispatchProsedur({ type: types.SET_PROSEDUR_KODE_SUCCESS, data: data });
  };

  const addProsedurKategori = async (data) => {
    dispatchKategori({ type: types.SET_PROSEDUR_KATEGORI_SUCCESS, data: data });
  };

  const addAksesUser = async (data) => {
    dispatchAksesUser({ type: types.SET_USER_AKSES_SUCCESS, data: data });
  };

  const setCurrentAkses = async (data) => {
    dispatchCurrentAkses({ type: types.SET_CURRENT_AKSES_SUCCESS, data: data });
  };

  const setUppOnline = async (data) => {
    dispatchUPPOnline({ type: types.SET_UPP_ONLINE_SUCCESS, data: data });
  };

  // if (department?.loading) {
  //   return null;
  // }
  return (
    <AppContext.Provider
      value={{
        department,
        prosedurKode,
        prosedurKategori,
        aksesUser,
        currentAkses,
        uppOnline,
        addDepartment,
        addProsedurKode,
        addProsedurKategori,
        addAksesUser,
        setCurrentAkses,
        setUppOnline,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
