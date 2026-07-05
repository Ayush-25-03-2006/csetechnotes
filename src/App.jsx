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
import Matrix from './Components/Matrix'
import Java from './Components/Java'
import Probability_Statistics from './Components/Probability_Statistics'
import Dc from './Components/Dc'
import Discrete from './Components/Discrete'
import C from './Components/c'
import Mathematics from './Components/Mathematics'
import Programming from './Components/Programming'
import Toc from './Components/Toc'
import Ai from './Components/Ai'
import Se from './Components/Se'
import Quiz from './Components/Quiz'
import Dsa_quiz from './Components/Dsa_Quiz'
import Programming_Quiz from './Components/Programming_Quiz'
import Os_quiz from './Components/Os_Quiz'
import Daa_quiz from './Components/Daa_Quiz'
import De_Quiz from './Components/De_Quiz'
import C_quiz from './Components/C_Quiz'
import Dbms_quiz from './Components/Dbms_Quiz'
import Se_Quiz from './Components/Se_Quiz'
import Ai_quiz from './Components/Ai_Quiz'
import Oops_quiz from './Components/Oops_Quiz'
import Toc_quiz from './Components/Toc_Quiz'
import VisitorCounter from './VisitorCounter'
import About from './Components/about'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1 style={{color:"black", backgroundColor:"burlywood"}}>Hello Engineer's, Have Eager To Learn !</h1>
        <Navbar/>
        <VisitorCounter/>

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/Dbms" element={<Dbms/>} />
          <Route path='/Oops' element={<Oops/>}/>
          <Route path='/Networking' element={<Networking/>}/>
          <Route path='/Daa' element={<Daa/>}/>
          <Route path='/Dsa' element={<Dsa/>}/>
          <Route path='/Os' element={<Os/>}/>
          <Route path="/De" element={<De/>}/>
          <Route path="/Matrix" element={<Matrix/>}/>
          <Route path="/Java" element={<Java/>}/>
          <Route path='/Ps' element={<Probability_Statistics/>}/>
          <Route path='/Dc' element={<Dc/>}/>
          <Route path='/Discrete' element={<Discrete/>}/>
          <Route path='/C' element={<C/>}/>
          <Route path='/Mathematics' element={<Mathematics/>}/>
          <Route path='/Programming' element={<Programming/>}/>
          <Route path='/Toc' element={<Toc/>}/>
          <Route path='/Ai' element={<Ai/>}/>
          <Route path='/Se' element={<Se/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/dsaquiz' element={<Dsa_quiz/>}/>
          <Route path='/programmingquiz' element={<Programming_Quiz/>}/>
          <Route path='/osquiz' element={<Os_quiz/>}/>
          <Route path='/daaquiz' element={<Daa_quiz/>}/>
          <Route path='/dequiz' element={<De_Quiz/>}/>
          <Route path='/cquiz' element={<C_quiz/>}/>
          <Route path='/dbmsquiz' element={<Dbms_quiz/>}/>
          <Route path='/sequiz' element={<Se_Quiz/>}/>
          <Route path='/aiquiz' element={<Ai_quiz/>}/>
          <Route path='/oopsquiz' element={<Oops_quiz/>}/>
          <Route path='/tocquiz' element={<Toc_quiz/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
