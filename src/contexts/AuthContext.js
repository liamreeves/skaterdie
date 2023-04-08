import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext({ user: null });

const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false,
      });


      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          dispatch({ type: "AUTH_IS_READY", payload: user });
        });
        return unsubscribe;
      }, []);

    return (
      <AuthContext.Provider value={{...state, dispatch}}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContextProvider;