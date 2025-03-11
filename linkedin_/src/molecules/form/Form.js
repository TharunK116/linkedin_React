import React from "react";
import Input from "../../atoms/input/index";
import Button from "../../atoms/buttton/index";
import HeaderCard from "../headerCard/index";
import { getFields } from "../../utils/sectionUtils";
import { getSection } from "../../utils/sectionUtils";
import './Form.css'

function Form({  type, editingItem, Onclose, handlesubmit, handlechange, data, formerrors, handledelete }) {
    const sectionConfig = getSection(type);
    const fields = getFields(sectionConfig);
    return (
        <div className="modal">
            <div className="modal-content">
                <HeaderCard
                 className="modal-header"
                    Tag="h2"
                    title={editingItem ? `Edit ${type}:` : `Add ${type}:`}
                    handleclick={Onclose}
                    classname="fa-solid fa-close"
                    btnstyle={
                        {
                            padding:"0px 0px",
                            margin:"0px 0px"
                        }
                    }
                    style={{
                       padding:"0px 0px",
                        fontWeight: "bold"
                    }}
                />
                <form className="modal-body" onSubmit={(e) => e.preventDefault()}>
                    {fields.map((field) => (
                        
                            <Input
                                key={field.id}
                                name={field.name}
                                classname={formerrors[field.id]?"err":""}
                                placeholder={field.placeholder}
                                Type={field.type}
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
                        classname="btn form-btn"
                        handleclick={() => handlesubmit()}
                        type="submit"
                    >
                        {editingItem ? "Update" : "Add"}
                    </Button>
                    {editingItem && <Button
                        classname="btn"
                        handleclick={() => handledelete()}
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
