
const SECTIONS = [
    {
        title: "Profile",
        id:"PROFILE",
        type: "profile",
        fieldIds: ["profilePic", "name", "contact", "connections"],
    },
    {
        title: "Experience",
        id: "EXPERIENCE",
        type: "experience",
        fieldIds: ["Company", "Position", "Description", "StartDate", "EndDate", "Location"],
    },
    {
        title: "Education",
         id: "EDUCATION",
        type: "education",
        fieldIds: ["CollegeName", "Degree", "Branch", "StartDate", "EndDate", "Location"],
    },
    {
        title: "Skills",
        id: "SKILLS",
       
        type: "skills",
        fieldIds: ["SkillName", "Proficiency"],
    },
    {
        title: "Analytics",
         id: "ANALYTICS",
       
        fieldIds: ["metric", "value"],
    },
    {
        title: "Interests",
         id: "INTERESTS",
        type: "interests",
        fieldIds: ["skillName", "proficiency"],
    },
];

export default SECTIONS;
