import { RichText, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { textColors } from '@/react-bricks/bricks/react-bricks-ui/colors'

interface HeadingTwoProps {
  text: types.TextValue
  textAlign: 'left' | 'center' | 'right'
}

const HeadingTwo: types.Brick<HeadingTwoProps> = ({ text, textAlign }) => {
  return (
    <RichText
      propName="text"
      value={text}
      renderBlock={(props) => (
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ${textColors.GRAY_900} text-${textAlign}`}
          {...props.attributes}
        >
          {props.children}
        </h2>
      )}
      placeholder="Type a subtitle..."
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Highlight,
      ]}
    />
  )
}

HeadingTwo.schema = {
  name: blockNames.HeadingTwo,
  label: 'Heading 2',
  category: 'blog elements',
  getDefaultProps: () => ({
    text: 'This is a H2 Heading',
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

export default HeadingTwo
