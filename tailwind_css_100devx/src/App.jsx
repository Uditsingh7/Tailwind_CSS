import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "centre" }}>
        <div style={{ backgroundColor: "red" }}>
          hello
        </div>
        <div style={{ backgroundColor: "blue" }}>
          from the
        </div>
        <div style={{ backgroundColor: "green" }}> outside</div>
      </div> */}
      {/* <div className='flex justify-between'>
        <div className='bg-red-500'>
          hello
        </div>
        <div className='bg-blue-500'>
          from the
        </div>
        <div className='bg-green-500'> outside</div>
      </div> */}
      {/* <div className='grid grid-cols-3'>
        <div className='bg-red-500'>
          hello
        </div>
        <div className='bg-blue-500'>
          from the
        </div>
        <div className='bg-green-500 '> outside</div>
      </div> */}

      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='bg-red-500 md:bg-blue-500'>New</div>
        <div className='bg-blue-500 md:bg-blue-500'>New</div>
        <div className='bg-green-500 md:bg-blue-500'>New</div>
        <div className='bg-yellow-500 md:bg-blue-500'>New</div>
      </div>
    </>
  )
}

export default App
