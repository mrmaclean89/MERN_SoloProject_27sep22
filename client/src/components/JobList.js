import {React,useEffect,useState} from 'react'
import {useNavigate,Link,useParams} from 'react-router-dom'
import axios from 'axios'

const JobList = () => {

  const [jobs,setJobs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/jobs`)
    .then((res) => {
      console.log(res.data)
      let list = [...res.data.allJobs]
      setJobs(list)
    }).catch((err) => {
      console.log(err)
    });
  }, [])
  

  return (
    <div>
      <nav class="sticky top-0 z-50 w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <h1 className="text-3xl font-bold underline font-mono mx-8"> YardWiz </h1>
        <Link to="/newjob" class="text-purple-600 hover:text-purple-700 transition duration-300 ease-in-out mb-1 mx-8">Add New Job</Link>
      </nav>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 w-fit">
        <div className="flex flex-col align-center">
          {jobs.map((job,idx)=>(
            <div key={idx} className="rounded-lg shadow-lg bg-white max-w-sm mx-auto my-6">
              <a href="#!">
                <img className="rounded-t-lg" src={job.photo} alt=""/>
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{job.name}</h5>
                <p className="text-gray-700 text-base mb-4">
                  {job.details}
                </p>
                <button onClick={()=>navigate(`/viewjob/${job._id}`)} type="button" 
                className="inline-block px-6 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium text-xs leading-tight 
                uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  View Job
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobList



