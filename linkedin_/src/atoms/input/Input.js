
function Input({ name, Type, value, placeholder, onChange, children,classname }) {
   
 return (
        <>
            <label>
                {name}:
            </label>

        { Type==='textarea'?<Type className={classname} onChange={onChange} rows="4" cols="5" value={value} type={Type} placeholder={`${placeholder}`}> </Type>
        : <input className={classname} onChange={onChange} value={value} type={Type} placeholder={`${placeholder}`}>
            </input>
    
    }
     {children}
     </>
    )
}
export default Input;