/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();



const AppProvider = ({ children }) => {
    
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const fetchUsers = async (url) => {
        setLoading(true)
          try {
            const resp = await fetch(url);
            const users = await resp.json();
            setData(users);
            setLoading(false)
          } catch (error) {
            setLoading(false)
          }
      }

    return <AppContext.Provider value={{
        loading,
        setLoading,
        data,
        setData,
        fetchUsers
    }}>
        {children}

    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
