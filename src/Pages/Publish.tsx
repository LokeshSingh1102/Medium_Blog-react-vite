import { useState } from "react"
import { AppBar } from "../Components/AppBar"
import axios from "axios"
import { BACKEND_URL } from "../Config"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()
    async function submitBlog() {

        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/post`, {
                data: {
                    title: title,
                    content: content
                }
            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            alert("Posted successfully")
            navigate(`../blog/${res.data.id}`)
        } catch (error) {
            alert("some error")
        }
    }

    return <div>
        <AppBar />
        <div className="flex justify-center" >
            <div className="max-w-screen-lg w-full">

                <div className="m-2">
                    <input id="message" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:outline-none block h-3 w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Title" onChange={(e) => {
                        setTitle(e.target.value)
                    }}></input>
                </div>

                <div className="m-2">
                    <textarea id="message" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:outline-none block h-64 w-full p-3 shadow-xs placeholder:text-body" placeholder="Write the content" onChange={(e) => {
                        setContent(e.target.value)
                    }}></textarea>
                </div>

                <button type="button" className="m-2 text-white bg-green-400 box-border border border-transparent hover:bg-green-500 focus:ring-4 shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none" onClick={submitBlog}>Submit</button>
            </div>
        </div>
    </div>
}