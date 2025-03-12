import React from "react";
import Form from "../../molecules/form/index";
import fieldInfo from "../../utils/Constants/fields";
import { useValidation } from "../../hooks/useValidation";
import { useFormData } from "../../hooks/useFormData";
import { getSection } from "../../utils/sectionUtils";
import { createNewData } from "../../utils/addIdUtils";


function Modal({ onSubmit, type, editingItem = null, Onclose, isopen, handlesubmit, handledelete }) {

    const sectionConfig = getSection(type);
    const { data, handleChange } = useFormData( editingItem, sectionConfig, fieldInfo);
   const { errors, setErrors, validateData, handleValidation } = useValidation(sectionConfig, fieldInfo);
   
    function handlechange(key, value) {
        handleValidation(key, value);
        handleChange(key, value);
    }
    function addData(data){
        const newData = editingItem ? data : createNewData(data);
        return newData;
    }
   function handleModalSubmit() {
     
        const newErrors = validateData(data);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        const newData = addData(data);
        
        handlesubmit(type, newData);
        Onclose();
    }

    function handleDeleteItem() {
        handledelete(type, data);
        Onclose();
    }

    return (
        ( isopen && 
           (
            <Form
                onSubmit={onSubmit}
                type={type}
                editingItem={editingItem}
                Onclose={Onclose}
                isopen={isopen}
                data={data}
                formerrors={errors}
                handlechange={handlechange}
                handledelete={handleDeleteItem}
                handlesubmit={handleModalSubmit}
            >
            </Form>
           )
        )
    );
}

export default Modal;
