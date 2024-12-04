import { Text, Repeater, types } from 'react-bricks/rsc'
import blockNames from '../../../react-bricks-ui/blockNames'
import {
  LayoutProps,
  sectionDefaults,
} from '../../../react-bricks-ui/LayoutSideProps'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import { cn } from '@/lib/utils'
import { ICON_OPTIONS } from './FeatureIcons'

type ColumnCount = '2' | '3' | '4'
type ContentAlignment = 'left' | 'center' | 'right'

export interface FeatureCardsProps extends LayoutProps {
  title: types.TextValue
  subtitle: types.TextValue
  columns: ColumnCount
  alignment: ContentAlignment
  features: types.RepeaterItems
  hoverEffect: boolean
  padding: 'normal' | 'large'
}

const FeatureCards: types.Brick<FeatureCardsProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  title,
  subtitle,
  columns = '3',
  alignment = 'center',
  features,
  hoverEffect = true,
  padding = 'normal',
}) => {
  const getGridCols = (cols: ColumnCount): string => {
    const gridMap = {
      '2': 'md:grid-cols-2',
      '3': 'md:grid-cols-2 lg:grid-cols-3',
      '4': 'md:grid-cols-2 lg:grid-cols-4',
    }
    return gridMap[cols]
  }

  const getContentAlignment = (align: ContentAlignment): string => {
    return {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    }[align]
  }

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className={cn(
          'space-y-12',
          padding === 'large' ? 'py-16 md:py-24' : 'py-12'
        )}
      >
        <div
          className={cn(
            'max-w-3xl',
            alignment === 'center' && 'mx-auto',
            alignment === 'right' && 'ml-auto',
            getContentAlignment(alignment)
          )}
        >
          <Text
            propName="title"
            value={title}
            renderBlock={(props) => (
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                {...props.attributes}
              >
                {props.children}
              </h2>
            )}
          />

          <Text
            propName="subtitle"
            value={subtitle}
            renderBlock={(props) => (
              <p
                className="text-lg md:text-xl text-gray-600"
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
          />
        </div>

        <Repeater
          propName="features"
          items={features}
          itemProps={{
            alignment,
            hoverEffect,
          }}
          renderWrapper={(items) => (
            <div className={cn('grid gap-6 md:gap-8', getGridCols(columns))}>
              {items}
            </div>
          )}
        />
      </Container>
    </Section>
  )
}

FeatureCards.schema = {
  name: blockNames.FeatureCards,
  label: 'Feature Cards',
  category: 'RNPL sections',

  getDefaultProps: () => ({
    ...sectionDefaults,
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'Our Services' }],
      },
    ],
    subtitle: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Comprehensive real estate solutions tailored to your needs.',
          },
        ],
      },
    ],
    columns: '3',
    alignment: 'center',
    hoverEffect: true,
    padding: 'normal',
    features: [
      {
        iconKey: 'key',
        useCustomIcon: false,
        title: [
          {
            type: 'paragraph',
            children: [{ text: 'Property Search' }],
          },
        ],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Find your perfect property with our advanced search tools and expert guidance.',
              },
            ],
          },
        ],
      },
      {
        iconKey: 'shield',
        useCustomIcon: false,
        title: [
          {
            type: 'paragraph',
            children: [{ text: 'Secure Transactions' }],
          },
        ],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Experience peace of mind with our secure and transparent transaction process.',
              },
            ],
          },
        ],
      },
      {
        iconKey: 'chart',
        useCustomIcon: false,
        title: [
          {
            type: 'paragraph',
            children: [{ text: 'Market Analysis' }],
          },
        ],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Stay informed with detailed market analysis and property valuations.',
              },
            ],
          },
        ],
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'features',
      itemType: blockNames.FeatureCardItem,
      itemLabel: 'Feature',
      min: 1,
      max: 12,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'columns',
          label: 'Columns',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: '2', label: '2 Columns' },
              { value: '3', label: '3 Columns' },
              { value: '4', label: '4 Columns' },
            ],
          },
        },
        {
          name: 'alignment',
          label: 'Content Alignment',
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
        {
          name: 'padding',
          label: 'Section Padding',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'normal', label: 'Normal' },
              { value: 'large', label: 'Large' },
            ],
          },
        },
        {
          name: 'hoverEffect',
          label: 'Card Hover Effect',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
  ],
}

export default FeatureCards
