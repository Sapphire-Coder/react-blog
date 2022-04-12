import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'

const App = () => {

  return (
    <Router>
      <nav>
        <Link to = '/'>Home </Link>
        <Link to = '/new'>Create new Post</Link>
      </nav>
      <Routes>
        <Route path = '/' element = { <Home /> } />
        <Route path = '/:id' />
        <Route path = '/new' element = { <New /> } />
        <Route path = '/:id/edit' />
      </Routes>
    </Router>
  )
}

export default App