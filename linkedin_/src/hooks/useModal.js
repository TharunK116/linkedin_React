import { useState } from "react";

export function useModal(handleEdit) {
    const [open, setOpen] = useState(false);
    
    function onAdd() {
        setOpen(true);
    }

    function onClose() {
        setOpen(false);
        handleEdit(null);
    }

    function editHandler(item) {
        setOpen(true);
        handleEdit(item);
    }

    return { open, onAdd, onClose, editHandler };
}
