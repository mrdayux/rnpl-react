import { Image, Link, Text, Repeater, types } from 'react-bricks/rsc'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { LayoutProps } from '@/react-bricks/bricks/react-bricks-ui/LayoutSideProps'
import { bgColors } from '@/react-bricks/bricks/react-bricks-ui/colors'

interface FooterProps extends LayoutProps {
  logo: types.IImageSource
  socialIcons: types.RepeaterItems
  menuItems: types.RepeaterItems
  copyrightText: types.TextValue
}

const Footer: types.Brick<FooterProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  logo,
  socialIcons,
  menuItems,
  copyrightText,
}) => {
  return (
    <footer>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop ? 'full' : 'none'}
        borderBottom={borderBottom ? 'full' : 'none'}
      >
        <div className="py-8  md:px-0 mx-[6.55555%] md:mx-[5.1111%]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Link href="/" className="inline-flex">
              <Image
                propName="logo"
                source={logo}
                alt="Logo"
                maxWidth={300}
                imageClassName="h-8 w-auto object-contain"
              />
            </Link>
            <div className="flex flex-wrap gap-8">
              <Repeater
                propName="menuItems"
                items={menuItems}
                renderWrapper={(items) => (
                  <div className="flex flex-wrap gap-8">{items}</div>
                )}
              />
            </div>

            <Text
              propName="copyrightText"
              value={copyrightText}
              renderBlock={(props) => (
                <p
                  className="text-sm text-white order-2 md:order-none md:ml-8"
                  {...props.attributes}
                >
                  {props.children}
                </p>
              )}
            />

            <div className="flex items-center gap-4 order-1 md:order-none">
              <Repeater
                propName="socialIcons"
                items={socialIcons}
                renderWrapper={(items) => (
                  <div className="flex items-center gap-4">{items}</div>
                )}
              />
            </div>
          </div>
        </div>
      </Section>
    </footer>
  )
}

Footer.schema = {
  name: blockNames.RNPLFooter,
  label: 'RNPL Footer',
  category: 'Rnpl Layout',
  tags: ['rnpl', 'footer'],

  repeaterItems: [
    {
      name: 'menuItems',
      itemType: blockNames.FooterMenuItem,
      itemLabel: 'Menu Item',
      min: 0,
      max: 6,
    },
    {
      name: 'socialIcons',
      itemType: blockNames.FooterSocialIcon,
      itemLabel: 'Social Icon',
      min: 0,
      max: 4,
    },
  ],

  getDefaultProps: () => ({
    backgroundColor: bgColors.BLACK.value,
    borderTop: 'none',
    borderBottom: 'none',
    logo: {
      src: '/api/placeholder/120/40?text=CONNECT',
      placeholderSrc: '/api/placeholder/120/40?text=CONNECT',
      srcSet: '',
      width: 120,
      height: 40,
      alt: 'Connect',
      seoName: 'connect-logo',
    },
    menuItems: [
      { linkPath: '/terms', linkText: 'Terms' },
      { linkPath: '/privacy', linkText: 'Privacy Policy' },
      { linkPath: '/about', linkText: 'About Us' },
      { linkPath: '/contact', linkText: 'Contact us' },
    ],
    socialIcons: [
      {
        icon: {
          src: '/api/placeholder/24/24?text=FB',
          placeholderSrc: '/api/placeholder/24/24?text=FB',
          alt: 'Facebook',
        },
        link: 'https://facebook.com',
      },
      {
        icon: {
          src: '/api/placeholder/24/24?text=IG',
          placeholderSrc: '/api/placeholder/24/24?text=IG',
          alt: 'Instagram',
        },
        link: 'https://instagram.com',
      },
      {
        icon: {
          src: '/api/placeholder/24/24?text=LI',
          placeholderSrc: '/api/placeholder/24/24?text=LI',
          alt: 'LinkedIn',
        },
        link: 'https://linkedin.com',
      },
    ],
    copyrightText: [
      {
        type: 'paragraph',
        children: [{ text: '© Copyright 2024. Zumin - All rights reserved' }],
      },
    ],
  }),

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'backgroundColor',
          label: 'Background',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              bgColors.WHITE,
              bgColors.LIGHT_GRAY,
              bgColors.DARK_GRAY,
              bgColors.BLACK,
            ],
          },
        },
      ],
    },
  ],
}

export default Footer
