import { Image, Link, RichText, Text, types } from 'react-bricks/rsc'
import blockNames from '../../react-bricks-ui/blockNames'
import { Button } from '@/components/ui/button'

export interface ServiceCardProps {
  title: types.TextValue
  description: types.TextValue
  image: types.IImageSource
  buttonText: types.TextValue
  buttonLink: string
}

const ServiceCard: types.Brick<ServiceCardProps> = ({
  title,
  description,
  image,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="bg-b-gray rounded-lg shadow-sm overflow-hidden flex flex-col">
      <div className=" relative">
        <Image
          propName="image"
          source={image}
          alt="Service Image"
          imageClassName="object-cover w-full h-full"
        />
      </div>

      <div className="p-6 space-y-4  flex flex-col justify-between h-auto md:h-1/2">
        <div className={'space-y-4'}>
          <Text
            propName="title"
            value={title}
            renderBlock={(props) => (
              <h3
                className="text-2xl font-bold text-gray-900"
                {...props.attributes}
              >
                {props.children}
              </h3>
            )}
            placeholder="Type a title..."
          />

          <RichText
            propName="description"
            value={description}
            renderBlock={(props) => (
              <p className="text-gray-600 line-clamp-5" {...props.attributes}>
                {props.children}
              </p>
            )}
            placeholder="Type a description..."
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
              types.RichTextFeatures.Highlight,
            ]}
          />
        </div>

        <div>
          <Button
            asChild
            variant="default"
            className="bg-[#E05D36] hover:bg-[#c24e2d] text-white text-base font-semibold rounded-full w-fit"
          >
            <Link href={buttonLink} className={'w-fit'}>
              <Text
                propName="buttonText"
                value={buttonText}
                renderBlock={(props) => <span>{props.children}</span>}
                placeholder="Button text..."
              />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

ServiceCard.schema = {
  name: blockNames.ServiceCard,
  label: 'Service Card',
  category: 'RNPL sections',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    title: [{ type: 'paragraph', children: [{ text: 'Service Title' }] }],
    description: [
      {
        type: 'paragraph',
        children: [{ text: 'Service description goes here...' }],
      },
    ],
    image: {
      src: '/api/placeholder/400/320',
      placeholderSrc: '/api/placeholder/400/320',
      alt: 'Service Image',
    },
    buttonText: [{ type: 'paragraph', children: [{ text: 'Learn More' }] }],
    buttonLink: '#',
  }),

  sideEditProps: [
    {
      name: 'buttonLink',
      label: 'Button Link',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default ServiceCard
