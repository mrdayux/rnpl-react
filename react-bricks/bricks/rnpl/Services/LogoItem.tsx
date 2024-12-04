import { Image, types } from 'react-bricks/rsc'
import blockNames from '../../react-bricks-ui/blockNames'

interface LogoItemProps {
  image: types.IImageSource
}

const LogoItem: types.Brick<LogoItemProps> = ({ image }) => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="content-none relative h-16">
        <Image
          propName="image"
          source={image}
          alt="Partner Logo"
          imageClassName="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

LogoItem.schema = {
  name: blockNames.LogoItem,
  label: 'Logo',
  category: 'RNPL sections',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    image: {
      src: 'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'Logo',
      seoName: 'logo',
    },
  }),
}

export default LogoItem
