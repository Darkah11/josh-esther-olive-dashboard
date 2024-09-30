"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function FormEdit() {
    const {id} = useParams();
    const router = useRouter()
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [faculties, setFaculties] = useState('')
    const [departments, setDepartments] = useState('')
    const [ loading, setLoading] = useState(true);
    const [ error, setError] = useState(false);


    useEffect(() => {
        fetch('http://localhost:4000/bloglist/' + id)
        .then( res => {
            if(!res.ok) {
                throw Error("Could not fetch data")
            }
            return res.json();
        })
        .then( data => {
            console.log(data.title);
            setName(data.title)
            setAbout(data.body)
            setFaculties(data.writer)
            setDepartments(data.time)
            
        })
        .catch ( err => {
            setLoading(false);
            setError(err.message);
        })
    }, [id])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const blogEdit = {
            title, body, writer, time
        }
        const res = await fetch('http://localhost:4000/bloglist/' + id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blogEdit)
        })
        console.log(blogEdit);
        if(res.ok) {
            router.push("/Blogs")
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit} className=' mt-8 flex flex-col gap-5'>
                <div className=" flex flex-col max-w-xl gap-2">
                    <label className=' font-semibold' htmlFor="name">Institution Name</label>
                    <input 
                    type="text" 
                    id='name'
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    placeholder='School name'
                    className=' outline-none border rounded-full py-2 px-4 placeholder:font-medium' />
                </div>

                <div className=" flex flex-col max-w-xl gap-2">
                    <label className=' font-semibold' htmlFor="about">About the institution</label>
                    <textarea name="content" id="about" cols="30" rows="10"
                    placeholder='Write something...'
                    value={about}
                    onChange={e => setAbout(e.target.value)}
                    className=' outline-none border rounded-2xl py-2 px-4 placeholder:font-medium'></textarea>
                </div>


                <div className=" flex flex-col w-fit gap-2">
                    <label className=' font-semibold' htmlFor="image">
                        Preview Image
                        <span className=' block font-medium mt-2 bg-blue-300 w-fit px-10 py-2 rounded-full'>Choose file</span>
                    </label>
                    <input 
                    type="file" 
                    id='image' accept=' image/*'/>
                </div>


                <div className=" flex flex-col max-w-xl gap-2">
                    <label className=' font-semibold' htmlFor="faculty">Faculties in the institution</label>
                    <input 
                    type="text" 
                    id='faculty' 
                    value={faculties}
                    onChange={e => setFaculties(e.target.value)}
                    placeholder='...'
                    className=' outline-none border rounded-full py-2 px-4 placeholder:font-medium' />
                </div>


                <div className=" flex flex-col max-w-xl gap-2">
                    <label className=' font-semibold' htmlFor="department">Department in the institution</label>
                    <input 
                    type="text" 
                    id='department' 
                    value={departments}
                    onChange={e => setDepartments(e.target.value)}
                    placeholder='...'
                    className=' outline-none border rounded-full py-2 px-4 placeholder:font-medium' />
                </div>

                <button 
                   onClick={handleSubmit} 
                   className=' text-white self-end bg-foreBlue p-2 w-[250px] rounded-full cursor-pointer'>
                    <p>Publish</p>
                </button>
            </form>
    </>
  )
}