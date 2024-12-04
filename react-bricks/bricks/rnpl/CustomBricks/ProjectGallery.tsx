import { Image, Text, Repeater, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { highlightTextColors } from '@/react-bricks/bricks/react-bricks-ui/colors'
import {
  LayoutProps,
  sectionDefaults,
} from '@/react-bricks/bricks/react-bricks-ui/LayoutSideProps'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import { cn } from '@/lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface ProjectItemProps {
  image: types.IImageSource
  title: types.TextValue
  description: types.TextValue
}

const ProjectItem: types.Brick<ProjectItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
        <Image
          propName="image"
          source={image}
          alt="Project Image"
          imageClassName="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-black/0 p-6 translate-y-14 transition-transform duration-300 group-hover:translate-y-0">
        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <h3
              className="text-xl font-bold text-white mb-4"
              {...props.attributes}
            >
              {props.children}
            </h3>
          )}
        />
        <Text
          propName="description"
          value={description}
          renderBlock={(props) => (
            <p
              className="text-sm text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              {...props.attributes}
            >
              {props.children}
            </p>
          )}
        />
      </div>
    </div>
  )
}

ProjectItem.schema = {
  name: blockNames.ProjectItem,
  label: 'Project',
  category: 'gallery',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    image: {
      src: '/api/placeholder/800/600',
      placeholderSrc: '/api/placeholder/800/600',
      alt: 'Project image',
    },
    title: [{ type: 'paragraph', children: [{ text: 'Project Title' }] }],
    description: [
      {
        type: 'paragraph',
        children: [{ text: 'Project description goes here' }],
      },
    ],
  }),
}

// Project Gallery Component
interface ProjectGalleryProps extends LayoutProps {
  displayMode: 'grid' | 'carousel'
  columns: '2' | '3' | '4'
  gap: 'small' | 'medium' | 'large'
  title: types.TextValue
  subtitle: types.TextValue
  titleColor: { color: string; className: string }
  subtitleColor: { color: string; className: string }
  projects: types.RepeaterItems
}

const ProjectGallery: types.Brick<ProjectGalleryProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  displayMode,
  columns,
  gap,
  title,
  subtitle,
  titleColor,
  subtitleColor,
  projects,
}) => {
  const getGridColumns = () => {
    switch (columns) {
      case '2':
        return 'sm:grid-cols-2'
      case '3':
        return 'sm:grid-cols-2 lg:grid-cols-3'
      case '4':
        return 'sm:grid-cols-2 lg:grid-cols-4'
      default:
        return 'sm:grid-cols-2 lg:grid-cols-3'
    }
  }

  const getGap = () => {
    switch (gap) {
      case 'small':
        return 'gap-4'
      case 'large':
        return 'gap-8'
      default:
        return 'gap-6'
    }
  }

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="space-y-8"
      >
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Text
            propName="title"
            value={title}
            renderBlock={(props) => (
              <h2
                className={cn('text-4xl font-bold mb-4', titleColor.className)}
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
              <p
                className={cn('text-xl', subtitleColor.className)}
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
          />
        </div>

        {/* Projects Display */}
        {displayMode === 'grid' ? (
          <div className={cn('grid grid-cols-1', getGridColumns(), getGap())}>
            <Repeater propName="projects" items={projects} />
          </div>
        ) : (
          <div className="px-4 sm:px-8">
            <Carousel className="w-full">
              <CarouselContent>
                <Repeater
                  propName="projects"
                  items={projects}
                  renderWrapper={(items) => <>{items}</>}
                  renderItemWrapper={(item) => (
                    <CarouselItem className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                      {item}
                    </CarouselItem>
                  )}
                />
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious className="-left-12" />
                <CarouselNext className="-right-12" />
              </div>
            </Carousel>
          </div>
        )}
      </Container>
    </Section>
  )
}

ProjectGallery.schema = {
  name: blockNames.ProjectGallery,
  label: 'Project Gallery',
  category: 'gallery',

  getDefaultProps: () => ({
    ...sectionDefaults,
    displayMode: 'grid',
    columns: '3',
    gap: 'medium',
    titleColor: highlightTextColors.BLACK.value,
    subtitleColor: highlightTextColors.GRAY.value,
    title: [{ type: 'paragraph', children: [{ text: 'Our Projects' }] }],
    subtitle: [
      {
        type: 'paragraph',
        children: [{ text: 'Discover our latest work and achievements' }],
      },
    ],
    projects: [
      {
        image: {
          src: '/api/placeholder/800/600',
          placeholderSrc: '/api/placeholder/800/600',
          alt: 'Project 1',
        },
        title: [{ type: 'paragraph', children: [{ text: 'Project One' }] }],
        description: [
          {
            type: 'paragraph',
            children: [{ text: 'Description for project one' }],
          },
        ],
      },
      {
        image: {
          src: '/api/placeholder/800/600',
          placeholderSrc: '/api/placeholder/800/600',
          alt: 'Project 2',
        },
        title: [{ type: 'paragraph', children: [{ text: 'Project Two' }] }],
        description: [
          {
            type: 'paragraph',
            children: [{ text: 'Description for project two' }],
          },
        ],
      },
      {
        image: {
          src: '/api/placeholder/800/600',
          placeholderSrc: '/api/placeholder/800/600',
          alt: 'Project 3',
        },
        title: [{ type: 'paragraph', children: [{ text: 'Project Three' }] }],
        description: [
          {
            type: 'paragraph',
            children: [{ text: 'Description for project three' }],
          },
        ],
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'projects',
      itemType: blockNames.ProjectItem,
      itemLabel: 'Project',
      min: 1,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'displayMode',
          label: 'Display Mode',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'grid', label: 'Grid' },
              { value: 'carousel', label: 'Carousel' },
            ],
          },
        },
        {
          name: 'columns',
          label: 'Grid Columns',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: '2', label: 'Two' },
              { value: '3', label: 'Three' },
              { value: '4', label: 'Four' },
            ],
          },
          show: ({ displayMode }) => displayMode === 'grid',
        },
        {
          name: 'gap',
          label: 'Spacing',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
            ],
          },
          show: ({ displayMode }) => displayMode === 'grid',
        },
      ],
    },
    {
      groupName: 'Typography',
      props: [
        {
          name: 'titleColor',
          label: 'Title Color',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: Object.values(highlightTextColors),
          },
        },
        {
          name: 'subtitleColor',
          label: 'Subtitle Color',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: Object.values(highlightTextColors),
          },
        },
      ],
    },
  ],
}

export default ProjectGallery
export { ProjectItem }
