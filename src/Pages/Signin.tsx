import { Auth } from "../Components/Auth"
import Qoute from "../Components/Qoute"

function Signin() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <Auth type="Signin" />
            </div>
            <div className='hidden lg:block'>
                <Qoute />

            </div>
        </div>
    )
}

export default Signin