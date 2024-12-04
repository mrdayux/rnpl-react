import { Text, Image, types } from 'react-bricks/rsc'
import { cn } from '@/lib/utils'
import { FEATURE_ICONS, ICON_OPTIONS } from './FeatureIcons'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'

export interface FeatureCardItemProps {
  iconKey: string
  title: types.TextValue
  description: types.TextValue
  useCustomIcon: boolean
  customIcon: types.IImageSource
  alignment: 'left' | 'center' | 'right'
  hoverEffect: boolean
}

const FeatureCardItem: types.Brick<FeatureCardItemProps> = ({
  iconKey = 'home',
  title,
  description,
  useCustomIcon,
  customIcon,
  alignment = 'center',
  hoverEffect = true,
}) => {
  const Icon = FEATURE_ICONS[iconKey]

  return (
    <div
      className={cn(
        'p-6 rounded-xl bg-white border border-gray-100 h-full',
        hoverEffect &&
          'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        alignment === 'center' && 'text-center',
        alignment === 'right' && 'text-right'
      )}
    >
      <div
        className={cn(
          'mb-4',
          alignment === 'center' && 'flex justify-center',
          alignment === 'right' && 'flex justify-end'
        )}
      >
        {useCustomIcon ? (
          <Image
            propName="customIcon"
            source={customIcon}
            alt="Feature icon"
            imageClassName="w-12 h-12 object-contain"
          />
        ) : (
          <Icon size={48} className="text-[#E05D36]" />
        )}
      </div>

      <Text
        propName="title"
        value={title}
        renderBlock={(props) => (
          <h3
            className="text-xl font-bold text-gray-900 mb-2"
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
          <p className="text-gray-600" {...props.attributes}>
            {props.children}
          </p>
        )}
      />
    </div>
  )
}

FeatureCardItem.schema = {
  name: blockNames.FeatureCardItem,
  label: 'Feature Card',
  category: 'RNPL sections',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    iconKey: 'home',
    useCustomIcon: false,
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'Feature Title' }],
      },
    ],
    description: [
      {
        type: 'paragraph',
        children: [
          { text: 'Brief description of the feature or service offered.' },
        ],
      },
    ],
  }),

  sideEditProps: [
    {
      name: 'useCustomIcon',
      label: 'Use Custom Icon',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'iconKey',
      label: 'Icon',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: ICON_OPTIONS.map(({ value, label }) => ({
          value,
          label,
        })),
      },
      show: ({ useCustomIcon }) => !useCustomIcon,
    },
  ],
}

export default FeatureCardItem
