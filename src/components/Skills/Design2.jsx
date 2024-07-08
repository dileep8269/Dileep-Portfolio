import React from 'react'

const Design2 = ({img}) => {
  return (
    <div>
      <div className='z-50 w-full flex justify-center items-center'>
        <div className='secondcomponentdiv rounded-full w-[30vw] h-[30vw] max-[768px]:w-full max-[768px]:h-full'>
            <img className='skillsimage rounded-full object-cover w-full h-full' src={img} alt={img} />
        </div>
      </div>
    </div>
  )
}

export default Design2
