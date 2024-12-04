import { Text, Link, Image, types } from 'react-bricks/rsc'
import blockNames from '../../react-bricks-ui/blockNames'
import {
  LayoutProps,
  sectionDefaults,
} from '../../react-bricks-ui/LayoutSideProps'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface CTASectionProps extends LayoutProps {
  backgroundType: 'color' | 'image' | 'gradient'
  backgroundColor: { color: string; className: string }
  backgroundImage: types.IImageSource
  gradientFrom: string
  gradientVia: string
  gradientTo: string
  headline: types.TextValue
  subheadline: types.TextValue
  ctaText: types.TextValue
  ctaLink: string
  buttonStyle: 'primary' | 'secondary' | 'outline'
  buttonSize: 'small' | 'medium' | 'large'
  overlayOpacity:
    | '0'
    | '10'
    | '20'
    | '30'
    | '40'
    | '50'
    | '60'
    | '70'
    | '80'
    | '90'
  contentWidth: 'narrow' | 'medium' | 'wide'
}

const CTASection: types.Brick<CTASectionProps> = ({
  backgroundType = 'color',
  backgroundColor,
  backgroundImage,
  gradientFrom,
  gradientVia,
  gradientTo,
  headline,
  subheadline,
  ctaText,
  ctaLink,
  buttonStyle = 'primary',
  buttonSize = 'large',
  overlayOpacity = '50',
  contentWidth = 'medium',
  paddingTop,
  paddingBottom,
}) => {
  const getBackgroundStyles = () => {
    switch (backgroundType) {
      case 'gradient':
        return `bg-gradient-to-r from-[${gradientFrom}] via-[${gradientVia}] to-[${gradientTo}]`
      case 'color':
        return backgroundColor.className
      case 'image':
        return 'relative'
      default:
        return ''
    }
  }

  const getButtonClasses = () => {
    const baseClasses =
      'mt-8 font-semibold rounded-full transition-all duration-200'
    const sizeClasses = {
      small: 'px-6 py-2 text-sm',
      medium: 'px-8 py-3 text-base',
      large: 'px-10 py-4 text-lg',
    }
    const styleClasses = {
      primary: 'bg-[#E05D36] hover:bg-[#c24e2d] text-white',
      secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
      outline:
        'border-2 border-[#E05D36] text-[#E05D36] hover:bg-[#E05D36] hover:text-white',
    }

    return cn(baseClasses, sizeClasses[buttonSize], styleClasses[buttonStyle])
  }

  const getContentMaxWidth = () => {
    switch (contentWidth) {
      case 'narrow':
        return 'max-w-2xl'
      case 'medium':
        return 'max-w-4xl'
      case 'wide':
        return 'max-w-6xl'
      default:
        return 'max-w-4xl'
    }
  }

  return (
    <Container>
      <Section
        className={cn(
          'relative overflow-hidden mx-auto',
          getBackgroundStyles()
        )}
      >
        {backgroundType === 'image' && (
          <>
            <Image
              propName="backgroundImage"
              source={backgroundImage}
              alt="Background"
              imageClassName="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className={cn(
                'absolute inset-0 bg-black',
                `opacity-${overlayOpacity}`
              )}
            />
          </>
        )}

        <Container
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
          className={cn(
            'relative z-10',
            getContentMaxWidth(),
            'mx-auto text-center px-4'
          )}
        >
          <Text
            propName="headline"
            value={headline}
            renderBlock={(props) => (
              <h2
                className={cn(
                  'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
                  backgroundType === 'image' ? 'text-white' : 'text-gray-900'
                )}
                {...props.attributes}
              >
                {props.children}
              </h2>
            )}
          />

          <Text
            propName="subheadline"
            value={subheadline}
            renderBlock={(props) => (
              <p
                className={cn(
                  'text-xl md:text-2xl mb-8',
                  backgroundType === 'image' ? 'text-gray-100' : 'text-gray-600'
                )}
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
          />

          <Button asChild className={getButtonClasses()}>
            <Link href={ctaLink}>
              <Text
                propName="ctaText"
                value={ctaText}
                renderBlock={(props) => <span>{props.children}</span>}
              />
            </Link>
          </Button>
        </Container>
      </Section>
    </Container>
  )
}

CTASection.schema = {
  name: blockNames.CTASection,
  label: 'Call to Action',
  category: 'RNPL sections',

  getDefaultProps: () => ({
    ...sectionDefaults,
    paddingTop: '20',
    paddingBottom: '20',
    backgroundType: 'color',
    backgroundColor: { color: '#E05D36', className: 'bg-[#E05D36]' },
    gradientFrom: '#E05D36',
    gradientVia: '#E07D36',
    gradientTo: '#E09936',
    overlayOpacity: '50',
    contentWidth: 'medium',
    buttonStyle: 'primary',
    buttonSize: 'large',
    headline: [
      {
        type: 'paragraph',
        children: [{ text: 'Start Your Renovation Journey Today' }],
      },
    ],
    subheadline: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Transform your space with flexible financing options and expert guidance',
          },
        ],
      },
    ],
    ctaText: [
      {
        type: 'paragraph',
        children: [{ text: 'Get Started Now' }],
      },
    ],
    ctaLink: '#',
  }),

  sideEditProps: [
    {
      groupName: 'Background',
      defaultOpen: true,
      props: [
        {
          name: 'backgroundType',
          label: 'Background Type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'color', label: 'Color' },
              { value: 'image', label: 'Image' },
              { value: 'gradient', label: 'Gradient' },
            ],
          },
        },
        {
          name: 'backgroundColor',
          label: 'Background Color',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              {
                value: { color: '#E05D36', className: 'bg-[#E05D36]' },
                label: 'Primary',
              },
              {
                value: { color: '#1F2937', className: 'bg-gray-800' },
                label: 'Dark',
              },
              {
                value: { color: '#F3F4F6', className: 'bg-gray-100' },
                label: 'Light',
              },
            ],
          },
          show: ({ backgroundType }) => backgroundType === 'color',
        },
        {
          name: 'overlayOpacity',
          label: 'Overlay Opacity',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '0', label: '0%' },
              { value: '10', label: '10%' },
              { value: '20', label: '20%' },
              { value: '30', label: '30%' },
              { value: '40', label: '40%' },
              { value: '50', label: '50%' },
              { value: '60', label: '60%' },
              { value: '70', label: '70%' },
              { value: '80', label: '80%' },
              { value: '90', label: '90%' },
            ],
          },
          show: ({ backgroundType }) => backgroundType === 'image',
        },
      ],
    },
    {
      groupName: 'Button',
      defaultOpen: true,
      props: [
        {
          name: 'ctaLink',
          label: 'Button Link',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'buttonStyle',
          label: 'Button Style',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'primary', label: 'Primary' },
              { value: 'secondary', label: 'Secondary' },
              { value: 'outline', label: 'Outline' },
            ],
          },
        },
        {
          name: 'buttonSize',
          label: 'Button Size',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
            ],
          },
        },
      ],
    },
    {
      groupName: 'Layout',
      defaultOpen: false,
      props: [
        {
          name: 'contentWidth',
          label: 'Content Width',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'narrow', label: 'Narrow' },
              { value: 'medium', label: 'Medium' },
              { value: 'wide', label: 'Wide' },
            ],
          },
        },
      ],
    },
  ],
}

export default CTASection
