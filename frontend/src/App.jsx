import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home.jsx'
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
