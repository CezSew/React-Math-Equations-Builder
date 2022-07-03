import React, { useEffect, useState } from "react";
import { Value } from "sass";
import { IField, IFieldsTree, TFieldType } from "../App.model";

const rootField: IFieldsTree = {
    '0': {
        type: 'rootField',
        childFields: [],
        value: '',
        id: 0,
    },
};

const useFieldsTree = () => {
    const [fieldsTree, setFieldsTree] = useState<IFieldsTree>(rootField);
    const [lastAssignedId, setLastAssignedId] = useState(0); 

    const createField = (type: TFieldType, parent: IField) => {
        switch(type) {
            case 'power':
                assignFields('power', ['text', 'text'], parent);
                break;
        }
    }

    const assignFields = (mainFieldType: TFieldType, types: TFieldType[], parent: IField) => {
        let assignedFieldsIds: number[] = []; 

        const mainField = {
            childFields: assignedFieldsIds,
            type: mainFieldType,
            id: lastAssignedId + 1,
            value: '',
        };

        const subfields: IField[] = types.map((type, index) => {
            const id = lastAssignedId + index + 2;
            assignedFieldsIds.push(id);

            return {
                childFields: [],
                value: '',
                type,
                id,
            }
        });

        mainField.childFields = assignedFieldsIds;

        const fields: IFieldsTree = {};

        [mainField, ...subfields].forEach(field => {
            fields[`${field.id}`] = field;
        })

        setFieldsTree(prevState => {
            const prevParentChildFields = prevState[`${parent.id}`].childFields;

            if (!prevState[`${mainField.id}`]) {

                if (!prevParentChildFields.includes(mainField.id)){
                    prevParentChildFields.push(mainField.id);
                }
            
                setLastAssignedId(assignedFieldsIds.slice(-1)[0]);
                return {...prevState, ...fields};
            }

            return prevState;
        });
    };

    const handleSetValueForFieldId = (value: string, id: number) => {
        console.log(value)
        console.log(fieldsTree)

        const tree = Object.assign(fieldsTree, {});
        tree[`${id}`].value = value;


        console.log(tree)
        setFieldsTree({...tree});
    };

    return { fieldsTree, lastAssignedId, createField, handleSetValueForFieldId };
};

export default useFieldsTree;