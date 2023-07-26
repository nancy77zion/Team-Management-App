import Header from './components/Header'
import Footer from './components/Footer'
import Employees from './components/Employees'
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import GroupedTeam from './components/GroupedTeam'
import Nav from './components/Nav'
import Error from './components/Error'
import {DataProvider} from './context/DataContext'
import './App.css'

function App() {

  return (
    <DataProvider>
       <Router>
      <Nav />
      <Header />
      <Routes>
        <Route path='/' element={<Employees  />} />
        <Route path='/groupTeam' element={<GroupedTeam />} />
        <Route path='*' element={<Error />} />
      </Routes>
     
     
      <Footer />
    </Router>
    </DataProvider>
   
  )
}

export default App
