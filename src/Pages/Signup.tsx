import Qoute from '../Components/Qoute'
import { Auth } from '../Components/Auth'

function Signup() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <Auth type="Signup"/>
            </div>
            <div className='hidden lg:block'>
                <Qoute />

            </div>
        </div>
    )
}

export default Signup