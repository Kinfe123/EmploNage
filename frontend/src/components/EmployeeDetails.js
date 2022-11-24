import DeleteEmployee from "./DeleteEmployee"
import EditEmployeee from './EditEmployee'
import { createContext  , useEffect, useState} from "react"

import { Link  , useNavigate} from "react-router-dom"
const EmployeeDetails = (props) => {
  const {id , employee} = props
  const navigate = useNavigate();
  // const [isEditing , setIsEditing] = useState(false)
  // const [edited , setEdited] = useState('')
  const [editStatus , setEditStatus] = useState(false)
  // const [alert , setAlert] = useState({show:false, msg:"" , type:""})
  // const editContext = createContext()
  const selectUser = () => {
  
    setEditStatus(true)
    // navigate('/edit')
    
  }
  
  const passValue = () => {

  }
  const FunEdit=(id)=>{
    navigate('/edit/'+id)
  }
  // console.log(editStatus)
  return (

    <div className="workout-details">
      <h4>{employee.name}</h4>
      <p><strong>Date Of Birth : </strong>{employee.dateOfBirth}</p>
      <p><strong>Gender: </strong>{employee.gender}</p>
      <p><strong>Salary: $</strong>{employee.salary}</p>
      

      
      <button className="btn" onClick={()=>FunEdit(id)}>Edit</button>
       {/* <button className="btn"onClick={selectUser}>Edit</button> */}
      
        
      
      {/* {editStatus ? <EditForm ids={id} employees = {employee} />: ""} */}
      <DeleteEmployee ids={id} />
      
      
    </div>
  )
}

export default EmployeeDetails