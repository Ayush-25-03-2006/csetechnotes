import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import Dbms from './Components/Dbms'
import Oops from './Components/Oops'
import Networking from './Components/Networking'
import Daa from './Components/Daa'
import Dsa from './Components/Dsa'
import Os from './Components/Os'
import De from './Components/De'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello Developers, Have Eager To Learn !</h1>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/Dbms" element={<Dbms/>} />
          <Route path='/Oops' element={<Oops/>}/>
          <Route path='/Networking' element={<Networking/>}/>
          <Route path='/Daa' element={<Daa/>}/>
          <Route path='/Dsa' element={<Dsa/>}/>
          <Route path='/Os' element={<Os/>}/>
          <Route path="/De" element={<De/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App