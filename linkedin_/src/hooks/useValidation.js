import { useState,useEffect } from "react";

export function useValidation(sectionConfig, fieldInfo) {

    function handleValidation(key, value) {
       
        const fieldConfig = fieldInfo.find((item)=>item.name===key);
        console.log(fieldConfig);
        if (fieldConfig && fieldConfig.validator) {
            const errorMessage = fieldConfig.validator(value);
            console.log('checking');
            setErrors((prevErrors) => ({
                ...prevErrors,
                [key]: errorMessage,
            }));
        }
    }
    
    function validateData(data) {
        const newErrors = {};

        sectionConfig.fieldIds.forEach((fieldId) => {
            const fieldConfig = fieldInfo[fieldId];
            if (fieldConfig?.validator) {
                const errorMessage = fieldConfig.validator(data[fieldConfig.name]);
                if (errorMessage) {
                    newErrors[fieldConfig.name] = errorMessage;
                }
            }
        });

        return newErrors;
    }

    const [errors, setErrors] = useState({});

   

    return { errors, setErrors, validateData, handleValidation };
}