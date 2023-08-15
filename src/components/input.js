function Input(prop) {

return (
    <>
        <label htmlFor={prop.name}>{prop.label}</label>
        <input 
        type={prop.type}
        name={prop.name} 
        className={prop.name} 
        placeholder={prop.placeholder}
        onChange={prop.handleChange}
        data-testid={prop.id}
        required
        />
    </>
  )
}
export default Input