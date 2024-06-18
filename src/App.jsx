import SearchImages from "./components/SearchImages/SearchImages"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { CodeGenerator } from "./components/CodeGenerator/CodeGenerator"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/searchimage" element={<SearchImages />} />
        <Route path="/codegenerator" element={<CodeGenerator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App