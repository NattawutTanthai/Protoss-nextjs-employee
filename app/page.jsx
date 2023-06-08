"use client";
import Image from "next/image";
import protoss from '../assets/protossLogo.jpeg'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (localStorage.getItem('emp')) {
      router.push('/empProfile')
    }
  }, [])

  const handleSubmit = () => {
    if (username === '' && password == '') {
      alert('Please enter username or password')
    } else {
      localStorage.setItem('emp', JSON.stringify({ username, password }))
      router.push('/empProfile')
    }
  }
  return (
    <>
      <div className='flex justify-center pt-5'>
        <Image src={protoss} width={170} alt="protoss" />
      </div>
      <div className='bg-blue-100 p-5 flex justify-center flex-col px-72 gap-3'>
        <h1 className='text-xl px-2 text-gray-500'>Username</h1>
        <input value={username} onChange={event => setUsername(event.target.value)} type="text" className='border border-blue-100 hover:border-blue-400 rounded-full px-2 py-1' required />
        <h1 className='text-xl px-2 text-gray-500'>Password</h1>
        <input value={password} onChange={event => setPassword(event.target.value)} type="text" className='border-2 border-blue-100 hover:border-blue-400 rounded-full px-2 py-1' required />
        <button className="flex justify-center drop-shadow-xl text-white text-xl p-2  rounded-lg border border-gray-500  bg-blue-400 hover:bg-blue-500" onClick={handleSubmit}>Login</button>
      </div>
    </>
  )
}
