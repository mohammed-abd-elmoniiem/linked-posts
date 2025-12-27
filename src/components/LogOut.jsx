import React ,{useContext} from 'react'
import { useNavigate } from 'react-router';
import { UserContext } from '../context/userContext';



function LogOut() {
    
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null);
    navigate('/login')
  }

  return (

      <button className='text-md hover:underline text-amber-400  rounded flex items-center gap-3 group' onClick={handleLogout}>

        <span className="">Log out</span>
        <i className="fa fa-sign-out peer"></i>
        </button>

  )
}

export default LogOut