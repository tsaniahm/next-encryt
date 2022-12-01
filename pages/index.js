import { useState } from "react"

import Head from 'next/head'
import Image from 'next/image'

import P from "../components/atoms/text/Paragraph"
import Heading from "../components/atoms/text/Heading"
import Button from "../components/atoms/button/Button"
import TextField from "../components/atoms/textfield/Input"
import ChooseAlgoDropdown from "../components/organism/specificDropdown/ChooseAlgoDropdown"
import EncryptDecryptButton from "../components/organism/specificButton/EncryptDecryptButton"

import { Decryption as CaesarDecrypt, Encryption as CaesarEncrypt } from "../helpers/CaesarChiper"
import { Decryption as VignereDecrypt, Encryption as VignereEncrypt } from "../helpers/VigenereCipher"

import toast, { Toaster } from 'react-hot-toast';
import { Algoritms } from "../constants"

export default function Home() {
  const [inputEncrypt, setInputEncrypt] = useState('')
  const [key, setKey] = useState('')
  const [result, setResult] = useState('')
  const [type, setType] = useState('encryption')
  const [algoritm, setAlgoritm] = useState('Vignere')

  const handleInputEncrypt = (e) => {
    setInputEncrypt(e.target.value);
  }

  const handleInputKey = (e) => {
    setKey(e.target.value);
  }

  const onSubmit = () => {
    if (algoritm === 'Caesar') {
      if (type === "encryption") {
        setResult(CaesarEncrypt(inputEncrypt, key));
      } else {
        setResult(CaesarDecrypt(inputEncrypt, key));
      }
    } else {
      if (type === "encryption") {
        setResult(VignereEncrypt(inputEncrypt, key));
      } else {
        setResult(VignereDecrypt(inputEncrypt, key));
      }
    }
  }

  const handleCopyClipboard = () => {
    if (result?.length !== 0) {
      navigator.clipboard.writeText(result);
      toast.success('success to copy')
    }
  }

  return (
    <>
      <Head>
        <title>Mr Encrypt</title>
        <meta property="og:title" content="Mr Encrypt" key="title" />
      </Head>
      <div><Toaster /></div>
      <div className='flex flex-col items-center w-full h-screen px-5 pt-10 sm:px-20 xl:px-64 bg-gradient-to-b from-gray-800 to-black'>
        <div className="hidden md:block">
          <Heading size="3xl" fontWeight="bold" transform="uppercase">Mr.Encrypt</Heading>
        </div>
        <div className="block md:hidden">
          <Heading size="xl" fontWeight="bold" transform="uppercase">Mr.Encrypt</Heading>
        </div>
        <div className="mt-4 mb-2">
          <Heading size="sm" fontWeight="semibold">Choose The Algoritm!!</Heading>
        </div>
        <ChooseAlgoDropdown algoritms={Algoritms} selected={algoritm} setAlgoritm={setAlgoritm} />
        <EncryptDecryptButton type={type} setType={setType} />
        <div className="w-full">
          <TextField type="text" label={type === 'encryption' ? 'plaintext' : 'chippertext'} onChange={handleInputEncrypt} />
        </div>
        <div className="w-full">
          <TextField type={algoritm === 'Caesar' ? 'number' : 'text'} label="key" onChange={handleInputKey} />
        </div>
        <div className="w-full">
          <Button onClick={onSubmit}>Submit</Button>
        </div>
        <div className="w-full ">
          <Heading fontWeight="bold">Result:</Heading>
          <div className="flex">
            <P>{result}</P>
            {result?.length > 0 && (<Image src="/Images/copy.png" alt="copy img" width="28" height="28" className="mx-2 cursor-pointer" onClick={handleCopyClipboard} />)}
          </div>
        </div>
      </div>
    </>
  )
}
