"use client";
import Image from "next/image";
import Link from "next/link";
import protoss from '../../assets/protossLogo.jpeg'
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
    const router = useRouter()

    const clearLocalStorage = () => {
        localStorage.removeItem('emp')
    }

    const handleLogout = () => {
        clearLocalStorage()
        router.push('/')
    }

    return (
        <>
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-blue-500 dark:bg-gray-800">
                    <div className="flex justify-center mb-3">
                        <Image src={protoss} width={100} alt="protoss" className="rounded-full" />
                    </div>
                    <hr />
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href={"/dashborad"}>
                                <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-red-500">
                                    <svg aria-hidden="true" className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span className="ml-3 text-white ">Home</span>
                                </div>
                            </Link>

                        </li>

                        <Link href={"/dashborad/employee"}>
                            <li>
                                <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-red-500">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap  text-white">Employee</span>
                                </div>
                            </li>
                        </Link>

                        <Link href={"/dashborad/department"}>
                            <li>
                                <div className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-red-500">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap  text-white">Department</span>
                                </div>
                            </li>
                        </Link>
                    </ul>
                    <Link href={'/'}>
                        <div className="flex justify-center drop-shadow-xl text-white  p-2 mt-3  rounded-lg border border-gray-500  bg-red-400 hover:bg-red-500">
                            <button type="submit" onClick={handleLogout} >Log out</button>
                        </div>
                    </Link>
                </div>
            </aside>
            <div className="p-4 sm:ml-64">
                <main>{children}</main>
            </div>
        </>
    );
}