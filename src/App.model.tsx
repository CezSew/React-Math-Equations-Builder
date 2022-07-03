export type TFieldType = 'rootField' | 'power' | 'fraction' | 'root';

export interface IField {
    value: null | string | number;
    childFields: number[];
    type: TFieldType;
    id: number;
}

export interface IFieldsTree {
    [id: string]: IField;
}