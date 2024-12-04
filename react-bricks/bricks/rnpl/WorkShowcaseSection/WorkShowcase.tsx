import classNames from 'classnames'
import { RichText, Repeater, types } from 'react-bricks/rsc'
import {
  LayoutProps,
  backgroundWithImageBgSideGroup,
  paddingBordersSideGroup,
} from '../../react-bricks-ui/LayoutSideProps'
import blockNames from '../../react-bricks-ui/blockNames'
import { bgColors, gradients } from '../../react-bricks-ui/colors'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { BaseColorProps } from '../LayoutSideProps'
import { WorkShowcaseItemProps } from './WorkShowcaseItem'

interface WorkShowcaseProps extends LayoutProps, BaseColorProps {
  sectionTitle: types.TextValue
  titleSize: 'small' | 'medium' | 'large'
  titleWeight: 'normal' | 'medium' | 'bold' | 'extrabold'
  titleAlignment: 'left' | 'center' | 'right'
  textGradient: keyof typeof gradients
  workItems: types.RepeaterItems<WorkShowcaseItemProps>
}

const WorkShowcase: types.Brick<WorkShowcaseProps> = ({
  backgroundColor = bgColors.WHITE.value,
  backgroundImage,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  titleSize = 'large',
  titleWeight = 'bold',
  titleAlignment = 'center',
  titleColor,
  sectionTitle,
  workItems = [],
}) => {
  const getTitleSize = () => {
    switch (titleSize) {
      case 'small':
        return 'text-3xl sm:text-4xl'
      case 'medium':
        return 'text-4xl sm:text-5xl'
      case 'large':
        return 'text-5xl sm:text-6xl'
      default:
        return 'text-4xl sm:text-5xl'
    }
  }

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
        className="space-y-10"
      >
        <div
          className={classNames(titleColor.className, `text-${titleAlignment}`)}
        >
          <RichText
            propName="sectionTitle"
            value={sectionTitle}
            renderBlock={(props) => (
              <h2
                className={classNames(
                  getTitleSize(),
                  'font-sans leading-tight mb-4',
                  `font-${titleWeight}`,
                  titleColor.className
                )}
                {...props.attributes}
              >
                {props.children}
              </h2>
            )}
            placeholder="Type a title..."
            allowedFeatures={[]}
          />
        </div>

        <div className={'p-8 md:p-0'}>
          <Carousel className="w-full">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </Section>
  )
}

WorkShowcase.schema = {
  name: blockNames.WorkShowcase,
  label: 'Work Showcase',
  category: 'showcases',
  previewImageUrl: `/bricks-preview-images/${blockNames.WorkShowcase}.png`,

  // @ts-ignore
  getDefaultProps: () => ({
    titleSize: 'large',
    titleWeight: 'bold',
    titleAlignment: 'center',
    titleColor: { color: '#1a1a1a', className: 'text-gray-900' },
    textGradient: gradients.NONE.value,
    sectionTitle: [
      {
        type: 'paragraph',
        children: [{ text: 'Check out our Work' }],
      },
    ],
    workItems: [
      {
        image: {
          src: '/text-image.png',
          placeholderSrc: '/bricks-preview-images/cards.png',
          srcSet: '',
          alt: 'Kitchen Renovation',
          seoName: 'kitchen-renovation',
        },
        title: [
          { type: 'paragraph', children: [{ text: 'Kitchen Renovation' }] },
        ],
        location: [
          { type: 'paragraph', children: [{ text: 'Oakville, Ontario' }] },
        ],
        investment: [
          { type: 'paragraph', children: [{ text: 'Investment: $25,000' }] },
        ],
        valueImpact: [
          { type: 'paragraph', children: [{ text: 'Value Impact: $40,000' }] },
        ],
        buttonText: [{ type: 'paragraph', children: [{ text: 'Learn More' }] }],
        buttonLink: '#',
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'workItems',
      itemType: blockNames.WorkShowcaseItem,
      itemLabel: 'Project',
      min: 1,
      max: 9,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Title',
      defaultOpen: true,
      props: [
        {
          name: 'titleSize',
          label: 'Title Size',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
            ],
          },
        },
        {
          name: 'titleWeight',
          label: 'Title Weight',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'normal', label: 'Normal' },
              { value: 'medium', label: 'Medium' },
              { value: 'bold', label: 'Bold' },
              { value: 'extrabold', label: 'Extra Bold' },
            ],
          },
        },
        {
          name: 'titleAlignment',
          label: 'Title Alignment',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'left', label: 'Left' },
              { value: 'center', label: 'Center' },
              { value: 'right', label: 'Right' },
            ],
          },
        },
      ],
    },
    paddingBordersSideGroup,
    backgroundWithImageBgSideGroup,
  ],
}

export default WorkShowcase
