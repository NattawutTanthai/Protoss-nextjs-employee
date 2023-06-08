import Image from "next/image";
import protoss from '../../assets/protossLogo.jpeg'
import user from '../../assets/user.jpeg'
import Link from "next/link";
import dayjs from "dayjs";

export default function page() {
    return (
        <>
            <div className='flex justify-center pt-5'>
                <Image src={protoss} priority width={170} alt="protoss" />
            </div>
            <div className='bg-blue-100 p-5 flex justify-center px-72 gap-3'>
                <Image src={user} width={170} alt="protoss" className=" rounded-full" />
                <div className="flex flex-col justify-center">
                    <h1 className='text-xl px-2 text-gray-500'>Nattawut rattanabucha</h1>
                    <h1 className='text-xl px-2 text-gray-500'>Date : {dayjs().format("DD/MM/YYYY")}</h1>
                    <h1 className='text-xl px-2 text-gray-500'>Time : {dayjs().format("HH:mm")}</h1>
                </div>
            </div>
            <div className="flex justify-center bg-blue-100 pb-5">
                <Link href={'/dashborad'}>
                    <div className=" w-48 flex justify-center drop-shadow-xl text-white text-xl p-2  rounded-lg border border-gray-500  bg-blue-400 hover:bg-blue-500">
                        <button>Enter</button>
                    </div>
                </Link>
            </div>
        </>
    )
}
