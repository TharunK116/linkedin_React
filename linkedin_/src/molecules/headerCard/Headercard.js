import React from "react";
import Button from "../../atoms/buttton/index";
import Title from "../../atoms/title/index";
import Icon from "../../atoms/icon/index";
import './HeaderCard.css'
export default function HeaderCard({ style,btnstyle,Tag, title, classname, handleclick, children}) {

    return (
        <div className="header-card" style={style}>
            <Title Tag={Tag}>{title}</Title>
            {handleclick && <Button  style={btnstyle} handleclick={handleclick}>
                {classname &&
                    <Icon
                        classname={classname}
                    >
                    </Icon>}
                
            </Button>
            }
            {children}
        </div>
    )


}