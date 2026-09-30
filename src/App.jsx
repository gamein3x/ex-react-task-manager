import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import TaskList from './Pages/TaskList.jsx'
import AddTask from './Pages/AddTask.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'

function App() {

  return (
    <GlobalProvider>
      <nav className="test-nav">
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/tasks">Lista Task</NavLink>
        <NavLink to="/add-task">Aggiungi una task</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </GlobalProvider>
  )
}

export default App
