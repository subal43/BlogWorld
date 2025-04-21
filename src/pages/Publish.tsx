import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] =useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()
    return <div className="flex justify-center ">
        <div className="grid grid-cols-12 px-10 w-full pt-15 max-w-screen-xl">
            <div className="col-span-8">
                <div className="text-3xl font-extrabold">
                    Publish Blog
                </div>
                <div className="pt-6 text-gray-500">
                    <input onChange={(e)=>{
                        setTitle(e.target.value)
                    }} type="text" placeholder="Title" className="border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full" />
                    <textarea onChange={(e)=>{
                        setContent(e.target.value)
                    }} placeholder="Content" className="border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full mt-4 h-[400px]" />
                    <button onClick={async()=>{
                       
                       const response = await axios.post("https://backend.subalkundu3.workers.dev/api/v1/blog/post", {
                            title,
                            content
                        },{
                            headers:{
                                Authorization: `Bearer ${localStorage.getItem("token")}`
                            }
                        })
                       
                        navigate(`/Blog/${response.data.id }`)
                    }}  className="mt-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Publish</button>
                </div>
            </div>
        </div>
    </div>
}