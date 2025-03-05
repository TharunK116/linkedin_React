import React from "react";
import Button from "../../atoms/buttton/index";
import Title from "../../atoms/title/index";
import Icon from "../../atoms/icon/index";
import './HeaderCard.css'
export default function HeaderCard({ Tag, title, classname, handleclick, children }) {

    return (
        <div className="header-card">
            <Title Tag={Tag}>{title}</Title>
            {handleclick && <Button handleclick={handleclick}>
                {classname &&
                    <Icon
                        classname={classname}
                    >
                    </Icon>}
                {children}
            </Button>
            }
        </div>
    )


}