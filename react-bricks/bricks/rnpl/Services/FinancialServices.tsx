import { RichText, Text, Repeater, types } from 'react-bricks/rsc'
import {
  LayoutProps,
  sectionDefaults,
} from '../../react-bricks-ui/LayoutSideProps'
import blockNames from '../../react-bricks-ui/blockNames'
import { bgColors } from '../../react-bricks-ui/colors'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import { buttonSideProps } from '@/react-bricks/bricks/rnpl/shared/buttonSideProps'
import RNPLButton from '@/react-bricks/bricks/rnpl/shared/Button'

interface FinancialServiceItemProps {
  text: types.TextValue
}

export interface FinancialServicesProps extends LayoutProps {
  title: types.TextValue
  subtitle: types.TextValue
  mainText: types.TextValue
  servicesTitle: types.TextValue
  serviceItems: types.RepeaterItems
  buttonText: types.TextValue
  buttonLink: string
  buttonStyle: 'primary' | 'secondary' | 'outline'
  buttonSize: 'small' | 'medium' | 'large'
}

export const FinancialServiceItem: types.Brick<FinancialServiceItemProps> = ({
  text,
}) => {
  return (
    <div className="flex items-start mb-4 md:mb-6">
      <div className="flex-shrink-0 mr-2 md:mr-3 mt-1.5">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-500 rounded-full"></div>
      </div>
      <RichText
        propName="text"
        value={text}
        renderBlock={(props) => (
          <p
            className="text-sm md:text-base lg:text-lg  text-gray-900"
            {...props.attributes}
          >
            {props.children}
          </p>
        )}
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
        ]}
      />
    </div>
  )
}

FinancialServiceItem.schema = {
  name: blockNames.FinancialServiceItem,
  label: 'Financial Service Item',
  category: 'RNPL sections',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    text: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Mortgage Services: We partner with major financial institutions to offer buyers substantial mortgage opportunities.',
          },
        ],
      },
    ],
  }),
}

const FinancialServices: types.Brick<FinancialServicesProps> = ({
  backgroundColor = bgColors.WHITE.value,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  title,
  subtitle,
  mainText,
  servicesTitle,
  serviceItems,
  buttonText,
  buttonLink,
  buttonStyle,
  buttonSize,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
            <Text
              propName="title"
              value={title}
              renderBlock={(props) => (
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
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
                <h3
                  className="text-xl md:text-2xl font-medium"
                  {...props.attributes}
                >
                  {props.children}
                </h3>
              )}
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <RichText
              propName="mainText"
              value={mainText}
              renderBlock={(props) => (
                <p
                  className="text-base md:text-lg lg:text-xl text-gray-900 text-center mb-8 md:mb-12"
                  {...props.attributes}
                >
                  {props.children}
                </p>
              )}
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
              ]}
            />

            <div className="px-4 md:px-6">
              <Text
                propName="servicesTitle"
                value={servicesTitle}
                renderBlock={(props) => (
                  <p
                    className="text-base md:text-lg font-semibold mb-4 md:mb-6"
                    {...props.attributes}
                  >
                    {props.children}
                  </p>
                )}
              />

              <div className="space-y-2 md:space-y-4">
                <Repeater propName="serviceItems" items={serviceItems} />
              </div>
            </div>

            <div className="flex justify-center mt-8 md:mt-12">
              <RNPLButton
                buttonText={buttonText}
                buttonLink={buttonLink}
                buttonStyle={buttonStyle}
                buttonSize={buttonSize}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

FinancialServices.schema = {
  name: blockNames.FinancialServices,
  label: 'Financial Services',
  category: 'RNPL sections',

  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.WHITE.value,
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'Need Help With Finances' }],
      },
    ],
    subtitle: [
      {
        type: 'paragraph',
        children: [{ text: 'We Got You Covered' }],
      },
    ],
    mainText: [
      {
        type: 'paragraph',
        children: [
          {
            text: "Don't look elsewhere for financing. Whether you are buying your first property, refinancing, or seeking an investment property, Zumin has it covered. Renovate now and pay later with 0% financing available.",
          },
        ],
      },
    ],
    servicesTitle: [
      {
        type: 'paragraph',
        children: [{ text: 'Our services include:' }],
      },
    ],
    serviceItems: [
      {
        text: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Mortgage Services: We partner with major financial institutions to offer buyers substantial mortgage opportunities.',
              },
            ],
          },
        ],
      },
      {
        text: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Pre-Approval: Our digital platform offers all the tools to get you pre-approved, ensuring buyers know their financial parameters.',
              },
            ],
          },
        ],
      },
      {
        text: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Advisors: We have a team of financial advisors who will help you choose the best strategies for you and your family.',
              },
            ],
          },
        ],
      },
      {
        text: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Financial Services: Go beyond conventional mortgages and dive into alternative financing.',
              },
            ],
          },
        ],
      },
    ],
    buttonText: [
      {
        type: 'paragraph',
        children: [{ text: 'Learn more' }],
      },
    ],
    buttonLink: '#',
    buttonStyle: 'primary',
    buttonSize: 'medium',
  }),

  repeaterItems: [
    {
      name: 'serviceItems',
      itemType: blockNames.FinancialServiceItem,
      itemLabel: 'Service',
      min: 1,
      max: 8,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'backgroundColor',
          label: 'Background',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              bgColors.WHITE,
              bgColors.LIGHT_GRAY,
              bgColors.GRAY,
              bgColors.DARK_GRAY,
            ],
          },
        },
      ],
    },
    buttonSideProps,
  ],
}

export default FinancialServices
