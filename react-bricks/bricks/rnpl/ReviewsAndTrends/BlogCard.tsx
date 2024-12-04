import { Image, RichText, Text, Link, types } from 'react-bricks/rsc'
import blockNames from '../../react-bricks-ui/blockNames'

export interface BlogCardProps {
  image: types.IImageSource
  title: types.TextValue
  excerpt: types.TextValue
  postDate: types.TextValue
  link: string
}

const BlogCard: types.Brick<BlogCardProps> = ({
  image,
  title,
  excerpt,
  postDate,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md h-[38rem] overflow-hidden">
      <div className="aspect-[16/9] relative">
        <Image
          propName="image"
          source={image}
          alt="Blog post"
          imageClassName="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4 border">
        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <h3
              className="text-xl font-semibold text-gray-900"
              {...props.attributes}
            >
              {props.children}
            </h3>
          )}
        />
        <RichText
          propName="excerpt"
          value={excerpt}
          renderBlock={(props) => (
            <p
              className="text-gray-900 line-clamp-5 text-base"
              {...props.attributes}
            >
              {props.children}
            </p>
          )}
        />
        <div className="flex items-center justify-between text-base font-medium">
          <Link
            href={link}
            className=" text-[#E05D36] hover:text-[#c24e2d] transition-colors"
          >
            Learn More →
          </Link>
          <Text
            propName="postDate"
            value={postDate}
            renderBlock={(props) => (
              <span className="text-gray-900">{props.children}</span>
            )}
          />
        </div>
      </div>
    </div>
  )
}

BlogCard.schema = {
  name: blockNames.BlogCard,
  label: 'Blog Card',
  category: 'RNPL sections',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    image: {
      src: '/api/placeholder/800/600',
      placeholderSrc: '/api/placeholder/800/600',
      alt: 'Blog post',
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
    postDate: [{ type: 'paragraph', children: [{ text: 'March 15, 2024' }] }],
    link: '#',
  }),

  sideEditProps: [
    {
      name: 'link',
      label: 'Link URL',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default BlogCard
