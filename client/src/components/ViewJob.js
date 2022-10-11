import {React,useEffect,useState} from 'react'
import {useNavigate,Link,useParams} from 'react-router-dom'
import axios from 'axios'

const ViewJob = () => {

  const [job,setJob] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

// Read Job by ID
  useEffect(() => {
    axios.get(`http://localhost:8000/api/jobs/${id}`)
    .then((res) => {
      console.log("ViewJob:",res.data.oneJob)
      setJob(res.data.oneJob[0])
    }).catch((err) => {
      console.log(err)
    });
  }, [])

  // Delete Job by ID
  const handleDelete = ()=>{
    axios.delete(`http://localhost:8000/api/jobs/${id}`)
    .then((res) => {
        console.log(res.data)
        navigate('/joblist')
    }).catch((err) => {
        console.log(err)
    });
  }

  return (
    <div>
      <nav class="sticky top-0 z-50 w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"> 
        <h1 className="text-3xl font-bold underline font-mono mx-8">YardWiz</h1>
        <Link to="/joblist" class="text-purple-600 hover:text-purple-700 transition duration-300 ease-in-out mb-1 mx-8">Back to List</Link>
      </nav>
      <div class="flex-col container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 w-11/12 sm:w-fit">
        <h3 className="text-2xl font-mono mb-4">{job.name}</h3>
        <img src={job.photo} alt="No Image Submitted" class="mx-auto my-2"/>
        <div class="my-1"><span className="font-semibold">Details:</span> {job.details}</div>
        <div class="my-1"><span className="font-semibold">Instructions:</span> {job.instructions}</div>
        <div class="my-1"><span className="font-semibold">Materials Needed:</span> {job.materials}</div>
        <div class="my-1"><span className="font-semibold">Tools Required:</span> {job.tools}</div>
        <div class="my-1"><span className="font-semibold">Est. Time to Complete:</span> {job.time}(min)</div>
        <div class="my-1"><span className="font-semibold">Completion Frequency:</span> {job.frequency}</div>
        <div class="my-6 inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
          <button onClick={()=>navigate(`/editjob/${job._id}`)} type=""
          class="rounded-l inline-block px-6 py-2.5 bg-yellow-500 text-white
          font-medium text-xs leading-tight uppercase hover:bg-yellow-600 focus:bg-yellow-600 
          focus:outline-none focus:ring-0 active:bg-yellow-700 transition duration-150 ease-in-out"
          >EDIT</button>
          <button onClick={handleDelete} type=""
          class="rounded-r inline-block px-6 py-2.5 bg-red-600 text-white 
          font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 
          focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out"
          >DELETE</button>
        </div>
      </div>
      
    </div>
  )
}

export default ViewJob