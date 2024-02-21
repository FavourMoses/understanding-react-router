import './App.css';
import{Routes,Route} from 'react-router-dom';
import Homep from './pages/homepage';
import Servicep from './pages/servicespage';
import Aboutp from './pages/aboutpage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homep/>}/>
        <Route path='/services' element={<Servicep/>}/>
        <Route path='/about' element={<Aboutp/>}/>
      </Routes>
    </>
  )
}

export default App
