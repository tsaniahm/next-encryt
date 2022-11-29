import Heading from "../../atoms/text/Heading";

const EncryptDecryptButton = ({type, setType}) => {

    const handleSetEncrypt = () => {
        setType('encryption')
    }

    const handleSetDecrypt = () => {
        setType('decryption')
    }

    return (
        <div className="flex flex-row w-full h-12 my-4 md:w-8/12 xl:w-6/12">
            <div onClick={handleSetEncrypt} className={`cursor-pointer flex items-center justify-center w-full h-full rounded-l-full ${type === 'encryption' ? 'bg-indigo-800' : 'bg-indigo-200'}`}>
                <Heading size="sm" fontWeight="semibold" transform="uppercase">Encryption</Heading>
            </div>
            <div  onClick={handleSetDecrypt} className={`cursor-pointer flex flex-row items-center justify-center w-full h-full rounded-r-full ${type === 'encryption' ? 'bg-indigo-200' : 'bg-indigo-800'} `}>
                <Heading size="sm" fontWeight="semibold" transform="uppercase">Decryption</Heading>
            </div>
        </div>
    )
}

export default EncryptDecryptButton;