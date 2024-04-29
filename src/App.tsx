import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Acadamics } from "./pages/acadamics"
import { Projects } from "./pages/projects"
import { Extracurricular } from "./pages/extraactivities"
import { Layout } from "./layout"
import { About } from "./pages/About"

function App() {

// App bar
return (
  <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout/>}/>
        < Route path="/academics" element = {<Acadamics/>} />
        < Route path="/projects" element = {<Projects/>} />
        < Route path="/extracurricularactivities" element = {<Extracurricular/>} />
        <Route path="/about" element={<About/>}></Route>
     </Routes>
  </BrowserRouter>
)
}

export default App
