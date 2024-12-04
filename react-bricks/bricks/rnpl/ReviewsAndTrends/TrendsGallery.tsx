import { Repeater, types } from 'react-bricks/rsc'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Section from '../../react-bricks-ui/shared/components/Section'
import Container from '../../react-bricks-ui/shared/components/Container'
import blockNames from '../../react-bricks-ui/blockNames'
import { bgColors } from '../../react-bricks-ui/colors'
import {
  LayoutProps,
  sectionDefaults,
} from '../../react-bricks-ui/LayoutSideProps'
import CarouselWrapper from '@/components/CarouselWrapper'

export interface TrendsGalleryProps extends LayoutProps {
  reviews: types.RepeaterItems
  blogPosts: types.RepeaterItems
}

const TrendsGallery: types.Brick<TrendsGalleryProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  reviews,
  blogPosts,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trends & Gallery
          </h1>
        </div>

        <div className="grid md:grid-cols-2">
          {/* Reviews Section */}
          <div className={'px-10 md:px-5 mb-10 md:mb-0'}>
            <h2 className="text-2xl font-bold mb-6">Our Work</h2>
            <CarouselWrapper duration={5000}>
              <Repeater
                propName="reviews"
                items={reviews}
                renderWrapper={(items) => <>{items}</>}
                renderItemWrapper={(item) => (
                  <CarouselItem className="basis-full">{item}</CarouselItem>
                )}
              />
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className={'hidden'} />
                <CarouselNext className={'hidden'} />
              </div>
            </CarouselWrapper>
          </div>

          {/* Blog Posts Section */}
          <div className={'px-10 md:px-5'}>
            <h2 className="text-2xl font-bold mb-6">Design Trends</h2>
            <CarouselWrapper duration={5000}>
              <Repeater
                propName="blogPosts"
                items={blogPosts}
                renderWrapper={(items) => <>{items}</>}
                renderItemWrapper={(item) => (
                  <CarouselItem className="basis-full">{item}</CarouselItem>
                )}
              />
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className={'hidden'} />
                <CarouselNext className={'hidden'} />
              </div>
            </CarouselWrapper>
          </div>
        </div>
      </Container>
    </Section>
  )
}

TrendsGallery.schema = {
  name: blockNames.TrendsGallery,
  label: 'Trends & Gallery',
  category: 'RNPL sections',
  previewImageUrl: `/bricks-preview-images/${blockNames.TrendsGallery}.png`,

  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.WHITE.value,
    reviews: [
      {
        avatarImage: {
          src: '/api/placeholder/100/100',
          placeholderSrc: '/api/placeholder/100/100',
          alt: 'Sonia Singh',
        },
        name: [{ type: 'paragraph', children: [{ text: 'Sonia Singh' }] }],
        reviewCount: [{ type: 'paragraph', children: [{ text: '6' }] }],
        reviewTime: [
          { type: 'paragraph', children: [{ text: '3 months ago' }] },
        ],
        reviewText: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Zumin Real Estate impressed me with their professionalism and efficiency throughout the home-buying process. Their agents were knowledgeable, responsive, and guided me seamlessly from property search to closing.',
              },
            ],
          },
        ],
      },
    ],
    blogPosts: [
      {
        image: {
          src: '/api/placeholder/800/600',
          placeholderSrc: '/api/placeholder/800/600',
          alt: 'Modern home design',
        },
        title: [
          {
            type: 'paragraph',
            children: [{ text: '2024 Home Design Trends' }],
          },
        ],
        excerpt: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Discover the latest trends in home design and renovation that are shaping the real estate market this year.',
              },
            ],
          },
        ],
        author: [{ type: 'paragraph', children: [{ text: 'Design Team' }] }],
        postDate: [
          { type: 'paragraph', children: [{ text: 'March 15, 2024' }] },
        ],
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'reviews',
      itemType: blockNames.ReviewCard,
      itemLabel: 'Review',
      min: 1,
      max: 10,
    },
    {
      name: 'blogPosts',
      itemType: blockNames.BlogCard,
      itemLabel: 'Blog Post',
      min: 1,
      max: 10,
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

export default TrendsGallery
