import axios from "axios";
import { useEffect, useState } from "react";
import { Blog } from "../pages/Blog";


export interface Blog {
    "id": string,
    "title": string,
    "content": string,
    "author": {
        "name": string
    }
}


export const useBlog = ({id}:{id: string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`https://backend.subalkundu3.workers.dev/api/v1/blog/${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            setBlog(res.data.blog);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        }
        )
    },[id])
    return { blog, loading };

}




export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get("https://backend.subalkundu3.workers.dev/api/v1/blog/bulk",{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            setBlogs(res.data.blog);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        }
        )
    },[loading])
    return { blogs, loading };
}

export const useAuth = () => {
    const [name, setName] = useState("Anonymous");

    useEffect(() => {
        axios.post("https://backend.subalkundu3.workers.dev/api/v1/blog/authorname",null,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            setName(res.data.blog.name);
            console.log(name)
        })
        .catch((err) => {
            console.error(err);
        }
        )
    },[])
    return name as string;

}