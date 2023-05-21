import { createContext, useContext, useState, useReducer } from "react";
// import createDataContext from "./createDataContext";
import reducer from "./reducer";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const blogPosts = [];
  const initialState = {
    items: [],
    name: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const addMe = (title, content) => {
    dispatch({ type: "ADDARRAY", payload: { title, content } });
  };

  const deleteMe = (id) => {
    // console.log("remove", id);
    dispatch({ type: "DELETEARRAY", payload: { id } });
  };

  return (
    <AppContext.Provider value={{ blogPosts, ...state, addMe, deleteMe }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;