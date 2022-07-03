import React from "react";
import { useContext } from "react";
import { IField } from "../../App.model";
import { AppContext } from "../../context/appContext";

const Field = ({ type, childFields, id, value }: IField) => {
    const {
        handleSetValueForFieldId,
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

        createField('power', { type, childFields, id, value });
    };

    const handleTypeValue = (e: React.KeyboardEvent<Element>) => {
        e.stopPropagation();

        console.log('handleTypeValue')
        console.log(value)

        const newValue = `${value}${e.key}`;

        handleSetValueForFieldId(newValue, id);
    };

    return (
        <>
            <div
                className={`field field--${type} ${activeField === id ? 'field--active' : ''}`}
                onClick={handleFieldClick}
                onKeyDown={handleTypeValue}
                tabIndex={id}
            >
                {activeField === id && (
                    <button onClick={handleClickAdd} className={`field__add-field`}>
                        {`${id}`}
                    </button>
                )}
            
                {value && (
                    <span className={`field__value`}>
                        {value}
                    </span>
                )}
               

                {childFields && childFields.map(fieldId => (
                    <Field key={fieldId} {...fieldsTree[`${fieldId}`]} id={fieldId} />
                ))}
            </div>
        </>
    );
};

export default Field;