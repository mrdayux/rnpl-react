import { Image, Link, RichText, types } from 'react-bricks/rsc'
import { Button } from '@/components/ui/button'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { cn } from '@/lib/utils'

export interface WorkShowcaseItemProps {
  image: types.IImageSource
  title: types.TextValue
  location: types.TextValue
  investment: types.TextValue
  valueImpact: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
  buttonStyle: 'primary' | 'secondary' | 'outline'
  buttonSize: 'small' | 'medium' | 'large'
}

const WorkShowcaseItem: types.Brick<WorkShowcaseItemProps> = ({
  image,
  title,
  location,
  investment,
  valueImpact,
  buttonText,
  buttonLink,
  buttonStyle = 'primary',
  buttonSize = 'medium',
}) => {
  const getButtonClasses = () => {
    const baseClasses = 'mt-auto w-full'
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
    <div className="flex flex-col space-y-4 bg-white rounded-lg shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg border-b">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50">
          <Image
            propName="image"
            source={image}
            alt="Project Image"
            imageClassName="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="space-y-2 flex flex-col items-center pb-6">
        <RichText
          propName="title"
          value={title}
          renderBlock={(props) => (
            <h3 className="text-xl font-bold" {...props.attributes}>
              {props.children}
            </h3>
          )}
          placeholder="Project title..."
          allowedFeatures={[]}
        />

        <RichText
          propName="location"
          value={location}
          renderBlock={(props) => (
            <p className="text-gray-600 font-medium" {...props.attributes}>
              {props.children}
            </p>
          )}
          placeholder="Location..."
          allowedFeatures={[]}
        />

        <div className="space-y-1">
          <RichText
            propName="investment"
            value={investment}
            renderBlock={(props) => (
              <p className="font-semibold" {...props.attributes}>
                {props.children}
              </p>
            )}
            placeholder="Investment amount..."
            allowedFeatures={[]}
          />

          <RichText
            propName="valueImpact"
            value={valueImpact}
            renderBlock={(props) => (
              <p className="font-semibold" {...props.attributes}>
                {props.children}
              </p>
            )}
            placeholder="Value impact..."
            allowedFeatures={[]}
          />
        </div>

        <div className={'pt-4'}>
          <Button asChild className={cn('rounded-full', getButtonClasses())}>
            <Link href={buttonLink} className={'w-fit'}>
              <RichText
                propName="buttonText"
                value={buttonText}
                placeholder="Button text..."
                allowedFeatures={[]}
              />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

WorkShowcaseItem.schema = {
  name: blockNames.WorkShowcaseItem,
  label: 'Work Item',

  getDefaultProps: () => ({
    image: {
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858',
      placeholderSrc:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=100',

      alt: 'Modern Kitchen Renovation',
      seoName: 'kitchen-renovation',
    },
    title: [
      { type: 'paragraph', children: [{ text: 'Modern Kitchen Renovation' }] },
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
    buttonText: [
      { type: 'paragraph', children: [{ text: 'View Project Details' }] },
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

export default WorkShowcaseItem
