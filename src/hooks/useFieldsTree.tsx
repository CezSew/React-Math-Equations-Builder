import React, { useEffect, useState } from "react";
import { IField, IFieldsTree } from "../App.model";

const rootField: IFieldsTree = {
    '0': {
        type: 'rootField',
        childFields: [],
        value: null,
        id: 0,
    },
};

const useFieldsTree = () => {
    const [fieldsTree, setFieldsTree] = useState<IFieldsTree>(rootField);
    const [lastAssignedId, setLastAssignedId] = useState(0); 

    const handleAddFieldToTree = (field: IField, parentField: IField): void => {
        setFieldsTree((prevTree: IFieldsTree) => {
            const tree = Object.assign(prevTree, {});

            if (!tree[`${field.id}`]) {
                tree[`${field.id}`] = field;
                tree[`${parentField.id}`].childFields.push(field.id);
                setLastAssignedId((prevState: number) => prevState + 1);
            }

            console.log(tree)

            return tree;
        });
    };

    return { fieldsTree, handleAddFieldToTree, lastAssignedId };
};

export default useFieldsTree;