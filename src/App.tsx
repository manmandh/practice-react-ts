import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import './App.css'
import HomePage from './pages/home/homePage'
import { ProductModalProvider } from './context/productModalContext/productModalContext'
import ProductModal from './components/common/productForm/productModal'
import ProductManagemnentPage from './pages/product-management/productManagementPage'


function App() {
  return (
    <BrowserRouter>
      <ProductModalProvider>
        {' '}
        <ToastContainer pauseOnFocusLoss={false} hideProgressBar position='top-right' />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/manage/product' element={<ProductManagemnentPage />} />

          <Route
            path='*'
            element={<div className='absolute inset-0 flex items-center justify-center'>Page Not Found</div>}
          />
        </Routes>
      </ProductModalProvider>
    </BrowserRouter>
  )
}

export default App
