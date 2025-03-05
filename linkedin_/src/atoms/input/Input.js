
function Input({ name, type, value, placeholder, onChange, children,classname }) {
 return (
        <>
            <label>
                {name}:
            </label>

            <input className={classname} onChange={onChange} value={value} type={type} placeholder={`${placeholder}`}>
            </input>
            {children}
        </>
    )
}
export default Input;