// flex col will justify the content in column wise and then we can use justify-center to horizontally

function Qoute() {
    return (
        <div className='bg-slate-200 h-screen flex justify-center flex-col'>
            <div className='flex justify-center '>
                <div className='max-w-xl' >
                    <div className='text-left text-2xl font-bold'>
                        "The customer support I received was exceptional. The support team went above and beyond to address my concerns"
                    </div>
                    <div className=' text-left text-lg font-bold' >
                        Jules Winnfeild
                    </div>
                    <div className='text-left text-base text-slate-500 font-light ' >
                        CEO, Acme Inc.
                    </div>

                </div>
            </div>
            {/* this is qoute page */}
        </div>
    )
}

export default Qoute