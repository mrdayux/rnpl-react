import { RichText, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { textColors } from '@/react-bricks/bricks/react-bricks-ui/colors'

interface HeadingThreeProps {
  text: types.TextValue
  textAlign: 'left' | 'center' | 'right'
}

const HeadingThree: types.Brick<HeadingThreeProps> = ({ text, textAlign }) => {
  return (
    <RichText
      propName="text"
      value={text}
      renderBlock={(props) => (
        <h3
          className={`text-2xl md:text-3xl font-bold mb-3 ${textColors.GRAY_900} text-${textAlign}`}
          {...props.attributes}
        >
          {props.children}
        </h3>
      )}
      placeholder="Type a heading..."
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Highlight,
      ]}
    />
  )
}

HeadingThree.schema = {
  name: blockNames.HeadingThree,
  label: 'Heading 3',
  category: 'blog elements',
  getDefaultProps: () => ({
    text: 'This is a H3 Heading',
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

export default HeadingThree
