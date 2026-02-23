import type { SignupInput } from "@lokeshsingh1102/medium_blog_common"
import axios from "axios"
import { useState, type ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../Config"


export const Auth = ({ type }: { type: "Signup" | "Signin" }) => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })

    const sendRequest = async ()=>{
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==='Signup'?"Signup":"Signin"}`,{
                data:postInputs
            })
            const jwt = response.data.token
            // console.log(response.data);
            localStorage.setItem("token",jwt)
            navigate('/blogs')
        } catch (error) {
            alert("did not sign in")
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col" >
            <div className="flex justify-center" >
                <div>

                    <div className="px-10">
                        <div className="font-bold text-4xl" >
                            Create an account
                        </div>
                        <div className=" text-md text-slate-400" >
                            {type === "Signin" ? "Don't have an account" : "Already have an account?"}
                            <Link to={type === "Signin" ? '/signup' : '/signin'}>{type === "Signin" ? "Signup" : "Signin"}</Link>
                        </div>
                    </div>
                    <div>
                        {type === "Signin" ? '' : <LabelInput label={"Name"} placeholder="Enter your name" onChange={(e) => {
                            // console.log("osxko");
                            setPostInputs((s) => ({
                                ...s,
                                name: e.target.value
                            }))
                        }} />}

                        <LabelInput label={"Username"} placeholder="Enter your username" onChange={(e) => {
                            // console.log("osxko");
                            setPostInputs((s) => ({
                                ...s,
                                username: e.target.value
                            }))
                        }} />
                        <LabelInput label={"Password"} type={"password"} placeholder="Enter your password" onChange={(e) => {
                            // console.log("osxko");
                            setPostInputs((s) => ({
                                ...s,
                                password: e.target.value
                            }))
                        }} />
                    </div>
                    <button type="button" className="text-white w-full mt-2 bg-black box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={sendRequest}>Submit</button>
                </div>
            </div>

        </div>
    )
}

interface LabelInputType {
    type?: string,
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function LabelInput({ type, label, placeholder, onChange }: LabelInputType) {
    return (
        <div>
            <label className="block mt-2.5 text-sm font-medium text-heading">{label}</label>
            <input type={type || "text"} onChange={onChange} id="first_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder={placeholder} required />
        </div>
    )
}
