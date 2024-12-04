import { Repeater, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'

export interface GridItemProps {
  columnSpan: '1' | '2' | '3' | '4' | '5' | '6' | 'full'
  rowSpan: '1' | '2' | '3' | '4'
  padding: 'none' | 'small' | 'medium' | 'large'
  alignSelf: 'auto' | 'start' | 'center' | 'end' | 'stretch'
  justifySelf: 'auto' | 'start' | 'center' | 'end' | 'stretch'
  content: types.RepeaterItems
}

const GridItem: types.Brick<GridItemProps> = ({
  columnSpan = '1',
  rowSpan = '1',
  padding = 'none',
  alignSelf = 'auto',
  justifySelf = 'auto',
  content,
}) => {
  const getSpanClass = () =>
    ({
      '1': 'col-span-1',
      '2': 'col-span-2',
      '3': 'col-span-3',
      '4': 'col-span-4',
      '5': 'col-span-5',
      '6': 'col-span-6',
      full: 'col-span-full',
    })[columnSpan]

  const getRowSpanClass = () =>
    ({
      '1': 'row-span-1',
      '2': 'row-span-2',
      '3': 'row-span-3',
      '4': 'row-span-4',
    })[rowSpan]

  const getPaddingClass = () =>
    ({
      none: 'p-0',
      small: 'p-2',
      medium: 'p-4',
      large: 'p-6',
    })[padding]

  const renderEmptyState = () => (
    <div className="min-h-[100px] flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded bg-gray-50">
      <p className="text-sm text-gray-400">Click to add content</p>
    </div>
  )

  return (
    <div
      className={`
        ${getSpanClass()}
        ${getRowSpanClass()}
        ${getPaddingClass()}
      `}
      style={{
        alignSelf,
        justifySelf,
      }}
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

GridItem.schema = {
  name: blockNames.GridItem,
  label: 'Grid Item',
  category: 'layout',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    columnSpan: '1',
    rowSpan: '1',
    padding: 'none',
    alignSelf: 'auto',
    justifySelf: 'auto',
    content: [],
  }),

  repeaterItems: [
    {
      name: 'content',
      itemLabel: 'Content Block',
      items: [
        {
          type: blockNames.RNPLHero,
          label: 'RNPL Hero',
        },
        {
          type: blockNames.WorkShowcase,
          label: 'Work Showcase',
        },
        {
          type: blockNames.ServicesShowcase,
          label: 'Services Showcase',
        },
        {
          type: blockNames.ProfessionalsCTA,
          label: 'Professionals CTA',
        },
        {
          type: blockNames.ServicesWithCarousel,
          label: 'Services Carousel',
        },
        {
          type: blockNames.AgentShowcase,
          label: 'Agent Showcase',
        },
        {
          type: blockNames.ConstructionHelp,
          label: 'Construction Help',
        },
        {
          type: blockNames.ServicesList,
          label: 'Services List',
        },
        {
          type: blockNames.Badge,
          label: 'Badge',
        },
        {
          type: blockNames.Button,
          label: 'Button',
        },
        {
          type: blockNames.Card,
          label: 'Card',
        },
        {
          type: blockNames.TextMedia,
          label: 'Text Media',
        },
        {
          type: blockNames.BigImage,
          label: 'Image',
        },
        {
          type: blockNames.BlogRichText,
          label: 'Rich Text',
        },
      ],
    },
  ],

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'columnSpan',
          label: 'Column Span',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '1', label: '1 Column' },
              { value: '2', label: '2 Columns' },
              { value: '3', label: '3 Columns' },
              { value: '4', label: '4 Columns' },
              { value: '5', label: '5 Columns' },
              { value: '6', label: '6 Columns' },
              { value: 'full', label: 'Full Width' },
            ],
          },
        },
        {
          name: 'rowSpan',
          label: 'Row Span',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '1', label: '1 Row' },
              { value: '2', label: '2 Rows' },
              { value: '3', label: '3 Rows' },
              { value: '4', label: '4 Rows' },
            ],
          },
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
      ],
    },
    {
      groupName: 'Alignment',
      defaultOpen: false,
      props: [
        {
          name: 'alignSelf',
          label: 'Align Self',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'auto', label: 'Auto' },
              { value: 'start', label: 'Start' },
              { value: 'center', label: 'Center' },
              { value: 'end', label: 'End' },
              { value: 'stretch', label: 'Stretch' },
            ],
          },
        },
        {
          name: 'justifySelf',
          label: 'Justify Self',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'auto', label: 'Auto' },
              { value: 'start', label: 'Start' },
              { value: 'center', label: 'Center' },
              { value: 'end', label: 'End' },
              { value: 'stretch', label: 'Stretch' },
            ],
          },
        },
      ],
    },
  ],
}

export default GridItem
