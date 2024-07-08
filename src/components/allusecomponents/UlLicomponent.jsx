import React from 'react'

const UlLicomponent = ({linkcontent}) => {
    return (
        <div>
            <div className='cursor-pointer'>
                <span className='relative after:transition-w after:duration-500 after:ease-linear hover:after:w-full after:w-0 after:h-[1px] after:absolute after:flex after:flex-col after:bg-white after:[""]'>
                    {linkcontent}
                </span>
            </div>
        </div>
    )
}

export default UlLicomponent
