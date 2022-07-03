import { IField, IFieldsTree, TFieldType } from "../App.model";

export interface IAppContext {
    handleChangeActiveField: (id: number, e: React.MouseEvent<Element, MouseEvent>) => void;
    handleSetValueForFieldId: (value: string, id: number) => void;
    createField: (type: TFieldType, parent: IField) => void;
    fieldsTree: IFieldsTree;
    lastAssignedId: number;
    activeField: number;
}
