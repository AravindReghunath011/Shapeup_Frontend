import Login from "@/pages/trainer/Login"
import Otp from "@/pages/trainer/Otp"
import Register from "@/pages/trainer/Register"
import { Route,Routes } from "react-router-dom"



const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/otp" element={<Otp/>}/>
        
    </Routes>
  )
}

export default UserRoutes