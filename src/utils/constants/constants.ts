import { HomeIcon, DiscountIcon, GraphIcon, MessageIcon, NotificationIcon, SettingIcon } from '../../assets/icons/index'

export interface NavItem {
  path: string
  icon: string
  alt: string
}

export const navItems: NavItem[] = [
  { path: '/', icon: HomeIcon, alt: 'Home' },
  { path: '/discounts', icon: DiscountIcon, alt: 'Discounts' },
  { path: '/charts', icon: GraphIcon, alt: 'Graphs' },
  { path: '/messages', icon: MessageIcon, alt: 'Messages' },
  { path: '/notifications', icon: NotificationIcon, alt: 'Notifications' },
  { path: '/settings', icon: SettingIcon, alt: 'Settings' }
]
