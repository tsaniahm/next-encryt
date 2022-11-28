import { useState } from "react"
import TextField from "../components/atoms/textfield/input"

export default function Home() {
  const [encrypt, setEncrypt] = useState('')
  const [key, setKey] = useState('')
  const [result, setResult] = useState('')

  const inputEncrypt = (e) => {
    setEncrypt(e.target.value);
  }

  const inputKey = (e) => {
    setKey(e.target.value);
  }

  const onSubmit = () => {
    setResult(encrypt);
  }

  return (
    <div className='flex flex-col items-center justify-center w-full py-20'>
      <h1 className='font-bold text-[48px] text-center'>Chipper Text Encryption</h1>
      <div className="w-full px-5 sm:px-20 xl:px-64">
        <TextField type="text" label="plaintext" onChange={inputEncrypt}/>
      </div>
      <div className="w-full px-5 sm:px-20 xl:px-64">
        <label htmlFor="key">key</label>
        <input id="key" type='text' className="w-full h-10 px-2 text-black bg-white rounded-lg" onChange={inputKey} value={key} placeholder={key} />
      </div>
      <div className="w-full px-5 sm:px-20 xl:px-64">
        <button onClick={onSubmit} className="w-full px-6 py-2 my-2 font-bold text-white uppercase bg-indigo-500 rounded-lg hover:bg-indigo-700">encrypt</button>
      </div>
      <div className="w-full px-5 sm:px-20 xl:px-64">
        <h1 className="text-[24px] font-bold">Result:</h1>
        <h1>{result}</h1>
      </div>
    </div>
  )
}
