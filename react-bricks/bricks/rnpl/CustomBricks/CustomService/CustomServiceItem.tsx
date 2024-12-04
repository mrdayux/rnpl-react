import { Text, RichText, Image, Repeater, types } from 'react-bricks/rsc'
import blockNames from '../../../react-bricks-ui/blockNames'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export interface ServiceItemProps {
  title: types.TextValue
  description: types.TextValue
  image: types.IImageSource
  ctaText: types.TextValue
  ctaLink: string
  imagePosition: 'left' | 'right'
  backgroundStyle: 'light' | 'dark'
  bulletPoints: types.RepeaterItems
  reverseOrder: boolean
}

const ServiceItem: types.Brick<ServiceItemProps> = ({
  title,
  description,
  image,
  ctaText,
  ctaLink,
  imagePosition = 'left',
  backgroundStyle = 'light',
  bulletPoints,
  reverseOrder = false,
}) => {
  const isLightBg = backgroundStyle === 'light'

  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden',
        isLightBg ? 'bg-gray-50' : 'bg-gray-900'
      )}
    >
      <div
        className={cn(
          'flex flex-col md:flex-row',
          reverseOrder && ' md:flex-row-reverse'
        )}
      >
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/3]">
            <Image
              propName="image"
              source={image}
              alt="Service"
              imageClassName="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <Text
            propName="title"
            value={title}
            renderBlock={(props) => (
              <h3
                className={cn(
                  'text-3xl font-bold mb-4',
                  isLightBg ? 'text-gray-900' : 'text-white'
                )}
                {...props.attributes}
              >
                {props.children}
              </h3>
            )}
          />

          <RichText
            propName="description"
            value={description}
            renderBlock={(props) => (
              <p
                className={cn(
                  'text-lg mb-6',
                  isLightBg ? 'text-gray-600' : 'text-gray-300'
                )}
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
            allowedFeatures={[types.RichTextFeatures.Bold]}
          />

          <Repeater
            propName="bulletPoints"
            items={bulletPoints}
            itemProps={{
              isLight: isLightBg,
            }}
            renderWrapper={(items) => (
              <div className="space-y-3 mb-8">{items}</div>
            )}
          />

          <Button
            asChild
            className={cn(
              'rounded-full px-8 py-3 font-semibold w-fit',
              isLightBg
                ? 'bg-[#E05D36] hover:bg-[#c24e2d] text-white'
                : 'bg-white hover:bg-gray-100 text-gray-900'
            )}
          >
            <a href={ctaLink}>
              <Text
                propName="ctaText"
                value={ctaText}
                renderBlock={(props) => <span>{props.children}</span>}
              />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

ServiceItem.schema = {
  name: blockNames.CustomServiceItem,
  label: 'Service',
  category: 'RNPL sections',

  getDefaultProps: () => ({
    imagePosition: 'left',
    backgroundStyle: 'light',
    reverseOrder: false,
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'Service Title' }],
      },
    ],
    description: [
      {
        type: 'paragraph',
        children: [
          { text: 'Detailed description of the service and its benefits.' },
        ],
      },
    ],
    image: {
      src: '/api/placeholder/800/600',
      placeholderSrc: '/api/placeholder/800/600',
      alt: 'Service Image',
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
            children: [{ text: 'Key benefit or feature' }],
          },
        ],
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'bulletPoints',
      itemType: blockNames.ServiceBulletPoint,
      itemLabel: 'Bullet Point',
      min: 0,
      max: 4,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'reverseOrder',
          label: 'Reverse Content Order',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'backgroundStyle',
          label: 'Background Style',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
            ],
          },
        },
      ],
    },
    {
      groupName: 'Button',
      defaultOpen: false,
      props: [
        {
          name: 'ctaLink',
          label: 'Button Link',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default ServiceItem
