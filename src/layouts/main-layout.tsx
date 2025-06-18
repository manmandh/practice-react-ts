import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/sidebar/sidebar'

export default function MainLayout() {
  return (
    <main className='flex bg-base-form-bg'>
      <div className='max-w-[104px] bg-base-dark-bg-2 rounded-tr-[16px] rounded-br-[16px]'>
        <Sidebar />
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </main>
  )
}
