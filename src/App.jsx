// src/App.jsx
import { useState , useEffect} from 'react'
import './App.css'
import * as studentService from './services/studentServices'


const App = () => {

  const [students, setStudents] = useState ([])
  const [refreshTrigger, serRefreshTrigger] = useState(true)

  const fetchAllStudents = async () => {
    const studentData = await studentService.index()
    // console.log(studentData)
    setStudents(studentData)
  }

  
  useEffect (() => {
    fetchAllStudents ()
  }, [refreshTrigger])

const handledelete = async(id) =>{
  await studentService.deleteStudent(id)
setRefreshTrigger(!refreshTrigger)
}
  return (
    <>
      <h1>Fetch All the Students</h1>
      <ul>
        {students.map ((student) => (
          <li key ={student._id} > {student.name}
          <button onClick ={() => handleDelete(student._id)}>X</button>
           </li>
        ))}
      </ul>
    </>
  );
}

export default App








