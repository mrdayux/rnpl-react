import { RichText, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { textColors } from '@/react-bricks/bricks/react-bricks-ui/colors'

interface HeadingFiveProps {
  text: types.TextValue
  textAlign: 'left' | 'center' | 'right'
}

const HeadingFive: types.Brick<HeadingFiveProps> = ({ text, textAlign }) => {
  return (
    <RichText
      propName="text"
      value={text}
      renderBlock={(props) => (
        <h5
          className={`text-lg md:text-xl font-bold mb-2 ${textColors.GRAY_900} text-${textAlign}`}
          {...props.attributes}
        >
          {props.children}
        </h5>
      )}
      placeholder="Type a heading..."
      allowedFeatures={[
        types.RichTextFeatures.Bold,
        types.RichTextFeatures.Highlight,
      ]}
    />
  )
}

HeadingFive.schema = {
  name: blockNames.HeadingFive,
  label: 'Heading 5',
  category: 'blog elements',
  getDefaultProps: () => ({
    text: 'This is a H5 Heading',
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

export default HeadingFive
