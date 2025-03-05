import { useState, useEffect } from "react";

export function useFormData(type, editingItem, sectionConfig, fieldInfo) {
    function initialData(editingItem) {
        return sectionConfig.fieldIds.reduce((acc, fieldId) => {
            const fieldConfig = fieldInfo[fieldId];
            if (!fieldConfig) return acc;
            return {
                ...acc,
                [fieldConfig.name]: editingItem ? editingItem[fieldConfig.name] : "",
            };
        }, {});
    }

    const [data, setData] = useState(initialData(editingItem));

    useEffect(() => {
        if (editingItem != null) {
            setData(editingItem);
        }
    }, [editingItem]);

    function handleChange(key, value) {
        setData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    }

    return { data, setData, handleChange };
}
