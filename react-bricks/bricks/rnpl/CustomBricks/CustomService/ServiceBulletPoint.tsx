import { Text, types } from 'react-bricks/rsc'
import blockNames from '../../../react-bricks-ui/blockNames'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface ServiceBulletPointProps {
  text: types.TextValue
  isLight: boolean
}

const ServiceBulletPoint: types.Brick<ServiceBulletPointProps> = ({
  text,
  isLight = true,
}) => {
  return (
    <div className="flex items-center gap-3">
      <Check
        size={20}
        className={cn(
          'flex-shrink-0',
          isLight ? 'text-[#E05D36]' : 'text-white'
        )}
      />
      <Text
        propName="text"
        value={text}
        renderBlock={(props) => (
          <p
            className={cn(
              'text-lg',
              isLight ? 'text-gray-700' : 'text-gray-200'
            )}
            {...props.attributes}
          >
            {props.children}
          </p>
        )}
      />
    </div>
  )
}

ServiceBulletPoint.schema = {
  name: blockNames.ServiceBulletPoint,
  label: 'Bullet Point',
  category: 'RNPL sections',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    text: [
      {
        type: 'paragraph',
        children: [{ text: 'Service feature or benefit' }],
      },
    ],
  }),
}

export default ServiceBulletPoint
