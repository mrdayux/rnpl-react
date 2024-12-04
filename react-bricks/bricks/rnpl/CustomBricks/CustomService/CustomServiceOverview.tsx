import { Text, Repeater, types } from 'react-bricks/rsc'
import blockNames from '../../../react-bricks-ui/blockNames'
import {
  LayoutProps,
  sectionDefaults,
} from '../../../react-bricks-ui/LayoutSideProps'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import { cn } from '@/lib/utils'

export interface ServiceOverviewSectionProps extends LayoutProps {
  title: types.TextValue
  subtitle: types.TextValue
  services: types.RepeaterItems
  backgroundStyle: 'light' | 'dark' | 'alternating'
}

const ServiceOverviewSection: types.Brick<ServiceOverviewSectionProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  title,
  subtitle,
  services,
  backgroundStyle = 'light',
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="space-y-16"
      >
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <Text
            propName="title"
            value={title}
            renderBlock={(props) => (
              <h2
                className="text-4xl font-bold text-gray-900 mb-4"
                {...props.attributes}
              >
                {props.children}
              </h2>
            )}
          />

          <Text
            propName="subtitle"
            value={subtitle}
            renderBlock={(props) => (
              <p className="text-xl text-gray-600" {...props.attributes}>
                {props.children}
              </p>
            )}
          />
        </div>

        {/* Services */}
        <Repeater
          propName="services"
          items={services}
          itemProps={(index: number) => ({
            imagePosition: index % 2 === 0 ? 'left' : 'right',
            backgroundStyle:
              backgroundStyle === 'alternating'
                ? index % 2 === 0
                  ? 'light'
                  : 'dark'
                : backgroundStyle,
          })}
          renderWrapper={(items) => <div className="space-y-8">{items}</div>}
        />
      </Container>
    </Section>
  )
}

ServiceOverviewSection.schema = {
  name: blockNames.ServiceOverviewSection,
  label: 'Service Overview',
  category: 'RNPL sections',

  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundStyle: 'light',
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'Our Services' }],
      },
    ],
    subtitle: [
      {
        type: 'paragraph',
        children: [
          { text: 'Comprehensive solutions for your real estate needs' },
        ],
      },
    ],
    services: [
      {
        title: [
          {
            type: 'paragraph',
            children: [{ text: 'Property Renovation' }],
          },
        ],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Transform your property with our expert renovation services. From kitchen updates to complete home makeovers, we handle every aspect of the renovation process.',
              },
            ],
          },
        ],
        image: {
          src: '/api/placeholder/800/600',
          placeholderSrc: '/api/placeholder/800/600',
          alt: 'Property Renovation',
        },
        ctaText: [
          {
            type: 'paragraph',
            children: [{ text: 'Learn More' }],
          },
        ],
        ctaLink: '#',
        bulletPoints: [
          {
            text: [
              {
                type: 'paragraph',
                children: [{ text: 'Custom renovation planning' }],
              },
            ],
          },
          {
            text: [
              {
                type: 'paragraph',
                children: [{ text: 'Expert contractor network' }],
              },
            ],
          },
          {
            text: [
              {
                type: 'paragraph',
                children: [{ text: 'Flexible financing options' }],
              },
            ],
          },
        ],
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'services',
      itemType: blockNames.CustomServiceItem,
      itemLabel: 'Service',
      min: 1,
      max: 6,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'backgroundStyle',
          label: 'Background Style',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
              { value: 'alternating', label: 'Alternating' },
            ],
          },
        },
      ],
    },
  ],
}

export default ServiceOverviewSection
