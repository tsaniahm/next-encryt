
const Button = ({onClick,children}) =>{
    return(
        <button onClick={onClick} className="w-full h-12 px-6 py-2 my-2 font-bold text-white uppercase bg-indigo-500 rounded-lg hover:bg-indigo-700">{children}</button>
    )
}

export default Button;