
const TextField = ({
    type = "text" || "password" || "email" || "number",
    onChange,
    label,
    value,
    placeholder,
}) => (
    <>
        <label htmlFor="input" className="text-base font-bold">{label}</label>
        <input
            id="input"
            type={type}
            className="w-full h-12 px-2 my-2 text-black bg-white rounded-lg"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    </>
)

export default TextField;