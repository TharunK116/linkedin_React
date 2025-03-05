
import SECTIONS from "../molecules/profileContent/Constants/sections";
import FIELD_INFO from "../molecules/profileContent/Constants/fieldInfo";

export function getSection(type){
    return  SECTIONS.find((sec) => sec.type === type);
 }
 export function getFields(sectionConfig){
    return  sectionConfig.fieldIds.map((fieldId) => 
        FIELD_INFO.find((field) => field.name === fieldId)
    );
    
}
