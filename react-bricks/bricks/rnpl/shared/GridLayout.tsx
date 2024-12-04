import { types } from 'react-bricks/rsc'
import { Repeater } from 'react-bricks/rsc'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
} from '../../react-bricks-ui/LayoutSideProps'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'

export interface GridLayoutProps extends LayoutProps {
  gridItems: types.RepeaterItems
  columns: '2' | '3' | '4' | '5' | '6' | 'auto'
  columnGap: 'none' | 'small' | 'medium' | 'large'
  rowGap: 'none' | 'small' | 'medium' | 'large'
  minItemWidth: string
  autoFlow: 'row' | 'column' | 'dense' | 'row dense' | 'column dense'
  alignItems: 'start' | 'center' | 'end' | 'stretch'
  justifyItems: 'start' | 'center' | 'end' | 'stretch'
}
const GridLayout: types.Brick<GridLayoutProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  gridItems,
  columns = '3',
  columnGap = 'medium',
  rowGap = 'medium',
  minItemWidth = '',
  autoFlow = 'row',
  alignItems = 'stretch',
  justifyItems = 'stretch',
}) => {
  const getGapValue = (gap: 'none' | 'small' | 'medium' | 'large'): number => {
    const gapMap: Record<typeof gap, number> = {
      none: 0,
      small: 8,
      medium: 16,
      large: 32,
    }
    return gapMap[gap]
  }

  const getMobileClass = () => {
    switch (columns) {
      case '2':
        return 'sm:grid-cols-2'
      case '3':
        return 'sm:grid-cols-3'
      case '4':
        return 'sm:grid-cols-2 lg:grid-cols-4'
      case '5':
        return 'sm:grid-cols-2 lg:grid-cols-5'
      case '6':
        return 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
      default:
        return 'sm:grid-cols-3'
    }
  }

  const renderEmptyState = () => (
    <div className="min-h-[200px] flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
      <p className="text-gray-500 text-center mb-4">Grid Layout</p>
      <div className="grid grid-cols-3 gap-2 opacity-50">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-16 h-16 bg-gray-300 rounded"></div>
        ))}
      </div>
      <p className="text-sm text-gray-400 mt-4">Click to add grid items</p>
    </div>
  )

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        {!gridItems || gridItems.length === 0 ? (
          renderEmptyState()
        ) : (
          <div
            className={`
              w-full 
              grid 
              grid-cols-1
              ${columns === 'auto' ? '' : getMobileClass()}
            `}
            style={{
              gridAutoFlow: autoFlow.replace(' dense', ' dense' as any),
              alignItems,
              justifyItems,
              rowGap: `${getGapValue(rowGap)}px`,
              columnGap: `${getGapValue(columnGap)}px`,
              ...(columns === 'auto' && minItemWidth
                ? {
                    gridTemplateColumns: `repeat(auto-fit, minmax(min(${minItemWidth}, 100%), 1fr))`,
                  }
                : {}),
            }}
          >
            <Repeater
              propName="gridItems"
              items={gridItems}
              renderWrapper={(items) => <>{items}</>}
            />
          </div>
        )}
      </Container>
    </Section>
  )
}

GridLayout.schema = {
  name: blockNames.GridLayout,
  label: 'Grid Layout',
  category: 'layout',
  tags: ['grid', 'layout'],

  getDefaultProps: () => ({
    backgroundColor: { color: '#fff', className: 'bg-white' },
    paddingTop: '12',
    paddingBottom: '12',
    borderTop: 'none',
    borderBottom: 'none',
    gridItems: [],
    columns: '3',
    columnGap: 'medium',
    rowGap: 'medium',
    minItemWidth: '',
    autoFlow: 'row',
    alignItems: 'stretch',
    justifyItems: 'stretch',
  }),

  repeaterItems: [
    {
      name: 'gridItems',
      itemLabel: 'Grid Item',
      min: 1,
      max: 12,
      items: [
        {
          type: blockNames.GridItem,
          label: 'Grid Item',
          getDefaultProps: () => ({
            columnSpan: '1',
            rowSpan: '1',
            padding: 'none',
            content: [],
          }),
        },
      ],
    },
  ],

  sideEditProps: [
    {
      groupName: 'Grid Layout',
      defaultOpen: true,
      props: [
        {
          name: 'columns',
          label: 'Grid Columns',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '2', label: '2 Columns' },
              { value: '3', label: '3 Columns' },
              { value: '4', label: '4 Columns' },
              { value: '5', label: '5 Columns' },
              { value: '6', label: '6 Columns' },
              { value: 'auto', label: 'Auto-fit Columns' },
            ],
          },
        },
        {
          name: 'minItemWidth',
          label: 'Min Item Width',
          type: types.SideEditPropType.Text,
          validate: (value) =>
            !value || /^\d+px$/.test(value)
              ? ''
              : 'Please enter a valid width (e.g., 200px)',
          show: (props) => props.columns === 'auto',
        },
      ],
    },
    {
      groupName: 'Spacing & Flow',
      defaultOpen: false,
      props: [
        {
          name: 'columnGap',
          label: 'Column Gap',
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
          name: 'rowGap',
          label: 'Row Gap',
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
          name: 'autoFlow',
          label: 'Grid Auto Flow',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'row', label: 'Row' },
              { value: 'column', label: 'Column' },
              { value: 'dense', label: 'Dense' },
              { value: 'row dense', label: 'Row Dense' },
              { value: 'column dense', label: 'Column Dense' },
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
          name: 'alignItems',
          label: 'Align Items',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'start', label: 'Start' },
              { value: 'center', label: 'Center' },
              { value: 'end', label: 'End' },
              { value: 'stretch', label: 'Stretch' },
            ],
          },
        },
        {
          name: 'justifyItems',
          label: 'Justify Items',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'start', label: 'Start' },
              { value: 'center', label: 'Center' },
              { value: 'end', label: 'End' },
              { value: 'stretch', label: 'Stretch' },
            ],
          },
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
  ],
}

export default GridLayout
