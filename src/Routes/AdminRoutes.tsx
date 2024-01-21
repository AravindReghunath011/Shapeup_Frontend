import Login from "@/pages/admin/Login"
import { Route,Routes } from "react-router-dom"
import UserList from '@/pages/admin/UserList'
import TrainersList from '@/pages/admin/TrainersList'


const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/trainers" element={<TrainersList/>}/>
        
    </Routes>
  )
}

export default UserRoutes