import type { Blog } from "../hooks/Getallblogs"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {

    return <div>
        <AppBar />

        <div className="grid grid-cols-12 px-10 max-w-screen-2xl">
            <div className="col-span-8 bg-slate-100 m-2 p-2" >
                <div className="text-3xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-sm pt-4 text-slate-500">
                    Posted on 2nd December
                </div>
                <div className="pt-4 text-md font-thin">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4 bg-slate-100 m-2 p-2" >

                <div>
                    Author
                </div>
                <div className="flex">
                    <div className="flex flex-col justify-center pr-4">
                        <Avatar name={blog.author.name || "Anonymous"} />
                    </div>
                    <div>
                        <div>
                        {blog.author.name || "Anonymous"}

                        </div>
                        <div>
                            random things abot the author
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}