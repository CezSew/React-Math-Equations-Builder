import { IField, IFieldsTree } from "../App.model";

export interface IAppContext {
    handleAddFieldToTree: (field: IField, parent: IField) => void;
    handleChangeActiveField: (id: number) => void;
    fieldsTree: IFieldsTree;
    lastAssignedId: number;
    activeField: number;
}
