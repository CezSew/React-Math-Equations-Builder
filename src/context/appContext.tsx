import { createContext } from "react";
import { IAppContext } from "./appContext.model";

const defaultState = {
    handleChangeActiveField: () => {},
    handleAddFieldToTree: () => {},
    lastAssignedId: 0,
    fieldsTree: {},
    activeField: 0,
}

export const AppContext = createContext<IAppContext>(defaultState);