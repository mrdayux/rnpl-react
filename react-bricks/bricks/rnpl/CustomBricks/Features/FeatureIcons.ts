import {
  HomeIcon,
  ShieldCheck,
  Wallet,
  HelpCircle,
  LineChart,
  Users,
  Brush,
  Building,
  Scale,
  Key,
  BadgeCheck,
  Star,
  LucideIcon,
} from 'lucide-react'

export interface IconOption {
  value: string
  label: string
  icon: LucideIcon
}

export const FEATURE_ICONS: { [key: string]: LucideIcon } = {
  home: HomeIcon,
  shield: ShieldCheck,
  wallet: Wallet,
  help: HelpCircle,
  chart: LineChart,
  users: Users,
  brush: Brush,
  building: Building,
  scale: Scale,
  key: Key,
  badge: BadgeCheck,
  star: Star,
}

export const ICON_OPTIONS: IconOption[] = [
  { value: 'home', label: 'Home', icon: HomeIcon },
  { value: 'shield', label: 'Shield', icon: ShieldCheck },
  { value: 'wallet', label: 'Wallet', icon: Wallet },
  { value: 'help', label: 'Help', icon: HelpCircle },
  { value: 'chart', label: 'Chart', icon: LineChart },
  { value: 'users', label: 'Users', icon: Users },
  { value: 'brush', label: 'Brush', icon: Brush },
  { value: 'building', label: 'Building', icon: Building },
  { value: 'scale', label: 'Scale', icon: Scale },
  { value: 'key', label: 'Key', icon: Key },
  { value: 'badge', label: 'Badge', icon: BadgeCheck },
  { value: 'star', label: 'Star', icon: Star },
]
