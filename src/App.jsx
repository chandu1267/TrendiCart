import './App.css'
import LandingPage from './Pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import MensData from './Alldata/MensData'
import WomensData from './Alldata/WomensData'
import KidsData from './Alldata/KidsData'
import Mensingle from './Singles/Mensingle'
import Womensingle from './Singles/Womensingle'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/mens' element={<MensData/>}/>
      <Route path='/womens' element={<WomensData/>}/>
      <Route path='/kids' element={<KidsData/>}/>
        <Route path='/mens/:id' element={<Mensingle/>}/>
        <Route path='/womens/:id' element={<Womensingle/>}/>

    </Routes>
    </>
  )
}

export default App
