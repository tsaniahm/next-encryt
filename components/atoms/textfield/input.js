
const TextField = ({
    type = "text" || "password" || "email",
    onChange,
    label,
    value,
    placeholder,
    isRequired = true || false
}) => (
    <>
        <label htmlFor="input">{label}</label>
        <input
            id="input"
            type={type}
            className="w-full h-10 px-2 text-black bg-white rounded-lg"
            isRequired={isRequired}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    </>
)

export default TextField;