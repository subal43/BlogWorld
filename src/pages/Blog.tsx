import { DetailBlog } from "../components/DetailBlog";
import { useBlog } from "../Hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
        const { id } = useParams<{ id: string }>();
        const { blog, loading } = useBlog({
            id: id || ""
        });
        console.log(loading);
        if (loading) {
            return (
                <div className="flex justify-center items-center h-screen ">
                    <div className="loader">loading ...</div>
                </div>
            );
        }
        return (
            <div>
                {blog && <DetailBlog blog={blog} />}
            </div>
        )
        
    
}