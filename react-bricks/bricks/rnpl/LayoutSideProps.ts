import { highlightTextColors } from '@/react-bricks/bricks/react-bricks-ui/colors'
import { types } from 'react-bricks/rsc'
import { RBUIColor } from '@/react-bricks/bricks/react-bricks-ui/LayoutSideProps'

interface BaseColorProps {
  titleColor: RBUIColor
  subtitleColor: RBUIColor
  textColor: RBUIColor
}

type ColorPropName = keyof BaseColorProps

const sharedColorOptions = [
  highlightTextColors.WHITE,
  highlightTextColors.BLACK,
  highlightTextColors.GRAY,
  highlightTextColors.RED,
  highlightTextColors.ORANGE,
  highlightTextColors.AMBER,
  highlightTextColors.YELLOW,
  highlightTextColors.LIME,
  highlightTextColors.GREEN,
  highlightTextColors.EMERALD,
  highlightTextColors.TEAL,
  highlightTextColors.CYAN,
  highlightTextColors.SKY,
  highlightTextColors.BLUE,
  highlightTextColors.INDIGO,
  highlightTextColors.VIOLET,
  highlightTextColors.PURPLE,
  highlightTextColors.FUCHSIA,
  highlightTextColors.PINK,
  highlightTextColors.ROSE,
]

export const createColorEditProp = (
  name: ColorPropName,
  label: string
): types.ISideEditProp<BaseColorProps> => ({
  name,
  label,
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: sharedColorOptions,
  },
})

export const colorEditProps: types.ISideEditProp<BaseColorProps>[] = [
  createColorEditProp('titleColor', 'Title Color'),
  createColorEditProp('subtitleColor', 'Subtitle Color'),
  createColorEditProp('textColor', 'Description Color'),
]

export type { BaseColorProps }
