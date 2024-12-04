import { RichText, types } from 'react-bricks/rsc'
import { textColors } from '@/react-bricks/bricks/react-bricks-ui/colors'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'

interface HeadingFourProps {
  text: types.TextValue
  textAlign: 'left' | 'center' | 'right'
}

const HeadingFour: types.Brick<HeadingFourProps> = ({ text, textAlign }) => {
  return (
    <RichText
      propName="text"
      value={text}
      renderBlock={(props) => (
        <h4
          className={`text-xl md:text-2xl font-bold mb-2 ${textColors.GRAY_900} text-${textAlign}`}
          {...props.attributes}
        >
          {props.children}
        </h4>
      )}
      placeholder="Type a heading..."
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Highlight,
      ]}
    />
  )
}

HeadingFour.schema = {
  name: blockNames.HeadingFour,
  label: 'Heading 4',
  category: 'blog elements',
  getDefaultProps: () => ({
    text: 'This is a H4 Heading',
    textAlign: 'left',
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
        ],
      },
    },
  ],
}

export default HeadingFour
