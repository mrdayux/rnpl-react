import classNames from 'classnames'
import * as React from 'react'
import { Repeater, RichText, types } from 'react-bricks/rsc'
import {
  sectionDefaults,
  LayoutProps,
} from '../../react-bricks-ui/LayoutSideProps'
import blockNames from '../../react-bricks-ui/blockNames'
import {
  bgColors,
  buttonColors,
  gradients,
  highlightTextColors,
} from '../../react-bricks-ui/colors'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import { sideGroups } from '@/react-bricks/bricks/rnpl/HeroSection/SideProps'

export interface RNPLHeroProps extends LayoutProps {
  size: 'medium' | 'large'
  textGradient: keyof typeof gradients
  highlightTextColor: { color: string; className: string }
  titleColor: { color: string; className: string }
  subtitleColor: { color: string; className: string }
  textColor: { color: string; className: string }
  contentAlignment: 'left' | 'center' | 'right'
  contentWidth: 'narrow' | 'medium' | 'wide'
  titleWeight: 'normal' | 'medium' | 'bold' | 'extrabold'
  subtitleSize: 'small' | 'medium' | 'large'
  textSize: 'small' | 'medium' | 'large'
  overlayOpacity: string
  title: types.TextValue
  subtitle: types.TextValue
  text: types.TextValue
  buttons: types.RepeaterItems
  buttonAlignment: 'left' | 'center' | 'right'
  buttonSpacing: 'tight' | 'normal' | 'wide'
}

const RNPLHero: types.Brick<RNPLHeroProps> = ({
  backgroundColor = bgColors.WHITE.value,
  backgroundImage,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  size = 'large',
  titleColor,
  subtitleColor,
  textColor,
  contentAlignment = 'center',
  contentWidth = 'medium',
  titleWeight = 'bold',
  subtitleSize = 'medium',
  textSize = 'medium',
  title,
  subtitle,
  text,
  buttons,
  buttonAlignment = 'center',
  buttonSpacing = 'normal',
}: RNPLHeroProps) => {
  const getContentMaxWidth = () => {
    switch (contentWidth) {
      case 'narrow':
        return 'max-w-xl'
      case 'medium':
        return 'max-w-3xl'
      case 'wide':
        return 'max-w-5xl'
      default:
        return 'max-w-3xl'
    }
  }

  const getSubtitleSize = () => {
    switch (subtitleSize) {
      case 'small':
        return 'text-lg sm:text-xl'
      case 'medium':
        return 'text-xl sm:text-2xl'
      case 'large':
        return 'text-2xl sm:text-3xl'
      default:
        return 'text-xl sm:text-2xl'
    }
  }

  const getTextSize = () => {
    switch (textSize) {
      case 'small':
        return 'text-sm sm:text-base'
      case 'medium':
        return 'text-base sm:text-lg'
      case 'large':
        return 'text-lg sm:text-xl'
      default:
        return 'text-base sm:text-lg'
    }
  }

  const getButtonSpacing = () => {
    switch (buttonSpacing) {
      case 'tight':
        return 'gap-2'
      case 'normal':
        return 'gap-4'
      case 'wide':
        return 'gap-6'
      default:
        return 'gap-4'
    }
  }

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
        className={'md:h-[40rem] flex justify-center'}
      >
        <div
          className={classNames(
            getContentMaxWidth(),
            ' mx-auto my-auto px-1 md:px-5 relative'
          )}
        >
          <div
            className={classNames(
              titleColor.className,
              `text-${contentAlignment}`
            )}
          >
            <RichText
              propName="title"
              value={title}
              renderBlock={(props) => (
                <h1
                  className={classNames(
                    'text-[32px] leading-tight sm:text-[48px] sm:leading-tight mb-4',
                    { 'lg:text-6xl lg:leading-tight': size === 'large' },
                    titleColor.className,
                    `font-${titleWeight}`
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </h1>
              )}
              placeholder="Type a title..."
              allowedFeatures={[types.RichTextFeatures.Highlight]}
              renderHighlight={({ children }) => <span>{children}</span>}
            />
          </div>

          <RichText
            propName="subtitle"
            value={subtitle}
            renderBlock={(props) => (
              <p
                className={classNames(
                  getSubtitleSize(),
                  'leading-relaxed mb-6',
                  subtitleColor.className,
                  `text-${contentAlignment}`
                )}
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
            placeholder="Type a subtitle..."
          />

          <RichText
            propName="text"
            value={text}
            renderBlock={(props) => (
              <p
                className={classNames(
                  getTextSize(),
                  'leading-relaxed',
                  textColor.className,
                  `text-${contentAlignment}`
                )}
                {...props.attributes}
              >
                {props.children}
              </p>
            )}
            placeholder="Type description text..."
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Link,
            ]}
            renderLink={(props) => (
              <a
                href={props.href}
                target={props.target}
                rel={props.rel}
                className="text-sky-400 hover:text-sky-300 transition-colors"
              >
                {props.children}
              </a>
            )}
          />
          <Repeater
            propName="buttons"
            items={buttons}
            renderWrapper={(items) => (
              <div
                className={classNames(
                  'flex flex-wrap items-center mt-8',
                  getButtonSpacing(),
                  {
                    'justify-start': buttonAlignment === 'left',
                    'justify-center': buttonAlignment === 'center',
                    'justify-end': buttonAlignment === 'right',
                  }
                )}
              >
                {items}
              </div>
            )}
          />
        </div>
      </Container>
    </Section>
  )
}

RNPLHero.schema = {
  name: blockNames.RNPLHero,
  label: 'RNPL Hero',
  category: 'hero sections',
  tags: ['hero unit', 'title'],
  previewImageUrl: `/bricks-preview-images/${blockNames.RNPLHero}.png`,

  getDefaultProps: () => ({
    ...sectionDefaults,
    size: 'large',
    backgroundColor: bgColors.DARK_GRAY.value,
    textGradient: gradients.NONE.value,
    highlightTextColor: highlightTextColors.SKY.value,
    titleColor: highlightTextColors.GRAY.value,
    subtitleColor: highlightTextColors.GRAY.value,
    textColor: highlightTextColors.GRAY.value,
    contentAlignment: 'center',
    contentWidth: 'medium',
    titleWeight: 'bold',
    subtitleSize: 'medium',
    textSize: 'medium',
    buttonAlignment: 'center',
    buttonSpacing: 'normal',
    title: [
      {
        type: 'paragraph',
        children: [
          { text: 'Renovate Now, ' },
          { text: 'Pay', highlight: true },
          { text: ' Later.' },
        ],
      },
    ],
    subtitle: "Because your dream home shouldn't wait.",
    text: 'We make renovations easy with 0% RNPL financing for up to 1 year, connecting you to experts and flexible options. Renovating to sell, live better, or update your new home—we have you covered.',
    buttons: [
      {
        type: 'link',
        text: 'Start Your Project',
        href: '',
        isTargetBlank: false,
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        variant: 'solid',
        padding: 'normal',
        simpleAnchorLink: false,
      },
      {
        type: 'link',
        text: 'Learn More',
        href: '',
        isTargetBlank: false,
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        variant: 'outline',
        padding: 'normal',
        simpleAnchorLink: false,
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],

  sideEditProps: sideGroups,
}

export default RNPLHero
