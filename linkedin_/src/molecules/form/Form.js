import React from "react";
import Input from "../../atoms/input/index";
import Button from "../../atoms/buttton/index";
import HeaderCard from "../headerCard/index";
import { getFields } from "../../utils/sectionUtils";
import { getSection } from "../../utils/sectionUtils";
import './Form.css'

function Form({ onSubmit, type, editingItem, Onclose, isopen, handlesubmit, handlechange, data, formerrors, handledelete }) {
    const sectionConfig = getSection(type);
    const fields = getFields(sectionConfig);
   console.log('errors');
   console.log(formerrors);
    return (
        <div className="modal">
            <div className="modal-content">
                <HeaderCard
                    Tag="h2"
                    title={editingItem ? `Edit ${type}:` : `Add ${type}:`}
                    handleclick={Onclose}
                    classname="fa-solid fa-close"
                />
                <form className="modal-body" onSubmit={(e) => e.preventDefault()}>
                    {fields.map((field) => (
                        
                            <Input
                                key={field.id}
                                name={field.name}
                                classname={formerrors[field.id]?"err":""}
                                placeholder={field.placeholder}
                                type={field.type}
                                value={data[field.id] || ""}
                                onChange={(e) => handlechange(field.id, e.target.value)}
                                required={field.required}

                            >
                                <span> <p className="error">{formerrors[field.id]}</p></span>
                            </Input>
                        
                    ))}
                </form>
                <div>
                    <Button
                        classname="btn"
                        handleclick={() => handlesubmit(type, data)}
                        type="submit"
                    >
                        {editingItem ? "Update" : "Add"}
                    </Button>
                    {editingItem && <Button
                        classname="btn"
                        handleclick={() => handledelete(type, data)}
                        type="submit"
                    >
                        Delete
                    </Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Form;
