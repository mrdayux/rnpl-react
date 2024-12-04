import { Text, Link, types, Image, Repeater } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'

import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import {
  LayoutProps,
  sectionDefaults,
} from '@/react-bricks/bricks/react-bricks-ui/LayoutSideProps'
import { cn } from '@/lib/utils'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface EventCardProps {
  image: types.IImageSource
  title: types.TextValue
  date: string
  time: string
  location: string
  description: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
  buttonStyle: 'primary' | 'secondary' | 'outline'
  eventType: 'webinar' | 'workshop' | 'open-house' | 'other'
  isHighlighted: boolean
}

const EventCard: types.Brick<EventCardProps> = ({
  image,
  title,
  date,
  time,
  location,
  description,
  buttonText,
  buttonLink,
  buttonStyle = 'primary',
  eventType,
  isHighlighted,
}) => {
  const getButtonClasses = () => {
    const baseClasses = 'mt-4 w-full'
    const styleClasses = {
      primary: 'bg-[#E05D36] hover:bg-[#c24e2d] text-white',
      secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
      outline:
        'border-2 border-[#E05D36] text-[#E05D36] hover:bg-[#E05D36] hover:text-white',
    }

    return `${baseClasses} ${styleClasses[buttonStyle]}`
  }

  const getEventTypeColor = () => {
    switch (eventType) {
      case 'webinar':
        return 'bg-blue-100 text-blue-800'
      case 'workshop':
        return 'bg-green-100 text-green-800'
      case 'open-house':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div
      className={cn(
        'group rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl',
        isHighlighted && 'ring-2 ring-[#E05D36] ring-offset-2'
      )}
    >
      {/* Event Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          propName="image"
          source={image}
          alt="Event"
          imageClassName="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={cn(
            'absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium',
            getEventTypeColor()
          )}
        >
          {eventType.charAt(0).toUpperCase() + eventType.slice(1)}
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              {...props.attributes}
            >
              {props.children}
            </h3>
          )}
        />

        {/* Event Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <CalendarDays className="w-5 h-5 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{location}</span>
          </div>
        </div>

        <Text
          propName="description"
          value={description}
          renderBlock={(props) => (
            <p className="text-gray-600 mb-6" {...props.attributes}>
              {props.children}
            </p>
          )}
        />

        <Button asChild className={cn('rounded-full', getButtonClasses())}>
          <Link href={buttonLink}>
            <Text
              propName="buttonText"
              value={buttonText}
              renderBlock={(props) => (
                <span className="font-semibold">{props.children}</span>
              )}
            />
          </Link>
        </Button>
      </div>
    </div>
  )
}

EventCard.schema = {
  name: blockNames.EventCard,
  label: 'Event Card',
  category: 'events',
  getDefaultProps: () => ({
    image: {
      src: '/api/placeholder/1200/800',
      placeholderSrc: '/api/placeholder/1200/800',
      alt: 'Event image',
    },
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'Free Property Investment Workshop' }],
      },
    ],
    date: '2024-12-15',
    time: '2:00 PM - 4:00 PM EST',
    location: 'Virtual Event',
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Join us for an exclusive workshop where industry experts share insights on property investment strategies and market trends.',
          },
        ],
      },
    ],
    buttonText: [
      {
        type: 'paragraph',
        children: [{ text: 'Register Now' }],
      },
    ],
    buttonLink: '#',
    buttonStyle: 'primary',
    eventType: 'workshop',
    isHighlighted: false,
  }),
  sideEditProps: [
    {
      groupName: 'Event Details',
      defaultOpen: true,
      props: [
        {
          name: 'date',
          label: 'Event Date',
          type: types.SideEditPropType.Date,
        },
        {
          name: 'time',
          label: 'Event Time',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'location',
          label: 'Location',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'eventType',
          label: 'Event Type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'webinar', label: 'Webinar' },
              { value: 'workshop', label: 'Workshop' },
              { value: 'open-house', label: 'Open House' },
              { value: 'other', label: 'Other' },
            ],
          },
        },
        {
          name: 'isHighlighted',
          label: 'Highlight Event',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
    {
      groupName: 'Button',
      props: [
        {
          name: 'buttonLink',
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
      ],
    },
  ],
}

interface EventGridProps extends LayoutProps {
  events: types.RepeaterItems
  columns: '2' | '3' | '4'
  spacing: 'small' | 'medium' | 'large'
}

const EventGrid: types.Brick<EventGridProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  events,
  columns,
  spacing,
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

  const getSpacing = () => {
    switch (spacing) {
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
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <div className={cn('grid grid-cols-1', getGridColumns(), getSpacing())}>
          <Repeater propName="events" items={events} />
        </div>
      </Container>
    </Section>
  )
}

EventGrid.schema = {
  name: blockNames.EventGrid,
  label: 'Event Grid',
  category: 'events',

  getDefaultProps: () => ({
    ...sectionDefaults,
    columns: '3',
    spacing: 'medium',
    events: [
      // Add default events here
    ],
  }),

  repeaterItems: [
    {
      name: 'events',
      itemType: blockNames.EventCard,
      itemLabel: 'Event',
      min: 1,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'columns',
          label: 'Columns',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: '2', label: 'Two' },
              { value: '3', label: 'Three' },
              { value: '4', label: 'Four' },
            ],
          },
        },
        {
          name: 'spacing',
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
        },
      ],
    },
  ],
}

export default EventGrid
export { EventCard }
