import React from 'react'


const FormContact = () => {

  return (
    <div>
      <div className='w-full relative h-full flex justify-around transition-all duration-1000 ease-out'>
        <form target='_blank' className='w-1/2 h-full py-10 flex flex-col justify-center gap-5 max-[768px]:w-3/4 max-[550px]:w-full max-[550px]:px-4'
          method='post' action='https://docs.google.com/forms/d/e/1FAIpQLScGfz640aqiiNKQgXN0gDwcROPyT7lx1sUN5GAxZsz1jymUPw/formResponse'>
          <div>
            <input type="text" name='entry.861613173' className='rounded-lg w-full outline-0 hover:ring-yellow-300 ring-1 ring-gray-400 py-2 px-2' placeholder='Your Fulname' title='Your Fullname' required />
          </div>
          <div>
            <input type="number" name='entry.1299590752' className='rounded-lg w-full outline-0 hover:ring-yellow-300 ring-1 ring-gray-400 py-2 px-2' placeholder='Your Number' title='Your Number' required />
          </div>
          <div>
            <textarea type="text" name='entry.1274702207' className='w-full min-h-32 max-h-32 outline-0 rounded-lg hover:ring-yellow-300 ring-1 ring-gray-400 py-2 px-2' placeholder='Type your message here ...' title='Type your message' required />
          </div>
          <button
            type='submit' id='btn'
            className='py-2 hover:bg-blue-600 transition-all duration-200 ease-linear relative text-white rounded-md bg-pink-600'>
            Submit
          </button>
        </form>
      </div>
    </div>

  )
}

export default FormContact
