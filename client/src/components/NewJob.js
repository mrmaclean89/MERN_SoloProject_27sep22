import {React,useEffect,useState} from 'react'
import {useNavigate,Link,useParams} from 'react-router-dom'
import axios from 'axios'

const NewJob = () => {

  const navigate = useNavigate()
  const [name,setName] =useState()
  const [photo,setPhoto] =useState()
  const [details,setDetails] =useState()
  const [instructions,setInstructions] =useState()
  const [materials,setMaterials] =useState()
  const [tools,setTools] =useState()
  const [time,setTime] =useState()
  const [frequency,setFrequency] =useState()
  const [errors,setErrors] = useState({})

  const submitJob = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/jobs`,{
      name,photo,details,instructions,materials,tools,time,frequency
    })
    .then((res) => {
      console.log(res.data)
      navigate('/joblist')
    }).catch((err) => {
      console.log(err)
      setErrors(err.response.data.error.errors)
    });
  }

  return (
    <div>
      <nav class="sticky top-0 z-50 w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <h1 className="text-3xl font-bold underline font-mono mx-8">YardWiz</h1>
        <Link to="/joblist" class="text-purple-600 hover:text-purple-700 transition duration-300 ease-in-out mb-1 mx-8">Back to List</Link>
      </nav>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 w-10/12 md:w-9/12 lg:w-7/12">
        <form onSubmit={submitJob}>
        <div class="grid grid-cols-3 gap-4 my-2">
          <label htmlFor="" class="text-end pt-2">Job Name:</label>
          <input onChange={(e)=>setName(e.target.value)} type="text" name="" value={name} class="form-control
          col-span-2
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="e.g. Mow Lawn"/>
          {errors.name ? <p>{errors.name.message}</p> : null}
        </div>
        <div class="grid grid-cols-3 gap-4 my-2">
          <label htmlFor="" class="text-end pt-2">Photo:</label>
          <input onChange={(e)=>setPhoto(e.target.value)} type="text" name="" value={photo} class="form-control
          col-span-2
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="(URL)"/>
        </div>
        <div class="grid grid-cols-3 gap-4 my-2">
          <label htmlFor="" class="text-end pt-2">Details:</label>
          <input onChange={(e)=>setDetails(e.target.value)} type="text" name="" value={details} class="form-control
          col-span-2
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="e.g. Grass is too long"/>
          {errors.details ? <p>{errors.details.message}</p> : null}
        </div>
        <div class="grid grid-cols-3 gap-4 my-2">
          <label htmlFor="" class="text-end pt-2">Instructions:</label>
          <input onChange={(e)=>setInstructions(e.target.value)} type="text" name="" value={instructions} class="form-control
          col-span-2
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="e.g. Mow diagonally from east to west"/>
        </div>
        <div class="grid grid-cols-3 gap-4 my-2">
          <label htmlFor="" class="text-end pt-2">Materials Needed:</label>
          <input onChange={(e)=>setMaterials(e.target.value)} type="text" name="" value={materials} class="form-control
          col-span-2
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="e.g. Scotts TurfBuilder Lawn Food 12.5lbs"/>
        </div>
        <div class="grid grid-cols-3 gap-4 my-2">
          <label htmlFor="" class="text-end pt-2">Tools Required:</label>
          <input onChange={(e)=>setTools(e.target.value)} type="text" name="" value={tools} class="form-control
          col-span-2
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="e.g. Lawn mower"/>
        </div>
        <div class="grid grid-cols-3 gap-4 my-2">
          <label htmlFor="" class="text-end pt-2">Est. Time (min):</label>
          <input onChange={(e)=>setTime(e.target.value)} type="text" name="" value={time} class="form-control
          col-span-2
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="e.g. 90"/>
        </div>
        <div class="grid grid-cols-3 gap-4 my-2">
          <label htmlFor="" class="text-end pt-2" >Job Frequency:</label>
          <input onChange={(e)=>setFrequency(e.target.value)} type="text" name="" value={frequency} class="form-control
          col-span-2
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="e.g. Weekly"/>
        </div>
          <button type="submit" className="
          my-4
          w-full
          px-6
          py-2.5
          bg-gradient-to-r from-cyan-500 to-blue-500
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">
            Add to List
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewJob