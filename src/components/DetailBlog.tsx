import axios from "axios";
import { Blog } from "../Hooks"
import { AppBar } from "./AppBar"
import { MdDelete } from "react-icons/md";
export const DetailBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <AppBar />
        <div className="flex justify-center ">
            <div className="grid grid-cols-12 px-10 w-full pt-15 max-w-screen-xl">
                <div className="col-span-8">
                    <div className="text-3xl font-extrabold flex justify-between items-center">
                        {blog.title}
                        <span className="text-gray-500 cursor-pointer hover:text-red-500">
                            <MdDelete onClick={async()=>{
                               const response = await axios.delete(`https://backend.subalkundu3.workers.dev/api/v1/blog/delete/${blog.id}`, {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem("token")}`
                                    }
                                })
                                if(response.status === 200){
                                    window.location.href = "/blog"
                                }
                            }} />
                        </span>
                    </div>
                    <div className="pt-2 text-gray-500">
                        {blog.content}
                    </div>
                </div>
              
                <div className="col-span-4 flex flex-col justify-center items-center">
                    
                    Author
                    <div className="text-2xl font-semibold">
                        {blog.author.name || "Unknown"} 
                    </div>
                </div>


            </div>

        </div>
    </div>

}