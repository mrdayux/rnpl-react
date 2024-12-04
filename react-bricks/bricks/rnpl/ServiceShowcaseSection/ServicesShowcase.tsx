import classNames from 'classnames'
import { Text, Image, Link, Repeater, types } from 'react-bricks/rsc'
import {
  LayoutProps,
  sectionDefaults,
} from '../../react-bricks-ui/LayoutSideProps'
import blockNames from '../../react-bricks-ui/blockNames'
import { bgColors } from '../../react-bricks-ui/colors'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'

export interface ServicesShowcaseProps extends LayoutProps {
  sectionTitle: types.TextValue
  subtitle: types.TextValue
  services: types.RepeaterItems
}

const ServicesShowcase: types.Brick<ServicesShowcaseProps> = ({
  backgroundColor = bgColors.WHITE.value,
  backgroundImage,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  sectionTitle,
  subtitle,
  services = [],
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      borderTop={borderTop}
      borderBottom={borderBottom}
      className={'mx-2 md:mx-3 lg:mx-24 xl:mx-32'}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="space-y-10"
      >
        <div className="text-center">
          <Text
            propName="sectionTitle"
            value={sectionTitle}
            renderBlock={(props) => (
              <h2 className="text-4xl font-bold mb-4" {...props.attributes}>
                {props.children}
              </h2>
            )}
            placeholder="Type a title..."
          />
          <Text
            propName="subtitle"
            value={subtitle}
            renderBlock={(props) => (
              <p className="text-lg text-gray-600" {...props.attributes}>
                {props.children}
              </p>
            )}
            placeholder="Type a subtitle..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Repeater propName="services" items={services} />
        </div>
      </Container>
    </Section>
  )
}

ServicesShowcase.schema = {
  name: blockNames.ServicesShowcase,
  label: 'Services Showcase',
  category: 'RNPL sections',
  previewImageUrl: `/bricks-preview-images/${blockNames.ServicesShowcase}.png`,

  getDefaultProps: () => ({
    ...sectionDefaults,
    sectionTitle: [
      {
        type: 'paragraph',
        children: [{ text: 'Getting Started with RNPL' }],
      },
    ],
    subtitle: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Whether renovating to sell or stay, Renovate Now, Pay Later (RNPL) empowers you to start your project today with flexible financing, connecting you to trusted professionals, premium materials, and seamless management for stress-free home improvements.',
          },
        ],
      },
    ],
    services: [
      {
        title: [{ type: 'paragraph', children: [{ text: 'Real Estate' }] }],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: "We specialize in real estate improvements and commercial builds that maximize value—whether you're buying, selling, or planning your next project. Our agents are your guides, ensuring every transaction and project is managed with expert care.",
              },
            ],
          },
        ],
        image: {
          src: '/api/placeholder/400/320',
          placeholderSrc: '/api/placeholder/400/320',
          alt: 'Real Estate',
        },
        buttonText: [{ type: 'paragraph', children: [{ text: 'Learn More' }] }],
        buttonLink: '#',
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'services',
      itemType: blockNames.ServiceCard,
      itemLabel: 'Service',
      min: 1,
      max: 4,
    },
  ],

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
              bgColors.GRAY,
              bgColors.DARK_GRAY,
            ],
          },
        },
      ],
    },
  ],
}

export default ServicesShowcase
