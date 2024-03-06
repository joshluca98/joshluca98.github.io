import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import { Outlet } from 'react-router';



function App(main) {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
