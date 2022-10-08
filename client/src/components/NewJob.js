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
      <h1>NewJob</h1><Link to="/joblist">Back to List</Link>
      <form onSubmit={submitJob}>
        <label htmlFor="">Job Name:</label>
        <input onChange={(e)=>setName(e.target.value)} type="text" name="" value={name}/>
        {errors.name ? <p>{errors.name.message}</p> : null}
        <label htmlFor="">Photo:</label>
        <input onChange={(e)=>setPhoto(e.target.value)} type="text" name="" value={photo}/>
        <label htmlFor="">Details:</label>
        <input onChange={(e)=>setDetails(e.target.value)} type="text" name="" value={details}/>
        {errors.details ? <p>{errors.details.message}</p> : null}
        <label htmlFor="">Instructions:</label>
        <input onChange={(e)=>setInstructions(e.target.value)} type="text" name="" value={instructions}/>
        <label htmlFor="">Materials Needed:</label>
        <input onChange={(e)=>setMaterials(e.target.value)} type="text" name="" value={materials}/>
        <label htmlFor="">Tools Required:</label>
        <input onChange={(e)=>setTools(e.target.value)} type="text" name="" value={tools}/>
        <label htmlFor="">Est. Time to Complete (min):</label>
        <input onChange={(e)=>setTime(e.target.value)} type="text" name="" value={time}/>
        <label htmlFor="">Job Frequency:</label>
        <input onChange={(e)=>setFrequency(e.target.value)} type="text" name="" value={frequency}/>
        <button type="submit">Add to List</button>
      </form>
      
    </div>
  )
}

export default NewJob