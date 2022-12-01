import { useState } from "react";
import Heading from "../../atoms/text/Heading";

const ChooseAlgoDropdown = ({ algoritms, selected, setAlgoritm }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleSelect = (item) => {
        setAlgoritm(item)
        setOpen(false)
    }

    return (
        <>
            <div onClick={handleOpen} className="flex items-center justify-center w-full h-12 bg-white rounded-full cursor-pointer md:w-8/12 xl:w-6/12">
                <Heading size="xs" fontWeight="bold" transform="uppercase" color="black">{selected} cipher</Heading>
            </div>
            {open && (
                <div className="absolute z-10 w-11/12 bg-white rounded-lg mt-36 md:w-8/12 xl:w-4/12 xl:mb-32">
                    <ul className="flex flex-col items-center justify-center py-1 text-sm text-gray-700 dark:text-gray-200">
                        {algoritms?.map((item) => (
                            <div className="w-full py-2 hover:bg-indigo-500" onClick={() =>handleSelect(item)} key={item}>
                               <div className="flex justify-center w-full">
                               <Heading size="xs" color="black" fontWeight="bold">{item} Chipher</Heading>
                               </div>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default ChooseAlgoDropdown;