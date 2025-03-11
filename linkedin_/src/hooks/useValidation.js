import { useState,useEffect } from "react";

export function useValidation(sectionConfig, fieldInfo) {

    function handleValidation(key, value) {
        const fieldConfig = fieldInfo.find((item)=>item.id===key);
        if (fieldConfig && fieldConfig.validator) {
            const errorMessage = fieldConfig.validator(value);
            setErrors((prevErrors) => ({
                ...prevErrors,
                [key]: errorMessage,
            }));
        }
    }
    
    function validateData(data) {
        const newErrors = {};
        sectionConfig.fieldIds.forEach((fieldId) => {
            const fieldConfig = fieldInfo.find((item)=>item.id===fieldId);
           
            if (fieldConfig?.validator) {
                
                const errorMessage = fieldConfig.validator(data[fieldConfig.id]);
                if (errorMessage) {
                    newErrors[fieldConfig.id] = errorMessage;
                }
            }

            const startDate = data["START_DATE"];
            const endDate = data["END_DATE"];
            if (startDate&&endDate && new Date(startDate) > new Date(endDate)) {
                newErrors["END_DATE"] = "End date cannot be earlier than the start date.";
            }
          
        });

        return newErrors;
    }
    const [errors, setErrors] = useState({});

   

    return { errors, setErrors, validateData, handleValidation };
}