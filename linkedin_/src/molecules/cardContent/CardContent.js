import React from "react";
import Button from "../../atoms/buttton/Button";
import { getFields } from "../../utils/sectionUtils";
import { getSection } from "../../utils/sectionUtils";
import './CardContent.css';
import ExperienceSection from "./experiencesection/index";
import EducationSection from "./educationsection/index";
function CardContent({ type, data, onEdit }) {

    const sectionConfig = getSection(type);
    const fields = getFields(sectionConfig);

    let content;
    switch (type) {
        case 'experience':
            content = (
                <ExperienceSection info={data} />
            );
            break;

        case 'education':
            content = (
                <EducationSection info={data} />
            );
            break;

        default:
            content = fields.map((field) => (
                <p key={field.name} className={`${type}-${field}`}>
                    <strong>{field.name}: </strong>
                    {data && data[field.id]}
                </p>
            ));
    }

    return (
        <div className={`${type}-item`}>
            

            {content}

            <div className="edit-btn-container">
                <Button handleclick={onEdit} className={`edit-${type}-btn`}>
                    <i className="fa-solid fa-pencil"></i>
                </Button>
            </div>
        </div>
    );
}

export default CardContent;
