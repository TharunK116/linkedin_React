import React from "react";
import StickyNavbar from "../../molecules/stickyNavbar/index";
import SectionList from "../sectionlist/index";

import './MainPage.css'
function Mainpage() {
    return (
        <div className="ProfilePage">
            <StickyNavbar />
            <div className="container">
                <SectionList />
            </div>
        </div>
    )
}
export default Mainpage;