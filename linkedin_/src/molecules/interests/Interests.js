import React, { Fragment, useState } from "react"
import CONTENT from "./Constants/Content";
import './Interests.css'
import Button from "../../atoms/buttton";
import Icon from "../../atoms/icon";
function Interests() {
    let contentd = [];
    const [specific, setspecific] = useState(null);
    const[follow,setfollow]=useState('Follow');
    function handleType(id) {
        setspecific(id);
    }
    function handleFollow(){
        console.log('changing');
        setfollow((prev)=>{
            if(prev==="Follow"){
                return 'Following';
            }
            return 'Follow';
        })
    }


    if (specific != null) {
        const content = CONTENT.find((item) => item.type === specific);
        contentd = content.items;
    }


    return (

        <div className="types" >
            
                {CONTENT.map((item) => (
                    
                    <Button 
                        key={item.type}
                        handleclick={() => handleType(item.type)}
                        classname={specific === item.type ? "highlight" : ""}
                    >
                        {item.type}
                    </Button>
                    
                ))}


            <div id="people" className="tab-content">

                {contentd.map((item) => (
                    <Fragment
                        key={item.name}
                    >
                        <img
                            src={item.logo}
                            alt="Company Logo" className="logo" />

                        <div className="company-info">
                            <p className="company-name">{item.name}</p>
                            <p>{item.info}</p>
                            <Button handleclick={handleFollow} classname="btn-following"><Icon classname="fa-solid fa-check"></Icon>{follow}</Button>
                        </div>
                    </Fragment>
                ))
                }

            </div>


        </div>
    )

}

export default Interests;

