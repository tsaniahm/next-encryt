import { useState } from "react"
import Image from 'next/image'

import Button from "../components/atoms/button/Button"
import Heading from "../components/atoms/text/Heading"
import TextField from "../components/atoms/textfield/Input"
import EncryptDecryptButton from "../components/organism/specificButton/EncryptDecryptButton"

export default function Home() {
  const [inputEncrypt, setInputEncrypt] = useState('')
  const [key, setKey] = useState('')
  const [result, setResult] = useState('')
  const [type, setType] = useState('encryption')

  const handleInputEncrypt = (e) => {
    setInputEncrypt(e.target.value);
  }

  const handleInputKey = (e) => {
    setKey(e.target.value);
  }

  const onSubmit = () => {
    setResult(inputEncrypt);
  }

  return (
    <div className='flex flex-col items-center justify-center w-full px-5 py-20 sm:px-20 xl:px-64 bg-gradient-to-b from-indigo-800 to-black'>
      <div className="hidden md:block">
        <Heading size="3xl" fontWeight="bold" transform="uppercase">Mr.Encrypt</Heading>
      </div>
      <div className="block md:hidden">
        <Heading size="xl" fontWeight="bold" transform="uppercase">Mr.Encrypt</Heading>
      </div>
      <div className="mt-4">
        <Heading size="sm" fontWeight="semibold">Choose The Algoritm!!</Heading>
      </div>
      <div className="flex items-center justify-center w-full h-12 bg-white rounded-full cursor-pointer md:w-8/12 xl:w-6/12">
        <Heading size="xs" fontWeight="bold" transform="uppercase" color="black">Caesar chipper</Heading>
      </div>
      <EncryptDecryptButton type={type} setType={setType} />
      <div className="w-full">
        <TextField type="text" label={type === 'encryption' ? 'plaintext' : 'chippertext'} onChange={handleInputEncrypt} />
      </div>
      <div className="w-full">
        <TextField type="text" label="key" onChange={handleInputKey} />
      </div>
      <div className="w-full">
        <Button onClick={onSubmit}>Submit</Button>
      </div>
      <div className="w-full">
        <Heading fontWeight="bold">Result:</Heading>
        <div className="flex">
          <Heading>{result}</Heading>
          {result?.length > 0 && (<Image src="/Images/copy.png" alt="copy img" width="28" height="28" className="mx-2" />)}
        </div>
      </div>
    </div>
  )
}
