'use client'
import useFetch from "../../Components/useFetch"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import avatar from "@/app/Assets/avatar.svg"

export default function UserList() {

    const router = useRouter()
    const { data, loading, error } = useFetch("http://localhost:4000/bloglist");

    const handleDelete = async (id) => {
        const res = await fetch('http://localhost:4000/bloglist/' + id, {
            method: "DELETE"
        })
        if(res.ok) {
            router.refresh()
        }
    }

    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const lastIndex = currentPage * rowsPerPage;
    const firstIndex = lastIndex - rowsPerPage;
    const rows = data && data.slice(firstIndex, lastIndex)
    const nPage = Math.ceil(data && data.length / rowsPerPage)
    const numbers = [...Array(nPage + 1).keys()].slice(1)

    const users = data && data.length


    function prevPage() {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function nextPage() {
        if(currentPage !== nPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    function handlePage(id) {
        setCurrentPage(id)
    }
    function handleSelect(e) {
        const value = e.target.value
        if(value == 10) {
            setRowsPerPage(10)
        }else if (value == 20) {
            setRowsPerPage(20)
        }else if (value == 30) {
            setRowsPerPage(30)
        }else if (value == 40) {
            setRowsPerPage(40)
        }else if (value == 50) {
            setRowsPerPage(50)
        }else {
            setRowsPerPage(10)
        }
    }
  return (
    <>
    <div className=' flex justify-between items-center my-8'>
                <p>List of students {data && `(${users})`}</p>
    </div>
    { loading && <div><p>Loading...</p></div>}
    { error && <div><p>{error}</p></div>}
    {
        data &&
        <div className=" mt-10">
        <table className=" w-full bg-white table-container rounded-t-xl">
            <thead className=" bg-foreBlue text-white ">
                <th className=" border-r text-left p-4 rounded-tl-xl font-semibold">Title</th>
                <th className=" border-r text-left p-4 font-semibold">School</th>
                <th className=" border-r text-left p-4 font-semibold">Date Joined</th>
                <th className=" text-left p-4 rounded-tr-xl font-semibold">Action</th>
            </thead>
            <tbody className="">
                {data && rows.map((item) => (
                    <tr key={item.id} className=" table-row">
                        <td className=" border-r border-t w-[25%] p-4 font-semibold text-sm">
                            <div className=" flex items-center gap-2">
                                {/* <div className=' avatar-container bg-foreBlue rounded-full flex justify-center w-8 h-8 absolute top-0 bottom-0 m-auto'> */}
                                <div className=' avatar-container bg-foreBlue rounded-full w-[30px] h-[30px] flex justify-center'>
                                    <Image
                                    src={avatar}
                                    alt='profile picture'
                                    priority={true} 
                                    width={20}
                                    height={20}
                                    />
                                </div>
                                <div className=''>
                                    <h3 className=' capitalize font-semibold'>egue harris</h3>
                                    <p className=' font-medium text-xs'>harrisegue9@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td className=" border-r w-[25%] p-4 border-t capitalize text-sm font-medium">{"adekunle ajasin university"}</td>
                        <td className=" border-r w-[25%] p-4 border-t">{item.time}</td>
                        <td className=" w-[25%] p-4 border-t">
                            <div className=' flex flex-row gap-2'>
                                <button onClick={() => handleDelete(item.id)}><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.75 7H20.75" stroke="#2C2B2B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.75 11V17" stroke="#2C2B2B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14.75 11V17" stroke="#2C2B2B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5.75 7L6.75 19C6.75 20.1046 7.64543 21 8.75 21H16.75C17.8546 21 18.75 20.1046 18.75 19L19.75 7" stroke="#2C2B2B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.75 7V4C9.75 3.44772 10.1977 3 10.75 3H14.75C15.3023 3 15.75 3.44772 15.75 4V7" stroke="#2C2B2B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className=" bg-white border-t p-4 rounded-br-xl rounded-bl-xl flex justify-between pagination">
            <div>
                <label htmlFor="rows" className=" text-xs">
                    Showing
                    <select 
                    name="rows" 
                    id="rows"
                    className=" p-1 border  bg-transparent mx-1 text-xs font-semibold rounded-md outline-none"
                    onChange={handleSelect}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                    of 50
                </label>
            </div>

            
            <ul className=" flex gap-[2px]">
                <li>
                    <button className="bg-gray-100 min-w-[25px] min-h-[30px] p-1 rounded-md" onClick={prevPage}>{"<"}</button>
                </li>
                {
                    numbers.map((n, i) => (
                        <li key={i}>
                            <button className={ currentPage == n ? "bg-foreBlue text-white min-w-[25px] min-h-[30px] p-1 rounded-md" : "bg-gray-100 min-w-[25px] min-h-[30px] p-1 rounded-md"} onClick={() => handlePage(n)}>{n}</button>
                        </li>
                    ))
                }
                <li>
                    <button className="bg-gray-100 min-w-[25px] min-h-[30px] p-1 rounded-md" onClick={nextPage}>{">"}</button>
                </li>
            </ul>
        </div>
    </div>
    }
    </>
  )
}