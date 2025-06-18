import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import './App.css'
import HomePage from './pages/home/homePage'
import { ProductModalProvider } from './context/productModalContext/productModalContext'
import MainLayout from './layouts/main-layout'
import ChartPage from './pages/charts/chartPage'
import MessagePage from './pages/messages/messagePage'
import NotificationPage from './pages/notifications/notificationPage'
import SettingPage from './pages/settings/settingPage'
import DiscountPage from './pages/discounts/discountPage'

function App() {
  return (
    <BrowserRouter>
      <ProductModalProvider>
        {' '}
        <ToastContainer pauseOnFocusLoss={false} hideProgressBar position='top-right' />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='' element={<HomePage />} />
            <Route path='charts' element={<ChartPage />} />
            <Route path='messages' element={<MessagePage />} />
            <Route path='notifications' element={<NotificationPage />} />
            <Route path='settings' element={<SettingPage />} />
            <Route path='discounts' element={<DiscountPage />} />
          </Route>
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
