import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import './App.css'
import HomePage from './pages/home/homePage'
import { ProductModalProvider } from './context/productModalContext/productModalContext'
import ProductModal from './Components/common/productForm/productModal'

function App() {
  return (
    <BrowserRouter>
      <ProductModalProvider>
        {' '}
        <ToastContainer pauseOnFocusLoss={false} hideProgressBar position='top-right' />
        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path='*'
            element={<div className='absolute inset-0 flex items-center justify-center'>Page Not Found</div>}
          />
        </Routes>
        <ProductModal />
      </ProductModalProvider>
    </BrowserRouter>
  )
}

export default App
