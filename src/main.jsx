import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import TaskList from './Pages/TaskList.jsx'
import AddTask from './Pages/AddTask.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'


const router = createBrowserRouter([
  {path : "/", element : <App />},
  {path : "/tasks", element : <TaskList />},
  {path : "/add-task", element : <AddTask />},
  {path : "*", element : <NotFoundPage />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
