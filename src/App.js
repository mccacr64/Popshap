import { Routes, Route } from 'react-router-dom'
import AddScore from './components/addScore'
import CurrentScores from './components/currentScores'
import './App.css'

function App() {
  
  return (
    <>
      <img className="companyLogo" src={require('./img/popshap_logo.png')} alt="popshap-logo" />
      <Routes>
        <Route path="/" element={<CurrentScores/>}></Route>
        <Route path="/addScore" element={<AddScore/>}></Route>
      </Routes>
    </>
  )
}

export default App;
