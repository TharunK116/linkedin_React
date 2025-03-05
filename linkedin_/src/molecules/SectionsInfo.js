import UserData from "../organisms/UserData";

const section = [
    {
        title: "Profile",
        type: "profile",
        data:UserData.profile,
        fields: [
            {
                name: "profilePic",
                placeholder: "Profile Picture URL",
                type: "text",
                validator: (value) => {
                    if (!value) return "Profile Picture URL is required.";
                    
                    return "";
                },
            },
            {
                name: "name",
                placeholder: "Full Name",
                type: "text",
                validator: (value) => {
                    if (!value) return "Full Name is required.";
                    if (value.length < 2) return "Full Name must be at least 2 characters.";
                    return "";
                },
            },
            {
                name: "pronouns",
                placeholder: "Pronouns (e.g., He/Him, She/Her)",
                type: "text",
                required: false,
                validator: (value) => {
                    return "";
                },
            },
            {
                name: "description",
                placeholder: "Short Bio",
                type: "text",
                validator: (value) => {
                    if (!value) return "Short Bio is required.";
                    if (value.length < 10) return "Short Bio must be at least 10 characters.";
                    return "";
                },
            },
            {
                name: "location",
                placeholder: "Location",
                type: "text",
                validator: (value) => {
                    if (!value) return "Location is required.";
                    return "";
                },
            },
            {
                name: "contact",
                placeholder: "Contact Info",
                type: "text",
                validator: (value) => {
                    if (!value) return "Contact Info is required.";
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const phonePattern = /^\+?[1-9]\d{1,14}$/;
                    if (!emailPattern.test(value) && !phonePattern.test(value))
                        return "Contact Info must be a valid email or phone number.";
                    return "";
                },
            },
            {
                name: "connections",
                placeholder: "Connections",
                type: "number",
                required: false,
                validator: (value) => {
                    if (value && (isNaN(value) || value < 0))
                        return "Connections must be a non-negative number.";
                    return "";
                },
            },
        ],
    },
    {
        title: "Experience",
        type: "experience",
        data: UserData.experience,
        fields: [
            {
                name: "Company",
                placeholder: "Company Name",
                type: "text",
                validator: (value) => (!value ? "Company Name is required." : ""),
            },
            {
                name: "Position",
                placeholder: "Position",
                type: "text",
                validator: (value) => (!value ? "Position is required." : ""),
            },
            {
                name: "Description",
                placeholder: "Add description",
                type: "text",
                validator: (value) => (!value ? "Description is required." : ""),
            },
            {
                name: "StartDate",
                placeholder: "Start Date",
                type: "date",
                validator: (value) => (!value ? "Start Date is required." : ""),
            },
            {
                name: "EndDate",
                placeholder: "End Date",
                type: "date",
                validator: (value) => (!value ? "End Date is required." : ""),
            },
            {
                name: "Location",
                placeholder: "Location",
                type: "text",
                validator: (value) => (!value ? "Location is required." : ""),
            },
        ],
    },
    {
        title: "Education",
        type: "education",
        data: UserData.education,
        fields: [
            {
                name: "CollegeName",
                placeholder: "College Name",
                type: "text",
                validator: (value) => (!value ? "College Name is required." : ""),
            },
            {
                name: "Degree",
                placeholder: "degree",
                type: "text",
                validator: (value) => (!value ? "Degree is required." : ""),
            },
            {
                name: "Branch",
                placeholder: "Brnach",
                type: "text",
                validator: (value) => (!value ? "Brnach is required." : ""),
            },
            {
                name: "StartDate",
                placeholder: "Start Date",
                type: "date",
                validator: (value) => (!value ? "Start Date is required." : ""),
            },
            {
                name: "EndDate",
                placeholder: "End Date",
                type: "date",
                validator: (value) => (!value ? "End Date is required." : ""),
            },
            {
                name: "Location",
                placeholder: "Location",
                type: "text",
                validator: (value) => (!value ? "Location is required." : ""),
            },
        ],
    },
    {
        title: "Skills",
        type: "skills",
        data: UserData.education,
        fields: [
            {
                name: "SkillName",
                placeholder: "Skill Name",
                type: "text",
                validator: (value) => (!value ? "Skill Name is required." : ""),
            },
            {
                name: "Proficiency",
                placeholder: "Beginner/Intermediate/ Advanced/Expert",
                type: "text",
                validator: (value) => {
                    if (!value) return "Proficiency Level is required.";
                    const validProficiencies = ["Beginner", "Intermediate", "Advanced", "Expert"];
                    return validProficiencies.includes(value) ? "" : "Invalid proficiency level.";
                },
            },
        ],
    },
    {
        title: "Analytics",
        type: "analytics",
        data: UserData.analytics,
        fields: [
            {
                name: "Metric",
                placeholder: "Analytics Metric",
                type: "text",
                validator: (value) => (!value ? "Analytics Metric is required." : ""),
            },
            {
                name: "Value",
                placeholder: "Value",
                type: "number",
                validator: (value) => (isNaN(value) || value < 0 ? "Value must be a non-negative number." : ""),
            },
        ],
    },
    {
        title: "Interests",
        type: "interests",
        fields: [
            {
                name: "Interest",
                placeholder: "Interest Name",
                type: "text",
                validator: (value) => (!value ? "Interest Name is required." : ""),
            },
        ],
    },
];


export default section;





