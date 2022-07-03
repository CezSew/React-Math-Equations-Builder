import './App.scss';
import React from 'react';
import { useState } from 'react';
import Field from './components/field/Field';
import { IField, IFieldsTree } from './App.model';
import { AppContext } from './context/appContext';
import useFieldsTree from './hooks/useFieldsTree';
import { useEffect } from 'react';

const App = () => {
    const { fieldsTree, lastAssignedId, createField } = useFieldsTree();
    const [activeField, setActiveField] = useState(0);

    const handleChangeActiveField = (fieldId: number, e: React.MouseEvent<Element, MouseEvent>) => {
        e.stopPropagation();
        setActiveField(fieldId);
    };

    return (
        <div className={`app`}>
            <AppContext.Provider value={{
                    handleChangeActiveField,
                    lastAssignedId,
                    createField,
                    activeField,
                    fieldsTree
                }}
            >
                <Field {...fieldsTree['0']} key={fieldsTree['0'].id}/>
            </AppContext.Provider>
        </div>
    );
}

export default App;
