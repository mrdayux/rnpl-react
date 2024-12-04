import { RichText, types } from 'react-bricks/rsc'
import blockNames from '../../blockNames'
import Section from '../../shared/components/Section'
import Container from '../../shared/components/Container'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  containerWidthSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'

interface BlogRichTextProps extends LayoutProps {
  text: types.TextValue
  textAlign: 'left' | 'center' | 'right'
  fontSize: 'small' | 'medium' | 'large'
}

const BlogRichText: types.Brick<BlogRichTextProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  text,
  textAlign = 'left',
  fontSize = 'medium',
}) => {
  const getFontSize = () => {
    switch (fontSize) {
      case 'small':
        return 'text-base'
      case 'medium':
        return 'text-lg'
      case 'large':
        return 'text-xl'
    }
  }

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <RichText
          propName="text"
          value={text}
          renderBlock={(props) => (
            <div
              className={`prose prose-lg max-w-none ${getFontSize()} text-${textAlign}`}
              {...props.attributes}
            >
              {props.children}
            </div>
          )}
          placeholder="Type blog content..."
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Code,
            types.RichTextFeatures.Link,
            types.RichTextFeatures.UnorderedList,
            types.RichTextFeatures.OrderedList,
            types.RichTextFeatures.Quote,
            types.RichTextFeatures.Heading1,
            types.RichTextFeatures.Heading2,
            types.RichTextFeatures.Heading3,
            types.RichTextFeatures.Heading4,
            types.RichTextFeatures.Heading5,
            types.RichTextFeatures.Heading6,
            types.RichTextFeatures.Superscript,
            types.RichTextFeatures.Subscript,
          ]}
        />
      </Container>
    </Section>
  )
}

BlogRichText.schema = {
  name: blockNames.BlogRichText,
  label: 'Blog Rich Text',
  category: 'single column / blog',

  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    text: 'Start writing your blog content...',
    textAlign: 'left',
    fontSize: 'medium',
  }),

  sideEditProps: [
    {
      groupName: 'Text',
      defaultOpen: true,
      props: [
        {
          name: 'textAlign',
          label: 'Text Alignment',
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
          name: 'fontSize',
          label: 'Font Size',
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
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}

export default BlogRichText
