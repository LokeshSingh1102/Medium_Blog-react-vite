import { useEffect, useState } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../Config"

export interface Blog{
    id:string,
    title: string,
    content:string,
    author:{
        name:string
    }
}

export const getBlogbyId = ({id}:{id:string})=>{
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/post/${id}`,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => {
            setBlog(response.data)
            console.log(blog);
            setLoading(false)
        })
    }, [])
    
    return {
            blog,
            loading
        }
}

export const getBlogs = () => {

    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/post/bulk`,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => {
            setBlogs(response.data)
            setLoading(false)
        })
    }, [])

    return {
            blogs,
            loading
        }
        
}