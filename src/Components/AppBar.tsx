import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export function AppBar() {
    return (
        <div className="flex justify-between px-10 py-4 bg-slate-100">
            <div className="flex justify-center flex-col">
                Medium
            </div>

            <div>
                <Link to={'../publish'}>
                <button type="button" className="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded-full mr-4">
                    Publish
                </button>
                </Link>


                <Avatar name="Lokesh" />
            </div>
        </div>
    )
}