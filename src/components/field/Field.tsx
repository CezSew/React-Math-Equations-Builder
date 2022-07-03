import React from "react";
import { useContext } from "react";
import { IField } from "../../App.model";
import { AppContext } from "../../context/appContext";

const Field = ({ type, childFields, id }: IField) => {
    const {
        handleChangeActiveField,
        createField,
        activeField,
        fieldsTree,
    } = useContext(AppContext);

    const handleFieldClick = (e: React.MouseEvent<Element, MouseEvent>) => {
        handleChangeActiveField(id, e);
    };

    const handleClickAdd = (e: React.MouseEvent<Element, MouseEvent>) => {
        e.stopPropagation();

        createField('power', { type, childFields, id });
    }

    return (
        <>
            <div
                className={`field field--${type} ${activeField === id ? 'field--active' : ''}`}
                onClick={handleFieldClick}
            >
                <button onClick={handleClickAdd}>
                    {`add field for ${id}`}
                </button>

                <div>
                    {type}
                </div>

                <br/>

                {childFields && childFields.map(fieldId => (
                    <Field key={fieldId} {...fieldsTree[`${fieldId}`]} id={fieldId} />
                ))}
            </div>
        </>
    );
};

export default Field;