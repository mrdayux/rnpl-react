import { Image, Text, Link, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface BeforeAfterCardProps {
  beforeImage: types.IImageSource
  afterImage: types.IImageSource
  title: types.TextValue
  location: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
  buttonStyle: 'primary' | 'secondary' | 'outline'
  buttonSize: 'small' | 'medium' | 'large'
}

const BeforeAfterCard: types.Brick<BeforeAfterCardProps> = ({
  beforeImage,
  afterImage,
  title,
  location,
  buttonText,
  buttonLink,
  buttonStyle = 'primary',
  buttonSize = 'medium',
}) => {
  const getButtonClasses = () => {
    const baseClasses = 'mt-4 w-full'
    const sizeClasses = {
      small: 'px-3 py-1 text-sm',
      medium: 'px-4 py-2',
      large: 'px-6 py-3 text-lg',
    }
    const styleClasses = {
      primary: 'bg-[#E05D36] hover:bg-[#c24e2d] text-white',
      secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
      outline:
        'border-2 border-[#E05D36] text-[#E05D36] hover:bg-[#E05D36] hover:text-white',
    }

    return `${baseClasses} ${sizeClasses[buttonSize]} ${styleClasses[buttonStyle]}`
  }

  return (
    <div className="flex flex-col mb-3 bg-white rounded-lg shadow-sm">
      <div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="relative">
            <Image
              propName="beforeImage"
              source={beforeImage}
              alt="Before"
              imageClassName="w-full h-full object-cover rounded-t-md"
            />
            <div className="absolute bottom-7 left-32 bg-black/50 text-white px-3 py-1 text-sm rounded">
              Before
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="relative">
            <Image
              propName="afterImage"
              source={afterImage}
              alt="After"
              imageClassName="w-full h-full object-cover"
            />
            <div className="absolute bottom-7 left-32 bg-black/50 text-white px-4 py-1 text-sm rounded">
              After
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 text-center border-x rounded-b-lg">
        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <h3 className="text-xl font-bold mb-2" {...props.attributes}>
              {props.children}
            </h3>
          )}
        />

        <Text
          propName="location"
          value={location}
          renderBlock={(props) => (
            <p className="text-gray-600 mb-4" {...props.attributes}>
              {props.children}
            </p>
          )}
        />

        <Button
          asChild
          className={cn('rounded-full font-semibold', getButtonClasses())}
        >
          <Link href={buttonLink} className={'w-auto md:w-fit'}>
            <Text
              propName="buttonText"
              value={buttonText}
              placeholder="Button text..."
              renderBlock={(props) => <span>{props.children}</span>}
            />
          </Link>
        </Button>
      </div>
    </div>
  )
}

BeforeAfterCard.schema = {
  name: blockNames.BeforeAfterCard,
  label: 'Before/After Card',
  category: 'RNPL sections',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    beforeImage: {
      src: '/api/placeholder/400/300',
      placeholderSrc: '/api/placeholder/400/300',
      alt: 'Before renovation',
      seoName: 'before-renovation',
    },
    afterImage: {
      src: '/api/placeholder/400/300',
      placeholderSrc: '/api/placeholder/400/300',
      alt: 'After renovation',
      seoName: 'after-renovation',
    },
    title: [
      { type: 'paragraph', children: [{ text: 'Full House Renovation' }] },
    ],
    location: [{ type: 'paragraph', children: [{ text: '94 Highland Hill' }] }],
    buttonText: [
      { type: 'paragraph', children: [{ text: 'Click to see More' }] },
    ],
    buttonLink: '#',
    buttonStyle: 'primary',
    buttonSize: 'medium',
  }),

  sideEditProps: [
    {
      groupName: 'Button',
      defaultOpen: true,
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
        {
          name: 'buttonSize',
          label: 'Button Size',
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

export default BeforeAfterCard
