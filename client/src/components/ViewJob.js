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
      <h1>ViewJob</h1><Link to="/joblist">Back to List</Link>
      <h3>{job.name}</h3>
      <img src={job.photo} alt="No Image Submitted" />
      <div>Details: {job.details}</div>
      <div>Instructions: {job.instructions}</div>
      <div>Materials Needed: {job.materials}</div>
      <div>Tools Required: {job.tools}</div>
      <div>Est. Time to Complete: {job.time}(min)</div>
      <div>Completion Frequency: {job.frequency}</div>
      <button onClick={()=>navigate(`/editjob/${job._id}`)} type="">EDIT</button>
      <button onClick={handleDelete} type="">DELETE</button>
    </div>
  )
}

export default ViewJob