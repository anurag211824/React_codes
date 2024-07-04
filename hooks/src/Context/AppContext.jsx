// AppContext.js
import { createContext } from "react";

// Creating context
export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "9334759512";
    const name = "Anurag Kumar";

    return (
        <AppContext.Provider value={{ phone, name }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
