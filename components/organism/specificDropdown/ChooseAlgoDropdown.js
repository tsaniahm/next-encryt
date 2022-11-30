import { useState } from "react";
import Heading from "../../atoms/text/Heading";

const ChooseAlgoDropdown = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <div onClick={handleOpen} className="flex items-center justify-center w-full h-12 bg-white rounded-full cursor-pointer md:w-8/12 xl:w-6/12">
                <Heading size="xs" fontWeight="bold" transform="uppercase" color="black">Caesar chipper</Heading>
            </div>
            {open && (
                <div className="absolute z-10 w-11/12 bg-white rounded mb-36 md:w-8/12 xl:w-4/12 xl:mb-32">
                <ul className="flex flex-col items-center justify-center py-1 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <Heading size="xs" color="black" fontWeight="bold">Caesar Chipper</Heading>
                    </li>
                    <li>
                        <Heading size="xs" color="black" fontWeight="bold">vigenere Chipper</Heading>
                    </li>
                    <li>
                        <Heading size="xs" color="black" fontWeight="bold">CR4 Chipper</Heading>
                    </li>
                </ul>
            </div>
            )}
        </>
    )
}

export default ChooseAlgoDropdown;