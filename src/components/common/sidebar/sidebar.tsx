import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavItem, navItems } from '../../../utils/constants/constants'
import { Logo, LogoutIcon } from '../../../assets/icons/index'

interface NavItemProps {
  item: NavItem
  isActive: boolean
}

const ActiveCorners: React.FC = () => (
  <>
    {/* Top corner */}
    <span className='absolute bottom-full right-0 block border-[6px] border-base-form-bg border-b-base-form-bg'></span>
    <span className='absolute bottom-full right-0 z-[1] block border-[12px] border-[transparent] border-r-base-dark-bg-2 rotate-45 rounded-[16px]'></span>
    {/* Bottom corner */}
    <span className='absolute top-full right-0 block border-[6px] border-base-form-bg border-t-base-form-bg'></span>
    <span className='absolute top-full right-0 z-[1] block border-[12px] border-[transparent] border-r-base-dark-bg-2 -rotate-45 rounded-[16px]'></span>
  </>
)

const SidebarNavItem: React.FC<NavItemProps> = ({ item, isActive }) => (
  <Link to={item.path} className={`group rounded-lg pl-3 bg-base-dark-bg-2 relative`}>
    <div className={`p-3 ${isActive ? 'bg-base-form-bg' : ''} rounded-tl-xl rounded-bl-xl`}>
      <div
        className={`p-4 ${isActive ? 'bg-primary' : ''} inline-flex items-center justify-center rounded-[8px] ${
          !isActive ? 'group-hover:bg-red-600' : ''
        }`}
      >
        {isActive && <ActiveCorners />}
        <img
          src={item.icon}
          alt={item.alt}
          className='w-6 h-6 invert-[75%] sepia-[100%] saturate-[600%] hue-rotate-[0deg] brightness-[100%] contrast-[100%] group-hover:invert group-hover:brightness-50'
        />
      </div>
    </div>
  </Link>
)

const Sidebar: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <div className='h-screen flex flex-col py-6'>
      <div className='px-6'>
        <figure className='p-3 size-[56px] bg-accent-orange/30 rounded-[12px] mb-6'>
          <img src={Logo} alt='Home' />
        </figure>
      </div>

      {navItems.map((item) => (
        <SidebarNavItem key={item.path} item={item} isActive={pathname === item.path} />
      ))}

      <div className='mt-auto'>
        <Link to='/logout' className='group p-2 rounded-lg'>
          <div className='px-6 rounded-xl group-hover:bg-red-600'>
            <figure className='px-3'>
              <img
                src={LogoutIcon}
                alt='Logout'
                className='w-6 h-6 invert-[75%] sepia-[100%] saturate-[600%] hue-rotate-[0deg] brightness-[100%] contrast-[100%] group-hover:invert group-hover:brightness-50'
              />
            </figure>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
