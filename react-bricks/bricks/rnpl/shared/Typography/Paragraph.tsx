import { RichText, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { textColors } from '@/react-bricks/bricks/react-bricks-ui/colors'

interface ParagraphProps {
  text: types.TextValue
  textAlign: 'left' | 'center' | 'right' | 'justify'
  size: 'small' | 'medium' | 'large'
  fontWeight: 'normal' | 'medium' | 'semibold'
}

const RNPLParagraph: types.Brick<ParagraphProps> = ({
  text,
  textAlign,
  size,
  fontWeight,
}) => {
  const getTextSize = () => {
    switch (size) {
      case 'small':
        return 'text-sm md:text-base'
      case 'large':
        return 'text-lg md:text-xl'
      default:
        return 'text-base md:text-lg'
    }
  }

  const getFontWeight = () => {
    switch (fontWeight) {
      case 'medium':
        return 'font-medium'
      case 'semibold':
        return 'font-semibold'
      default:
        return 'font-normal'
    }
  }

  return (
    <RichText
      propName="text"
      value={text}
      renderBlock={(props) => (
        <p
          className={`mb-4 leading-relaxed ${getTextSize()} ${getFontWeight()} ${textColors.GRAY_700} text-${textAlign}`}
          {...props.attributes}
        >
          {props.children}
        </p>
      )}
      placeholder="Type paragraph text..."
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Italic,
        types.RichTextFeatures.Link,
        types.RichTextFeatures.Highlight,
        types.RichTextFeatures.Code,
      ]}
    />
  )
}

RNPLParagraph.schema = {
  name: blockNames.RNPLParagraph,
  label: 'RNPL Paragraph',
  category: 'blog elements',
  getDefaultProps: () => ({
    text: 'Start typing your paragraph content here...',
    textAlign: 'left',
    size: 'medium',
    fontWeight: 'normal',
  }),
  sideEditProps: [
    {
      name: 'textAlign',
      label: 'Text Align',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
          { value: 'justify', label: 'Justify' },
        ],
      },
    },
    {
      name: 'size',
      label: 'Text Size',
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
      name: 'fontWeight',
      label: 'Font Weight',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'normal', label: 'Normal' },
          { value: 'medium', label: 'Medium' },
          { value: 'semibold', label: 'Semibold' },
        ],
      },
    },
  ],
}

export default RNPLParagraph
