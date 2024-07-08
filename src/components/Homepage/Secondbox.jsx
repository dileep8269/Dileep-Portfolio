import React from 'react'

const Secondbox = ({ img }) => {
  return (
    <div>
      <div>
        <div className='flex justify-center items-center w-full h-full py-10 pt-16 px-10 max-[768px]:flex-col max-[768px]:gap-10 max-[768px]:w-full'>
          <div className='secondcomponentdiv rounded-full w-[33vw] h-[33vw] flex justify-center items-center max-[768px]:w-[60vw] max-[768px]:h-[60vw]'>
            <img className='bg-transparent shadow-2xl rounded-full w-full h-full object-cover max-[768px]:w-[100vw] max-[768px]:h-[60vw]' src={img} alt={img} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secondbox
