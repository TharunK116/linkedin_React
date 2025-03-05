import React from "react";
import Button from "../../atoms/buttton/Button";
import { getFields } from "../../utils/sectionUtils";
import { getSection } from "../../utils/sectionUtils";
import { IMGSRC } from "./Constants/cardContent.logo";
import './CardContent.css';
function CardContent({ type, data, onEdit }) {

    const sectionConfig = getSection(type);
    const fields = getFields(sectionConfig);
    return (
        <div className={`${type}-item `}>

            {(type === "experience" || type === "education") && (
                <img
                    className='content-logo'
                    src={IMGSRC}
                    alt={`${type} logo`}
                />
            )}


            <div className='experience-info'>
                {fields.map((field) => (
                    (<p key={field.name} className={`${type}-${field}`}>
                        <strong>{field.name}: </strong>
                        {data && data[field.name] || "N/A"}
                    </p>
                    )
                ))}

            </div>

            <div className="edit-btn-container">
                <Button handleclick={onEdit} className={`edit-${type}-btn`}>
                    <i className="fa-solid fa-pencil"></i>
                </Button>
            </div>


  

        </div>
    );
}

export default CardContent;
