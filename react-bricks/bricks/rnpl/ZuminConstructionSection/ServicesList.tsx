import { RichText, Text, Repeater, types } from 'react-bricks/rsc'
import {
  LayoutProps,
  sectionDefaults,
} from '../../react-bricks-ui/LayoutSideProps'
import blockNames from '../../react-bricks-ui/blockNames'
import { bgColors } from '../../react-bricks-ui/colors'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import RNPLButton from '@/react-bricks/bricks/rnpl/shared/Button'
import { buttonSideProps } from '@/react-bricks/bricks/rnpl/shared/buttonSideProps'

interface ServiceItemProps {
  title: types.TextValue
  description: types.TextValue
}

export interface ServicesListProps extends LayoutProps {
  title: types.TextValue
  constructionServices: types.RepeaterItems
  buttonText: types.TextValue
  buttonLink: string
  buttonStyle: 'primary' | 'secondary' | 'outline'
  buttonSize: 'small' | 'medium' | 'large'
}

export const ConstructionServiceItem: types.Brick<ServiceItemProps> = ({
  title,
  description,
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-start">
        <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 md:mt-3 bg-gray-500 rounded-full"></div>
        <div className="ml-4">
          <Text
            propName="title"
            value={title}
            renderBlock={(props) => (
              <span
                className="font-bold text-sm md:text-base"
                {...props.attributes}
              >
                {props.children}:{' '}
              </span>
            )}
          />
          <RichText
            propName="description"
            value={description}
            renderBlock={(props) => (
              <span
                className="text-gray-600 text-base md:text-lg"
                {...props.attributes}
              >
                {props.children}
              </span>
            )}
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
            ]}
          />
        </div>
      </div>
    </div>
  )
}

ConstructionServiceItem.schema = {
  name: blockNames.ConstructionServiceItem,
  label: 'Service Item',
  category: 'RNPL sections',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    title: [{ type: 'paragraph', children: [{ text: 'Contracting' }] }],
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Buyers and sellers looking to build or renovate properties can find a range of contractors and construction companies through our trusted partners.',
          },
        ],
      },
    ],
  }),
}

const ServicesList: types.Brick<ServicesListProps> = ({
  backgroundColor = bgColors.WHITE.value,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  title,
  constructionServices,
  buttonText,
  buttonLink,
  buttonStyle,
  buttonSize,
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
        className="space-y-8 flex flex-col items-center"
      >
        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <h3 className="text-xl font-semibold mb-6" {...props.attributes}>
              {props.children}
            </h3>
          )}
        />

        <div className="max-w-3xl">
          <Repeater
            propName="constructionServices"
            items={constructionServices}
          />
        </div>
        <div className="flex justify-center mt-8">
          <RNPLButton
            buttonText={buttonText}
            buttonLink={buttonLink}
            buttonStyle={buttonStyle}
            buttonSize={buttonSize}
          />
        </div>
      </Container>
    </Section>
  )
}

ServicesList.schema = {
  name: blockNames.ServicesList,
  label: 'Services List',
  tags: ['Services'],
  category: 'RNPL sections',

  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.WHITE.value,
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'Our services include:' }],
      },
    ],
    constructionServices: [
      {
        title: [{ type: 'paragraph', children: [{ text: 'Contracting' }] }],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Buyers and sellers looking to build or renovate properties can find a range of contractors and construction companies through our trusted partners.',
              },
            ],
          },
        ],
      },
      {
        title: [
          { type: 'paragraph', children: [{ text: 'Project Management' }] },
        ],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'No construction project is too small or too big for our team of experts. We help manage your construction project, oversee budgets, and communicate with contractors.',
              },
            ],
          },
        ],
      },
      {
        title: [{ type: 'paragraph', children: [{ text: 'Designing' }] }],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'We offer architectural and interior design services. We help you plan and design your properties according to your preferences and requirements, with added advice based on experience.',
              },
            ],
          },
        ],
      },
      {
        title: [
          { type: 'paragraph', children: [{ text: 'Discounted Products' }] },
        ],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Our extensive network of suppliers and manufacturers allows us to provide direct and lower prices than the market. We offer various locally procured, Canadian-made, and imported products.',
              },
            ],
          },
        ],
      },
    ],
    buttonText: [
      {
        type: 'paragraph',
        children: [{ text: 'Learn more' }],
      },
    ],
    buttonLink: '#',
    buttonStyle: 'primary',
    buttonSize: 'medium',
  }),

  repeaterItems: [
    {
      name: 'constructionServices',
      itemType: blockNames.ConstructionServiceItem,
      itemLabel: 'Construction Service',
      min: 1,
      max: 8,
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
    buttonSideProps,
  ],
}

export default ServicesList
