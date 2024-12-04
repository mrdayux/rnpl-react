import { Image, RichText, Text, types } from 'react-bricks/rsc'
import blockNames from '../../react-bricks-ui/blockNames'
import { Star } from 'lucide-react'

export interface ReviewCardProps {
  avatarImage: types.IImageSource
  name: types.TextValue
  reviewCount: types.TextValue
  reviewTime: types.TextValue
  reviewText: types.TextValue
}

const ReviewCard: types.Brick<ReviewCardProps> = ({
  avatarImage,
  name,
  reviewCount,
  reviewTime,
  reviewText,
}) => {
  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm space-y-4 h-[37rem]">
      <div className="flex items-center gap-4">
        <Image
          propName="avatarImage"
          source={avatarImage}
          alt="Reviewer Avatar"
          imageClassName="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <Text
            propName="name"
            value={name}
            renderBlock={(props) => (
              <h3 className="font-semibold text-gray-900" {...props.attributes}>
                {props.children}
              </h3>
            )}
          />
          <div className="flex items-center gap-2 text-sm md:text-base  text-gray-900">
            <Text
              propName="reviewCount"
              value={reviewCount}
              renderBlock={(props) => <span>{props.children} reviews</span>}
            />
            <span>•</span>
            <Text
              propName="reviewTime"
              value={reviewTime}
              renderBlock={(props) => <span>{props.children}</span>}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>

      <RichText
        propName="reviewText"
        value={reviewText}
        renderBlock={(props) => (
          <p
            className="text-gray-900 text-sm md:text-base  leading-relaxed line-clamp-[10]"
            {...props.attributes}
          >
            {props.children}
          </p>
        )}
        placeholder="Write review content..."
      />
    </div>
  )
}

ReviewCard.schema = {
  name: blockNames.ReviewCard,
  label: 'Review Card',
  category: 'RNPL sections',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    avatarImage: {
      src: '/api/placeholder/100/100',
      placeholderSrc: '/api/placeholder/100/100',
      alt: 'Reviewer',
    },
    name: [{ type: 'paragraph', children: [{ text: 'John Doe' }] }],
    reviewCount: [{ type: 'paragraph', children: [{ text: '5' }] }],
    reviewTime: [{ type: 'paragraph', children: [{ text: '2 months ago' }] }],
    reviewText: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Write your review here...',
          },
        ],
      },
    ],
  }),
}

export default ReviewCard
