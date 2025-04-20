
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../Hooks";

export const Blogs = () => {
     const { blogs, loading } = useBlogs();
     if (loading) {
      return (
        <div >
            <AppBar/>
          <div >
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
          </div>
        </div>
        );
        }
    return (<div>
        <AppBar/>
        <div className="flex justify-center">
            <div className=" max-w-xl">
            {blogs.map((blog) => {
                return (
                    <div key={blog.id} className="py-4">
                        <BlogCard id={blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} description={blog.content} publishedDate="7 Feb 2024" />
                    </div>
                )
            })}
            </div>
        </div>
        </div>
    );
}