import React,{ createContext, useReaducer} from "react";

import Readucer from './Readucer'
//initial state
const initialState = {
  transaction: [
       { id: 1, text: 'Flower', amount: -20 },
       { id: 2, text: 'Salary', amount: 300 },
       { id: 3, text: 'Book', amount: -10 },
       { id: 4, text: 'Camera', amount: 150 }

  ]
}
// Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReaducer(Readucer, initialState);

  function deleteTranscaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    })
  }

  return(<GlobalContext.Provider value={{
    transaction: state.transactions,
    deleteTranscaction
  }}>
    {children}
  </GlobalContext.Provider>

  )
}