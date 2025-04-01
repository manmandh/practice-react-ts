import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import './App.css'
import HomePage from './pages/Home/HomePage'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer pauseOnFocusLoss={false} hideProgressBar position='top-right' />
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path='*'
          element={<div className='absolute inset-0 flex items-center justify-center'>Page Not Found</div>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
