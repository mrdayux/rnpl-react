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

export interface ColumnLayoutProps extends LayoutProps {
  columns: types.RepeaterItems
  direction: 'horizontal' | 'vertical'
  spacing: 'none' | 'small' | 'medium' | 'large'
  alignment: 'start' | 'center' | 'end' | 'stretch'
  distribution: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
}

const ColumnLayout: types.Brick<ColumnLayoutProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  columns,
  direction = 'horizontal',
  spacing = 'medium',
  alignment = 'stretch',
  distribution = 'start',
}) => {
  const getSpacing = (
    spacing: 'none' | 'small' | 'medium' | 'large'
  ): string => {
    const spacingMap: Record<typeof spacing, string> = {
      none: '0',
      small: '2',
      medium: '4',
      large: '8',
    }
    return spacingMap[spacing]
  }

  const renderEmptyState = () => (
    <div className="min-h-[200px] flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
      <p className="text-gray-500 text-center mb-4">Column Layout</p>
      <div className="flex gap-2 opacity-50">
        <div className="w-20 h-32 bg-gray-300 rounded"></div>
        <div className="w-20 h-32 bg-gray-300 rounded"></div>
        <div className="w-20 h-32 bg-gray-300 rounded"></div>
      </div>
      <p className="text-sm text-gray-400 mt-4">Click to add columns</p>
    </div>
  )

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        {!columns || columns.length === 0 ? (
          renderEmptyState()
        ) : (
          <div
            className={`
            flex
            ${direction === 'horizontal' ? 'flex-row' : 'flex-col'}
            gap-${getSpacing(spacing)}
            items-${alignment}
            justify-${distribution}
            w-full
          `}
          >
            <Repeater
              propName="columns"
              items={columns}
              renderWrapper={(items) => (
                <div
                  className={`w-full flex ${direction === 'horizontal' ? 'flex-row' : 'flex-col'} gap-${getSpacing(spacing)}`}
                >
                  {items}
                </div>
              )}
              renderItemWrapper={(item, index) => (
                <div key={index} className="flex-1">
                  {item}
                </div>
              )}
            />
          </div>
        )}
      </Container>
    </Section>
  )
}

ColumnLayout.schema = {
  name: blockNames.ColumnLayout,
  label: 'Column Layout',
  category: 'layout',
  tags: ['columns', 'layout'],

  getDefaultProps: () => ({
    backgroundColor: { color: '#fff', className: 'bg-white' },
    paddingTop: '12',
    paddingBottom: '12',
    borderTop: 'none',
    borderBottom: 'none',
    columns: [],
    direction: 'horizontal',
    spacing: 'medium',
    alignment: 'stretch',
    distribution: 'start',
  }),

  repeaterItems: [
    {
      name: 'columns',
      itemLabel: 'Column',
      min: 1,
      max: 6,
      items: [
        {
          type: blockNames.Column,
          label: 'Column',
          getDefaultProps: () => ({
            padding: 'none',
            width: 'auto',
            verticalAlign: 'top',
            content: [],
          }),
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
          name: 'direction',
          label: 'Stack Direction',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'horizontal', label: 'Horizontal' },
              { value: 'vertical', label: 'Vertical' },
            ],
          },
        },
        {
          name: 'spacing',
          label: 'Spacing',
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
          name: 'alignment',
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
          name: 'distribution',
          label: 'Distribution',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'start', label: 'Start' },
              { value: 'center', label: 'Center' },
              { value: 'end', label: 'End' },
              { value: 'between', label: 'Space Between' },
              { value: 'around', label: 'Space Around' },
              { value: 'evenly', label: 'Space Evenly' },
            ],
          },
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
  ],
}

export default ColumnLayout
