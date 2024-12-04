import { Repeater, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { allowedContentBlocks } from '@/react-bricks/bricks/rnpl/shared/allowedContentBlocks'

export interface ColumnProps {
  padding: 'none' | 'small' | 'medium' | 'large'
  width: string
  verticalAlign: 'top' | 'center' | 'bottom'
  content: types.RepeaterItems
}

const Column: types.Brick<ColumnProps> = ({
  padding = 'none',
  width = 'auto',
  verticalAlign = 'top',
  content,
}) => {
  const getPaddingClass = () => {
    const paddingMap: Record<typeof padding, string> = {
      none: 'p-0',
      small: 'p-2',
      medium: 'p-4',
      large: 'p-6',
    }
    return paddingMap[padding]
  }

  const getVerticalAlignClass = () => {
    const alignMap: Record<typeof verticalAlign, string> = {
      top: 'justify-start',
      center: 'justify-center',
      bottom: 'justify-end',
    }
    return alignMap[verticalAlign]
  }

  const renderEmptyState = () => (
    <div className="min-h-[100px] flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded bg-gray-50">
      <p className="text-sm text-gray-400">Click to add content</p>
    </div>
  )

  return (
    <div
      className={`flex flex-col ${getPaddingClass()} ${getVerticalAlignClass()}`}
      style={{ width }}
    >
      {!content || content.length === 0 ? (
        renderEmptyState()
      ) : (
        <Repeater
          propName="content"
          items={content}
          renderWrapper={(items) => (
            <div className="w-full flex flex-col gap-4">{items}</div>
          )}
        />
      )}
    </div>
  )
}

Column.schema = {
  name: blockNames.Column,
  label: 'Column',
  category: 'layout',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    padding: 'none',
    width: 'auto',
    verticalAlign: 'top',
    content: [],
  }),

  repeaterItems: [
    {
      name: 'content',
      itemLabel: 'Content Block',
      items: allowedContentBlocks,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'width',
          label: 'Width',
          type: types.SideEditPropType.Text,
          validate: (value) =>
            !value || /^(auto|100%|\d+px|\d+%)$/.test(value)
              ? ''
              : 'Please enter a valid width (e.g., auto, 100%, 300px)',
        },
        {
          name: 'padding',
          label: 'Padding',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'None' },
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
            ],
          },
        },
        {
          name: 'verticalAlign',
          label: 'Vertical Alignment',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'top', label: 'Top' },
              { value: 'center', label: 'Center' },
              { value: 'bottom', label: 'Bottom' },
            ],
          },
        },
      ],
    },
  ],
}

export default Column
