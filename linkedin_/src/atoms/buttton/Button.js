import React  from "react";

  function Button ({classname,children,handleclick}){

    return (
        <button className={classname} onClick={handleclick}>{children}</button>
    )
}
export default Button;