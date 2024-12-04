import { RichText, Text, Repeater, types } from 'react-bricks/rsc'
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

export interface ConstructionHelpProps extends LayoutProps {
  title: types.TextValue
  subtitle: types.TextValue
  description: types.TextValue
  showcaseTitle: types.TextValue
  workItems: types.RepeaterItems
}

const ConstructionHelp: types.Brick<ConstructionHelpProps> = ({
  backgroundColor = bgColors.WHITE.value,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  title,
  subtitle,
  description,
  showcaseTitle,
  workItems,
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
        <div className="text-center space-y-4">
          <Text
            propName="title"
            value={title}
            renderBlock={(props) => (
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
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
              <p
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
          />
        </div>

        <div className="text-center">
          <Text
            propName="showcaseTitle"
            value={showcaseTitle}
            renderBlock={(props) => (
              <h3 className="text-2xl font-bold mb-8" {...props.attributes}>
                {props.children}
              </h3>
            )}
          />
        </div>

        <div className="px-8">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-4">
              <Repeater
                propName="workItems"
                items={workItems}
                renderWrapper={(items) => <>{items}</>}
                renderItemWrapper={(item) => (
                  <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    {item}
                  </CarouselItem>
                )}
              />
            </CarouselContent>
            <CarouselPrevious className="" />
            <CarouselNext className="" />
          </Carousel>
        </div>
      </Container>
    </Section>
  )
}

ConstructionHelp.schema = {
  name: blockNames.ConstructionHelp,
  label: 'Construction Help',
  category: 'RNPL sections',

  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.WHITE.value,
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'Need Help with Construction?' }],
      },
    ],
    subtitle: [
      {
        type: 'paragraph',
        children: [{ text: 'We Got You Covered' }],
      },
    ],
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'We know how to maximize the value of your real estate transaction, and a big part of that is leveraging solutions such as renovations and remodelling. Our team of experts can guide you from start to finish.',
          },
        ],
      },
    ],
    showcaseTitle: [
      {
        type: 'paragraph',
        children: [{ text: 'See our work' }],
      },
    ],
    workItems: [
      {
        beforeImage: {
          src: '/api/placeholder/400/300',
          placeholderSrc: '/api/placeholder/400/300',
          alt: 'Before full house renovation',
        },
        afterImage: {
          src: '/api/placeholder/400/300',
          placeholderSrc: '/api/placeholder/400/300',
          alt: 'After full house renovation',
        },
        title: [
          { type: 'paragraph', children: [{ text: 'Full House Renovation' }] },
        ],
        location: [
          { type: 'paragraph', children: [{ text: '94 Highland Hill' }] },
        ],
        buttonText: [
          { type: 'paragraph', children: [{ text: 'Click to see More' }] },
        ],
        buttonLink: '#',
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'workItems',
      itemType: blockNames.BeforeAfterCard,
      itemLabel: 'Work Item',
      min: 1,
      max: 9,
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

export default ConstructionHelp
