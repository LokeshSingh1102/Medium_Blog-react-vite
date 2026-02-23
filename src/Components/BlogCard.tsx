import { Link } from "react-router-dom"

interface BlogInput {
    id:string,
    name: string,
    title: string,
    content: string,
    publishedDate: string
}
export const BlogCard = ({
    id,
    name,
    title,
    content,
    publishedDate
}: BlogInput) => {

    return (
        <Link to={`../blog/${id}`}>
            <div className="border-b border-slate-200 p-3 w-screen max-w-screen-lg cursor-pointer">
                <div className="flex">

                    <div className="flex jsutify-center flex-col">
                        <Avatar name={name || ""} />
                    </div>
                    <div className="font-extralight pl-2 my-auto text-sm">
                        {name}
                    </div>
                    <div className="flex justify-center flex-col pl-2">
                        <Circle />
                    </div>
                    <div className="text-slate-400 font-thin pl-2 my-auto text-sm">
                        {publishedDate}
                    </div>

                </div>
                <div className="text-xl font-semibold pt-3">
                    {title}
                </div>
                <div className="text-md font-thin">
                    {`${content.slice(0, 200)}` + '...'}
                </div>
                <div className="text-slate-400 text-sm pt-4">
                    {`${Math.ceil(content.length / 100)}` + ' minutes'}
                </div>
            </div>
        </Link>
    )
}

function Circle() {
    return (
        <div className="h-1 w-1 rounded-full bg-slate-400" >

        </div>
    )
}

export function Avatar({ name }: { name: string }) {
    return (

        <div className="bg-black text-white relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-neutral-tertiary rounded-full">
            <span className="font-medium text-body">
                {name[0]}
            </span>
        </div>
    )
}