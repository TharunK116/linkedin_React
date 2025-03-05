const FIELD_INFO = [
   {
        id:"PROFILE_PIC",
        name: "profilePic",
        placeholder: "Profile Picture URL",
        type: "text",
        required: true,
        validator: (value) => {
            if (!value) return "Profile Picture URL is ** required field.";
           
        },
    },
      {
        id:"NAME",
        name: "name",
        placeholder: "Full Name",
        type: "text",
         field: true,
        validator: (value) => {
            if (!value) return "Full Name is * required field.";
            if (value.length < 2) return "Full Name must be at least 2 characters.";
            return "";
        },
    },
 {

        id:"CONTACT",
        name: "contact",
        placeholder: "Contact Info",
        type: "text",
        required: true,
        validator: (value) => {
            if (!value) return "Contact Info is * required field.";
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const phonePattern = /^\d{10}$/;
            if (!emailPattern.test(value.trim) && !phonePattern.test(value.trim))
                return "Contact Info must be a valid email or phone number.";
            return "";
        },
    },
    {
        id:"CONNECTIONS",
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
  {
        id:"COMPANY",
        name: "Company",
        placeholder: "Company Name",
        type: "text",
        required: true,
        validator: (value) => (!value ? "Company Name is * required field." : ""),
    },
  {
        id:"POSITION",
        name: "Position",
        placeholder: "Position",
        type: "text",
        required: true,
        validator: (value) => (!value ? "Position is * required field." : ""),
    },
  {
        id:"DESCRIPTION",
        name: "Description",
        placeholder: "Add description",
        type: "text",
        required: true,
        validator: (value) => (!value ? "Description is * required field." : ""),
    },
  {
        id:"START_DATE",
        name: "StartDate",
        placeholder: "Start Date",
        type: "date",
        required: true,
        validator: (value) => (!value ? "Start Date is * required field." : ""),
    },
   {
        id:"END_DATE",
        name: "EndDate",
        placeholder: "End Date",
        type: "date",
        required: true,
        validator: (value, startDate) => {
            if (!value) return "End Date is * required field.";
            if (startDate && new Date(value) <= new Date(startDate)) {
                return "End Date should be greater than Start Date.";
            }
            return "";
        },
    },
 {
        id:"LOCATION",
        name: "Location",
        placeholder: "Location",
        type: "text",
        required: true,
        validator: (value) => (!value ? "Location is * required field." : ""),
    },
   {
        id:"COLLEGE_NAME",
        name: "CollegeName",
        placeholder: "College Name",
        type: "text",
        validator: (value) => (!value ? "CollegeName is * required field." : ""),
    },
     {
        id:"DEGREE",
        name: "Degree",
        placeholder: "degree",
        type: "text",
        validator: (value) => (!value ? "Degree is * required field." : ""),
    },
    {
        id:"BRANCH",
        name: "Branch",
        placeholder: "Branch",
        type: "text",
        validator: (value) => (!value ? "Branch is * required field." : ""),
    },
   {
        id:"SKILL_NAME",
        name: "SkillName",
        placeholder: "skillName",
        type: "text",
        required: true,
        validator: (value) => (!value ? "Skill Name is * required field." : ""),
    },
    {
        id:"PROFICIENCY",
        name: "Proficiency",
        placeholder: "Beginner/Intermediate/ Advanced/Expert",
        type: "text",
        required: true,
        validator: (value) => {
            if (!value) return "Proficiency Level is * required field.";
            const validProficiencies = ["Beginner", "Intermediate", "Advanced", "Expert"];
            return validProficiencies.includes(value) ? "" : "Invalid proficiency level.";
        },
    },
    {
        id:"METRIC",
        name: "metric",
        placeholder: "Analytics Metric",
        type: "text",
        required: true,
        validator: (value) => (!value ? "Analytics Metric is * required field." : ""),
    },
    {
        id:"VALUE",
        name: "value",
        placeholder: "Value",
        type: "number",
        required: true,
        validator: (value) => (isNaN(value) || value < 0 ? "Value must be a non-negative number." : ""),
    },
];
export default FIELD_INFO;