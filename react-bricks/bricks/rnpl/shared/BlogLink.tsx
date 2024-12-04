import { Text, Link as RBLink, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'

interface BlogLinkProps {
  text: types.TextValue
  href: string
  openInNewTab: boolean
  linkStyle: 'default' | 'underline' | 'button'
}

const BlogLink: types.Brick<BlogLinkProps> = ({
  text,
  href,
  openInNewTab,
  linkStyle,
}) => {
  const getLinkStyles = () => {
    switch (linkStyle) {
      case 'underline':
        return 'underline decoration-2 underline-offset-4 hover:decoration-4'
      case 'button':
        return 'inline-block px-4 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-600 transition-colors'
      default:
        return 'text-sky-500 hover:text-sky-600'
    }
  }

  return (
    <RBLink
      href={href}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
      className={`transition-all ${getLinkStyles()}`}
    >
      <Text
        propName="text"
        value={text}
        renderBlock={(props) => (
          <span {...props.attributes}>{props.children}</span>
        )}
        placeholder="Type link text..."
      />
    </RBLink>
  )
}

BlogLink.schema = {
  name: blockNames.BlogLink,
  label: 'Link',
  category: 'blog elements',
  getDefaultProps: () => ({
    text: 'Click here',
    href: '#',
    openInNewTab: false,
    linkStyle: 'default',
  }),
  sideEditProps: [
    {
      name: 'href',
      label: 'Link URL',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'openInNewTab',
      label: 'Open in new tab',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'linkStyle',
      label: 'Link Style',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'default', label: 'Default' },
          { value: 'underline', label: 'Underlined' },
          { value: 'button', label: 'Button' },
        ],
      },
    },
  ],
}

export default BlogLink
