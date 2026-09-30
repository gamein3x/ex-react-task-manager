import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import TaskList from './Pages/TaskList.jsx'
import AddTask from './Pages/AddTask.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskList />} />
      <Route path="/add-task" element={<AddTask />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
