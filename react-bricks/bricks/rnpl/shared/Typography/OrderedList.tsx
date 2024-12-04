import { Repeater, types, RichText } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { highlightTextColors } from '@/react-bricks/bricks/react-bricks-ui/colors'
import { cn } from '@/lib/utils'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'

interface OrderedListItemProps {
  text: types.TextValue
}

export const OrderedListItem: types.Brick<OrderedListItemProps> = ({
  text,
}) => {
  return (
    <RichText
      propName="text"
      value={text}
      renderBlock={(props) => (
        <li className="mb-2" {...props.attributes}>
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

OrderedListItem.schema = {
  name: blockNames.OrderedListItem,
  label: 'List Item',
  category: 'blog elements',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    text: [{ type: 'paragraph', children: [{ text: 'List item' }] }],
  }),
}

interface OrderedListProps {
  listType: 'decimal' | 'roman' | 'alpha'
  listItems: types.RepeaterItems
  fontSize: 'small' | 'medium' | 'large'
  textColor: { color: string; className: string }
  spacing: 'tight' | 'normal' | 'relaxed'
  paddingX: '0' | '2' | '4' | '8' | '12' | '16'
  paddingY: '0' | '2' | '4' | '8' | '12' | '16'
  marginBottom: '0' | '2' | '4' | '8' | '12' | '16'
}

const OrderedList: types.Brick<OrderedListProps> = ({
  listType,
  listItems,
  fontSize,
  textColor,
  spacing,
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
    switch (listType) {
      case 'roman':
        return 'list-[upper-roman]'
      case 'alpha':
        return 'list-[upper-alpha]'
      default:
        return 'list-decimal'
    }
  }

  return (
    <ol
      className={cn(
        'w-full flex flex-col',
        getFontSize(),
        getSpacing(),
        getListStyle(),
        textColor.className,
        `px-${paddingX}`,
        `py-${paddingY}`,
        `mb-${marginBottom}`
      )}
    >
      <Repeater propName="listItems" items={listItems} />
    </ol>
  )
}

OrderedList.schema = {
  name: blockNames.OrderedList,
  label: 'Ordered List',
  category: 'blog elements',
  getDefaultProps: () => ({
    listType: 'decimal',
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
      itemType: blockNames.OrderedListItem,
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
          name: 'listType',
          label: 'List Type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'decimal', label: 'Numbers' },
              { value: 'roman', label: 'Roman' },
              { value: 'alpha', label: 'Alphabetical' },
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

export default OrderedList
