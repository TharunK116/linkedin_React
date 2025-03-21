
import React, { useState } from "react";
import Section from "../sections/Section";
import { useUserData } from "../../hooks/useData";

function SectionList() {
  
    const {item,handleEdit,userData,sections,handledelete,handlesubmit}= useUserData();
    console.log('data');
   console.log(userData);
    return (

        <div className="content">
            {sections.map((section, index) => (
                <Section
                    key={section.title}
                    title={section.title}
                    type={section.type}
                    edititem={item}
                    handleedit={handleEdit}
                    handledelete={handledelete}
                    handlesubmit={handlesubmit}
                    info={section.data}
                />
            ))}
            

        </div>
    );
}

export default SectionList;