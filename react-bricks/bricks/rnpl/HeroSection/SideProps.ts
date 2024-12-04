import { types } from 'react-bricks/rsc'
import {
  backgroundWithImageBgSideGroup,
  paddingBordersSideGroup,
} from '@/react-bricks/bricks/react-bricks-ui/LayoutSideProps'
import { colorEditProps } from '@/react-bricks/bricks/rnpl/LayoutSideProps'
import { RNPLHeroProps } from '@/react-bricks/bricks/rnpl/HeroSection/RNPLHero'

export const sideGroups: types.ISideGroup<RNPLHeroProps>[] = [
  {
    groupName: 'Layout',
    defaultOpen: true,
    props: [
      {
        name: 'contentAlignment',
        label: 'Content Alignment',
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
        name: 'contentWidth',
        label: 'Content Width',
        type: types.SideEditPropType.Select,
        selectOptions: {
          display: types.OptionsDisplay.Radio,
          options: [
            { value: 'narrow', label: 'Narrow' },
            { value: 'medium', label: 'Medium' },
            { value: 'wide', label: 'Wide' },
          ],
        },
      },
    ],
  },
  {
    groupName: 'Typography',
    defaultOpen: false,
    props: [
      {
        name: 'titleWeight',
        label: 'Title Weight',
        type: types.SideEditPropType.Select,
        selectOptions: {
          display: types.OptionsDisplay.Select,
          options: [
            { value: 'normal', label: 'Normal' },
            { value: 'medium', label: 'Medium' },
            { value: 'bold', label: 'Bold' },
            { value: 'extrabold', label: 'Extra Bold' },
          ],
        },
      },
      {
        name: 'subtitleSize',
        label: 'Subtitle Size',
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
        name: 'textSize',
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
    ],
  },
  {
    groupName: 'Colors',
    defaultOpen: false,
    props: colorEditProps,
  },
  {
    groupName: 'Buttons',
    defaultOpen: false,
    props: [
      {
        name: 'buttonAlignment',
        label: 'Button Alignment',
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
        name: 'buttonSpacing',
        label: 'Button Spacing',
        type: types.SideEditPropType.Select,
        selectOptions: {
          display: types.OptionsDisplay.Select,
          options: [
            { value: 'tight', label: 'Tight' },
            { value: 'normal', label: 'Normal' },
            { value: 'wide', label: 'Wide' },
          ],
        },
      },
    ],
  },
  {
    groupName: 'Spacing',
    defaultOpen: false,
    props: [
      {
        name: 'size',
        label: 'Content Size',
        type: types.SideEditPropType.Select,
        selectOptions: {
          display: types.OptionsDisplay.Radio,
          options: [
            { value: 'medium', label: 'Medium' },
            { value: 'large', label: 'Large' },
          ],
        },
      },
    ],
  },
  paddingBordersSideGroup,
  backgroundWithImageBgSideGroup,
]
