import { Repeater, types, RichText } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import {
  bgColors,
  highlightTextColors,
} from '@/react-bricks/bricks/react-bricks-ui/colors'
import { cn } from '@/lib/utils'

interface UnorderedListItemProps {
  text: types.TextValue
}

export const UnorderedListItem: types.Brick<UnorderedListItemProps> = ({
  text,
}) => {
  return (
    <RichText
      propName="text"
      value={text}
      renderBlock={(props) => (
        <li className="mb-2 list-item" {...props.attributes}>
          {props.children}
        </li>
      )}
      placeholder="Type list item..."
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Italic,
        types.RichTextFeatures.Link,
        types.RichTextFeatures.Highlight,
      ]}
    />
  )
}

UnorderedListItem.schema = {
  name: blockNames.UnorderedListItem,
  label: 'List Item',
  category: 'blog elements',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    text: [{ type: 'paragraph', children: [{ text: 'List item' }] }],
  }),
}

interface UnorderedListProps {
  listStyle: 'disc' | 'circle' | 'square' | 'none'
  listItems: types.RepeaterItems
  fontSize: 'small' | 'medium' | 'large'
  textColor: { color: string; className: string }
  spacing: 'tight' | 'normal' | 'relaxed'
  alignment: 'left' | 'center' | 'right'
  paddingX: '0' | '2' | '4' | '8' | '12' | '16'
  paddingY: '0' | '2' | '4' | '8' | '12' | '16'
  marginBottom: '0' | '2' | '4' | '8' | '12' | '16'
}

const UnorderedList: types.Brick<UnorderedListProps> = ({
  listStyle,
  listItems,
  fontSize,
  textColor,
  spacing,
  alignment,
  paddingX,
  paddingY,
  marginBottom,
}) => {
  const getFontSize = () => {
    switch (fontSize) {
      case 'small':
        return 'text-sm'
      case 'large':
        return 'text-lg'
      default:
        return 'text-base'
    }
  }

  const getSpacing = () => {
    switch (spacing) {
      case 'tight':
        return 'space-y-1'
      case 'relaxed':
        return 'space-y-4'
      default:
        return 'space-y-2'
    }
  }

  const getListStyle = () => {
    return `list-${listStyle}`
  }

  const getAlignment = () => {
    switch (alignment) {
      case 'center':
        return 'table mx-auto'
      case 'right':
        return 'table ml-auto'
      default:
        return 'table'
    }
  }

  return (
    <div
      className={cn(
        'w-full',
        `px-${paddingX}`,
        `py-${paddingY}`,
        `mb-${marginBottom}`
      )}
    >
      <ul
        className={cn(
          getFontSize(),
          getSpacing(),
          getListStyle(),
          getAlignment(),
          textColor.className,
          'list-inside',
          alignment === 'center' && '[&>li]:text-center',
          alignment === 'right' && '[&>li]:text-right'
        )}
        style={{
          textAlign: alignment,
        }}
      >
        <Repeater propName="listItems" items={listItems} />
      </ul>
    </div>
  )
}

UnorderedList.schema = {
  name: blockNames.UnorderedList,
  label: 'Unordered List',
  category: 'blog elements',
  getDefaultProps: () => ({
    listStyle: 'disc',
    fontSize: 'medium',
    textColor: highlightTextColors.GRAY.value,
    spacing: 'normal',
    alignment: 'left',
    paddingX: '8',
    paddingY: '4',
    marginBottom: '8',
    listItems: [
      {
        text: [{ type: 'paragraph', children: [{ text: 'First item' }] }],
      },
      {
        text: [{ type: 'paragraph', children: [{ text: 'Second item' }] }],
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'listItems',
      itemType: blockNames.UnorderedListItem,
      itemLabel: 'Item',
      min: 1,
    },
  ],
  sideEditProps: [
    {
      groupName: 'List Style',
      defaultOpen: true,
      props: [
        {
          name: 'listStyle',
          label: 'List Style',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'disc', label: 'Disc' },
              { value: 'circle', label: 'Circle' },
              { value: 'square', label: 'Square' },
              { value: 'none', label: 'None' },
            ],
          },
        },
        {
          name: 'alignment',
          label: 'Alignment',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'left', label: 'Left' },
              { value: 'center', label: 'Center' },
              { value: 'right', label: 'Right' },
            ],
          },
        },
      ],
    },
    {
      groupName: 'Typography',
      props: [
        {
          name: 'fontSize',
          label: 'Font Size',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
            ],
          },
        },
        {
          name: 'textColor',
          label: 'Text Color',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              highlightTextColors.BLACK,
              highlightTextColors.WHITE,
              highlightTextColors.GRAY,
              highlightTextColors.RED,
              highlightTextColors.ORANGE,
              highlightTextColors.AMBER,
              highlightTextColors.YELLOW,
              highlightTextColors.LIME,
              highlightTextColors.GREEN,
              highlightTextColors.EMERALD,
              highlightTextColors.TEAL,
              highlightTextColors.CYAN,
              highlightTextColors.SKY,
              highlightTextColors.BLUE,
              highlightTextColors.INDIGO,
              highlightTextColors.VIOLET,
              highlightTextColors.PURPLE,
              highlightTextColors.FUCHSIA,
              highlightTextColors.PINK,
              highlightTextColors.ROSE,
            ],
          },
        },
      ],
    },
    {
      groupName: 'Spacing',
      props: [
        {
          name: 'spacing',
          label: 'Item Spacing',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'tight', label: 'Tight' },
              { value: 'normal', label: 'Normal' },
              { value: 'relaxed', label: 'Relaxed' },
            ],
          },
        },
        {
          name: 'paddingX',
          label: 'Horizontal Padding',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '0', label: 'None' },
              { value: '2', label: 'XS' },
              { value: '4', label: 'Small' },
              { value: '8', label: 'Medium' },
              { value: '12', label: 'Large' },
              { value: '16', label: 'XL' },
            ],
          },
        },
        {
          name: 'paddingY',
          label: 'Vertical Padding',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '0', label: 'None' },
              { value: '2', label: 'XS' },
              { value: '4', label: 'Small' },
              { value: '8', label: 'Medium' },
              { value: '12', label: 'Large' },
              { value: '16', label: 'XL' },
            ],
          },
        },
        {
          name: 'marginBottom',
          label: 'Bottom Margin',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '0', label: 'None' },
              { value: '2', label: 'XS' },
              { value: '4', label: 'Small' },
              { value: '8', label: 'Medium' },
              { value: '12', label: 'Large' },
              { value: '16', label: 'XL' },
            ],
          },
        },
      ],
    },
  ],
}

export default UnorderedList
