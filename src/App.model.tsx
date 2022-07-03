export type TFieldType = 'rootField' | 'power' | 'fraction' | 'root' | 'text';

export interface IField {
    childFields: number[];
    type: TFieldType;
    value: string;
    id: number;
}

export interface IFieldsTree {
    [id: string]: IField;
}