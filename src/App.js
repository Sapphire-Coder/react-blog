import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <nav>
        <Link to = '/'>Home</Link>
        <Link to = '/new'>Create new Post</Link>
      </nav>
      <Routes>
        <Route path = '/' />
        <Route path = '/:id' />
        <Route path = '/new' />
        <Route path = '/:id/edit' />
      </Routes>
    </Router>
  )
}

export default App