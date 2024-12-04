import { RichText, Text, Repeater, types, Image } from 'react-bricks/rsc'
import {
  LayoutProps,
  sectionDefaults,
} from '../../react-bricks-ui/LayoutSideProps'
import blockNames from '../../react-bricks-ui/blockNames'
import { bgColors } from '../../react-bricks-ui/colors'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import RNPLButton from '@/react-bricks/bricks/rnpl/shared/Button'
import { buttonSideProps } from '@/react-bricks/bricks/rnpl/shared/buttonSideProps'

interface AgentCardProps {
  image: types.IImageSource
  name: types.TextValue
  title: types.TextValue
  subtitle: types.TextValue
}

export interface AgentShowcaseProps extends LayoutProps {
  title: types.TextValue
  subtitle: types.TextValue
  description: types.TextValue
  agents: types.RepeaterItems
  buttonText: types.TextValue
  buttonLink: string
  buttonStyle: 'primary' | 'secondary' | 'outline'
  buttonSize: 'small' | 'medium' | 'large'
}

export const AgentCard: types.Brick<AgentCardProps> = ({
  image,
  name,
  title,
  subtitle,
}) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-4 flex justify-center">
        <div className="w-24 h-24 overflow-hidden rounded-full">
          <Image
            propName="image"
            source={image}
            alt="Agent"
            imageClassName="w-full h-full object-cover"
          />
        </div>
      </div>
      <Text
        propName="name"
        value={name}
        renderBlock={(props) => (
          <h3 className="text-xl font-bold mb-1" {...props.attributes}>
            {props.children}
          </h3>
        )}
      />
      <RichText
        propName="title"
        value={title}
        renderBlock={(props) => (
          <p className="text-gray-600 mb-1" {...props.attributes}>
            {props.children}
          </p>
        )}
      />
      <RichText
        propName="subtitle"
        value={subtitle}
        renderBlock={(props) => (
          <p className="text-gray-500 text-sm" {...props.attributes}>
            {props.children}
          </p>
        )}
      />
    </div>
  )
}

AgentCard.schema = {
  name: blockNames.AgentCard,
  label: 'Agent Card',
  category: 'RNPL sections',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    image: {
      src: '/api/placeholder/150',
      placeholderSrc: '/api/placeholder/150',
      alt: 'Agent photo',
    },
    name: [{ type: 'paragraph', children: [{ text: 'First Last' }] }],
    title: [{ type: 'paragraph', children: [{ text: 'Job Title' }] }],
    subtitle: [{ type: 'paragraph', children: [{ text: 'Additional Info' }] }],
  }),
}

const AgentShowcase: types.Brick<AgentShowcaseProps> = ({
  backgroundColor = bgColors.WHITE.value,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  title,
  subtitle,
  description,
  agents,
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
        className="space-y-10"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Text
            propName="title"
            value={title}
            renderBlock={(props) => (
              <h2
                className="text-4xl md:text-5xl font-bold"
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
              <h3 className="text-2xl" {...props.attributes}>
                {props.children}
              </h3>
            )}
          />

          <RichText
            propName="description"
            value={description}
            renderBlock={(props) => (
              <p className="text-lg text-gray-600" {...props.attributes}>
                {props.children}
              </p>
            )}
          />
        </div>

        <div className="p-8 md:p-0">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              <Repeater
                propName="agents"
                items={agents}
                renderWrapper={(items) => <>{items}</>}
                renderItemWrapper={(item) => (
                  <CarouselItem className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                    {item}
                  </CarouselItem>
                )}
              />
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center">
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

AgentShowcase.schema = {
  name: blockNames.AgentShowcase,
  label: 'Agent Showcase',
  category: 'RNPL sections',

  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.WHITE.value,
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'Every Journey Needs a Guide.' }],
      },
    ],
    subtitle: [
      {
        type: 'paragraph',
        children: [{ text: 'Meet our Agents' }],
      },
    ],
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Our team of Zumin Agents believe in one guiding principle: to be of service. Our hand-selected team knows real estate from buying, selling, and leasing to commercial. We cover the entire spectrum so your needs can be met. Most importantly, we are here to guide you so you can optimize every transaction.',
          },
        ],
      },
    ],
    agents: [
      {
        image: {
          src: '/api/placeholder/150',
          placeholderSrc: '/api/placeholder/150',
          alt: 'Jora Sahota',
        },
        name: [{ type: 'paragraph', children: [{ text: 'Jora Sahota' }] }],
        title: [
          {
            type: 'paragraph',
            children: [{ text: 'Real Estate Professional' }],
          },
        ],
        subtitle: [
          {
            type: 'paragraph',
            children: [{ text: 'Official VIP Sales Rep.\nMedia Personality.' }],
          },
        ],
      },
      {
        image: {
          src: '/api/placeholder/150',
          placeholderSrc: '/api/placeholder/150',
          alt: 'Alex Mehrdad Mahallati',
        },
        name: [
          {
            type: 'paragraph',
            children: [{ text: 'Alex Mehrdad Mahallati' }],
          },
        ],
        title: [
          {
            type: 'paragraph',
            children: [{ text: 'Your all around expert' }],
          },
        ],
        subtitle: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Construction engineer/builder',
              },
            ],
          },
        ],
      },
    ],
    buttonText: [
      {
        type: 'paragraph',
        children: [{ text: 'Get Started' }],
      },
    ],
    buttonLink: '#',
    buttonStyle: 'primary',
    buttonSize: 'medium',
  }),

  repeaterItems: [
    {
      name: 'agents',
      itemType: blockNames.AgentCard,
      itemLabel: 'Agent',
      min: 1,
      max: 12,
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

export default AgentShowcase
