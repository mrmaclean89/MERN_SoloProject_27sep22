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
      <h1>My Yard, My Jobs.</h1>
      <div>
        {jobs.map((job,idx)=>(
          <button type="" key={idx} className="job-btn">{job.name}</button>
        ))}
      </div>
    </div>
  )
}

export default JobList