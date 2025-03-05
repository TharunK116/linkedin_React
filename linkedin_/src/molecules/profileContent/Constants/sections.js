
const SECTIONS = [
    {
        title: "Profile",
        type: "profile",
        fieldIds: ["profilePic", "name", "contact", "connections"],
    },
    {
        title: "Experience",
        type: "experience",
        fieldIds: ["Company", "Position", "Description", "StartDate", "EndDate", "Location"],
    },
    {
        title: "Education",
        type: "education",
        fieldIds: ["CollegeName", "Degree", "Branch", "StartDate", "EndDate", "Location"],
    },
    {
        title: "Skills",
        type: "skills",
        fieldIds: ["SkillName", "Proficiency"],
    },
    {
        title: "Analytics",
        type: "analytics",
        fieldIds: ["metric", "value"],
    },
    {
        title: "Interests",
        type: "interests",
        fieldIds: ["skillName", "proficiency"],
    },
];

export default SECTIONS;
