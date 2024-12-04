import { RichText, Text, types } from 'react-bricks/rsc'
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

interface ProfessionalsCTAProps extends LayoutProps {
  title: types.TextValue
  subtitle: types.TextValue
  description: types.TextValue
  buttonText: types.TextValue
  buttonLink: string
  buttonSize: 'small' | 'medium' | 'large'
  buttonStyle: 'primary' | 'secondary' | 'outline'
}

const ProfessionalsCTA: types.Brick<ProfessionalsCTAProps> = ({
  backgroundColor = bgColors.WHITE.value,
  backgroundImage,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  buttonSize = 'medium',
  buttonStyle = 'primary',
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="text-center space-y-6"
      >
        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <h2
              className="text-4xl md:text-5xl font-bold"
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
            <h3 className="text-2xl md:text-3xl" {...props.attributes}>
              {props.children}
            </h3>
          )}
        />

        <RichText
          propName="description"
          value={description}
          renderBlock={(props) => (
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              {...props.attributes}
            >
              {props.children}
            </p>
          )}
        />

        <RNPLButton
          buttonText={buttonText}
          buttonLink={buttonLink}
          buttonStyle={buttonStyle}
          buttonSize={buttonSize}
        />
      </Container>
    </Section>
  )
}

ProfessionalsCTA.schema = {
  name: blockNames.ProfessionalsCTA,
  label: 'Professionals CTA',
  category: 'RNPL sections',
  previewImageUrl: `/bricks-preview-images/${blockNames.ProfessionalsCTA}.png`,

  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.WHITE.value,
    title: [
      {
        type: 'paragraph',
        children: [
          { text: 'Calling all Designers, Contractors and Professionals' },
        ],
      },
    ],
    subtitle: [
      {
        type: 'paragraph',
        children: [{ text: 'Unlock our network and earn more' }],
      },
    ],
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Join My Connect and become a trusted partner to thousands of qualified leads and other professionals.',
          },
        ],
      },
    ],
    buttonText: [{ type: 'paragraph', children: [{ text: 'Join for Free' }] }],
    buttonLink: '#',
  }),

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

export default ProfessionalsCTA
