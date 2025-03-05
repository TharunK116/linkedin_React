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
                                key={field.name}
                                name={field.name}
                                classname={formerrors[field.name]?"err":""}
                                placeholder={field.placeholder}
                                type={field.type}
                                value={data[field.name] || ""}
                                onChange={(e) => handlechange(field.name, e.target.value)}
                                required={field.required}

                            >
                                <span> <p className="error">{formerrors[field.name]}</p></span>
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
