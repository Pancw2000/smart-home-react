import "./App.css"
import { Link, Route, Routes } from "react-router-dom"
import Rooms from "./rooms/Rooms"
import Home from "./Home"
import Header from "./Header"
import LivingRoom from "./rooms/LivingRoom"
import Kitchen from "./rooms/Kitchen"
import Office from "./rooms/Office"
import FittingRoom from "./rooms/FittingRoom"
import Login from "./Login"

function App() {
  return (
    <>

      {/* routes */}
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/rooms" element={<Header></Header>}>
          <Route index element={<Rooms></Rooms>}></Route>
          <Route path="livingRoom" element={<LivingRoom></LivingRoom>}></Route>
          <Route path="kitchen" element={<Kitchen></Kitchen>}></Route>
          <Route path="office" element={<Office></Office>}></Route>
          <Route path="fittingRoom" element={<FittingRoom></FittingRoom>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
