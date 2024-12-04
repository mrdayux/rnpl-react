import { RichText, Text, Repeater, types } from 'react-bricks/rsc'
import {
  backgroundWithImageBgSideGroup,
  LayoutProps,
  sectionDefaults,
} from '../../react-bricks-ui/LayoutSideProps'
import blockNames from '../../react-bricks-ui/blockNames'
import { bgColors } from '../../react-bricks-ui/colors'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { buttonSideProps } from '@/react-bricks/bricks/rnpl/shared/buttonSideProps'
import RNPLButton from '@/react-bricks/bricks/rnpl/shared/Button'

interface ServiceItemProps {
  title: types.TextValue
  description: types.TextValue
}

interface ServicesWithCarouselProps extends LayoutProps {
  title: types.TextValue
  subtitle: types.TextValue
  description: types.TextValue
  insuranceItems: types.RepeaterItems
  legalItems: types.RepeaterItems
  buttonText: types.TextValue
  buttonLink: string
  logos: types.RepeaterItems
  buttonStyle: 'primary' | 'secondary' | 'outline'
  buttonSize: 'small' | 'medium' | 'large'
}

export const ServiceItem: types.Brick<ServiceItemProps> = ({
  title,
  description,
}) => {
  return (
    <div className="mb-6">
      <Text
        propName="title"
        value={title}
        renderBlock={(props) => (
          <h4 className="text-lg font-semibold mb-2" {...props.attributes}>
            {props.children}
          </h4>
        )}
      />
      <RichText
        propName="description"
        value={description}
        renderBlock={(props) => (
          <p className="text-gray-600" {...props.attributes}>
            {props.children}
          </p>
        )}
      />
    </div>
  )
}

ServiceItem.schema = {
  name: blockNames.ServiceItem,
  label: 'Service Item',
  category: 'RNPL sections',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'Service Title' }],
      },
    ],
    description: [
      {
        type: 'paragraph',
        children: [{ text: 'Service description goes here.' }],
      },
    ],
  }),
}

const ServicesWithCarousel: types.Brick<ServicesWithCarouselProps> = ({
  backgroundColor = bgColors.WHITE.value,
  backgroundImage,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  title,
  subtitle,
  description,
  insuranceItems,
  legalItems,
  buttonText,
  buttonLink,
  logos,
  buttonStyle,
  buttonSize,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="relative space-y-10"
      >
        <div className="text-center space-y-4">
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
              <p
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
          />
        </div>

        <div className="rounded-lg p-8">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <Repeater
                propName="logos"
                items={logos}
                renderWrapper={(items) => <>{items}</>}
                renderItemWrapper={(item) => (
                  <CarouselItem className="basis-1/2 md:basis-1/4 px-4">
                    {item}
                  </CarouselItem>
                )}
              />
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Insurance Services
            </h3>
            <Repeater propName="insuranceItems" items={insuranceItems} />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Legal Services
            </h3>
            <Repeater propName="legalItems" items={legalItems} />
          </div>
        </div>

        <RNPLButton
          buttonText={buttonText}
          buttonLink={buttonLink}
          buttonStyle={buttonStyle}
          buttonSize={buttonSize}
        />
      </Container>
    </Section>
  )
}

ServicesWithCarousel.schema = {
  name: blockNames.ServicesWithCarousel,
  label: 'Services with Carousel',
  category: 'RNPL sections',

  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.WHITE.value,
    backgroundImage: {
      src: '/api/placeholder/1200/800',
      placeholderSrc: '/api/placeholder/1200/800',
      alt: 'Background',
    },
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'It Takes a Team to Move a Deal' }],
      },
    ],
    subtitle: [
      {
        type: 'paragraph',
        children: [{ text: "We're Here for You" }],
      },
    ],
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'We have the best Rolodex in the industry to help you build the right team to get any deal done. Our network of legal and insurance professionals has personally been vetted to ensure you get the best service possible.',
          },
        ],
      },
    ],
    insuranceItems: [
      {
        title: [
          {
            type: 'paragraph',
            children: [{ text: 'Comprehensive Coverage' }],
          },
        ],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Our reputable and licensed insurance agents guide you through auto, home, life, and critical health insurance options, ensuring you have the protection you need.',
              },
            ],
          },
        ],
      },
      {
        title: [
          {
            type: 'paragraph',
            children: [{ text: 'Tough Conversations' }],
          },
        ],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: "We address the problematic discussions you've been avoiding, providing peace of mind by ensuring you and your loved ones are well-protected and your affairs are in order.",
              },
            ],
          },
        ],
      },
      {
        title: [
          {
            type: 'paragraph',
            children: [{ text: 'Tailored Plans' }],
          },
        ],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'We offer a range of insurance plans, including homeowner policies, tenant insurance, content insurance, and commercial policies, to suit your unique needs.',
              },
            ],
          },
        ],
      },
    ],
    legalItems: [
      {
        title: [
          {
            type: 'paragraph',
            children: [{ text: 'Expert Legal Support' }],
          },
        ],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: "Our experienced lawyers are dedicated to protecting your best interests. Whether buying, selling, investing, or planning for the future, we ensure you're covered every step.",
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
    logos: [
      {
        image: {
          src: '/api/placeholder/200/100',
          placeholderSrc: '/api/placeholder/200/100',
          alt: 'MetLife',
          seoName: 'metlife',
        },
      },
      {
        image: {
          src: '/api/placeholder/200/100',
          placeholderSrc: '/api/placeholder/200/100',
          alt: 'The Hartford',
          seoName: 'hartford',
        },
      },
      {
        image: {
          src: '/api/placeholder/200/100',
          placeholderSrc: '/api/placeholder/200/100',
          alt: "Fireman's Fund",
          seoName: 'firemans-fund',
        },
      },
      {
        image: {
          src: '/api/placeholder/200/100',
          placeholderSrc: '/api/placeholder/200/100',
          alt: 'AIG',
          seoName: 'aig',
        },
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'insuranceItems',
      itemType: blockNames.ServiceItem,
      itemLabel: 'Insurance Service',
      min: 1,
      max: 6,
    },
    {
      name: 'legalItems',
      itemType: blockNames.ServiceItem,
      itemLabel: 'Legal Service',
      min: 1,
      max: 6,
    },
    {
      name: 'logos',
      itemType: blockNames.LogoItem,
      itemLabel: 'Logo',
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
    backgroundWithImageBgSideGroup,
  ],
}

export default ServicesWithCarousel
