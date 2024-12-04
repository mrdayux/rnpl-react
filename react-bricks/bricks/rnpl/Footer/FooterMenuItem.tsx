import { Link, Text, types, Image } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'

interface FooterMenuItemProps {
  linkPath: string
  linkText: types.TextValue
}

const FooterMenuItem: types.Brick<FooterMenuItemProps> = ({
  linkPath,
  linkText,
}) => {
  return (
    <Link
      href={linkPath}
      className="text-sm font-semibold hover:text-[#E05D36] text-white transition-colors"
    >
      <Text
        propName="linkText"
        value={linkText}
        renderBlock={({ children }) => <span>{children}</span>}
      />
    </Link>
  )
}

FooterMenuItem.schema = {
  name: blockNames.FooterMenuItem,
  label: 'Footer Menu Item',
  category: 'layout',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    linkPath: '/',
    linkText: 'Menu Item',
  }),

  sideEditProps: [
    {
      name: 'linkPath',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
    },
  ],
}

const FooterSocialIcon: types.Brick<{
  icon: types.IImageSource
  link: string
}> = ({ icon, link }) => {
  return (
    <Link href={link} className="transition-opacity hover:opacity-80">
      <Image
        propName="icon"
        source={icon}
        alt="Social Icon"
        imageClassName="w-6 h-6"
      />
    </Link>
  )
}

FooterSocialIcon.schema = {
  name: blockNames.FooterSocialIcon,
  label: 'Social Icon',
  category: 'layout',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    icon: {
      src: '/path-to-default-icon.svg',
      alt: 'Social Icon',
    },
    link: 'https://example.com',
  }),

  sideEditProps: [
    {
      name: 'link',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
    },
  ],
}

export { FooterMenuItem, FooterSocialIcon }
