import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { IField } from "../../App.model";
import { AppContext } from "../../context/appContext";

const Field = ({ type, value, childFields, id }: IField) => {
    const {
        handleChangeActiveField,
        handleAddFieldToTree,
        lastAssignedId,
        activeField,
        fieldsTree,
    } = useContext(AppContext);

    const handleFieldClick = () => {
        handleChangeActiveField(id);
    };

    const handleClickAdd = () => {
        handleAddFieldToTree({
            type: 'power',
            value: 5,
            id: lastAssignedId + 1,
            childFields: []
        }, { type, value, childFields, id })
    }

    return (
        <>
            <div
                className={`field field--${type} ${activeField === id ? 'field--active' : ''}`}
                onClick={handleFieldClick}
            >
                {type}
            </div>

            <button onClick={handleClickAdd}>
                add field
            </button>

            <br/>

            {childFields.map(fieldId => (
                <Field key={fieldId} {...fieldsTree[fieldId]} id={fieldId} />
            ))}
        </>
    );
};

export default Field;