import { RichText, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { textColors } from '@/react-bricks/bricks/react-bricks-ui/colors'

interface HeadingOneProps {
  text: types.TextValue
  textAlign: 'left' | 'center' | 'right'
}

const HeadingOne: types.Brick<HeadingOneProps> = ({ text, textAlign }) => {
  return (
    <RichText
      propName="text"
      value={text}
      renderBlock={(props) => (
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${textColors.GRAY_900} text-${textAlign}`}
          {...props.attributes}
        >
          {props.children}
        </h1>
      )}
      placeholder="Type a title..."
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Highlight,
      ]}
    />
  )
}

HeadingOne.schema = {
  name: blockNames.HeadingOne,
  label: 'Heading 1',
  category: 'blog elements',
  getDefaultProps: () => ({
    text: 'This is a H1 Heading',
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

export default HeadingOne
