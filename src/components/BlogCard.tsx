
import { Link } from "react-router-dom"

interface BlogCardProps {
    id: string,
    authorName: string,
    title: string,
    description: string,
    publishedDate: string,
}

export const BlogCard = ({
    id,
    authorName,
    title,
    description,
    publishedDate
}: BlogCardProps) => {

    return (
        <Link to={`/blog/${id}`} className="no-underline">
            <div className="border-2 border-slate-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
                <div>
                    <Avatar name={authorName} /><span className="font-extralight pl-2">{authorName}</span> .<span className="pl-2 font-thin">{publishedDate}</span>
                </div>
                <div className="font-bold text-2xl py-1">
                    {title}
                </div>
                <div className="text-sm font-light text-slate-600">
                    {description.slice(0, 100)}...
                </div>
                <div className="text-sm font-light text-slate-500 pt-2">
                    {`${Math.ceil(description.length / 100)} min read`}
                </div>
            </div>
        </Link>
    )

}

export function Avatar({ name, size = "small",onClick }: { name:string , size?: "small" | "large",onClick?: () => void }) {
  

    return (
        <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"}  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer `}  onClick={onClick}>
           
            <span className={`font-xs text-gray-600 dark:text-gray-300 ${size === "small" ? "text-xs" : "text-md"}`}>{name[0]}</span>
        </div>

    )
}