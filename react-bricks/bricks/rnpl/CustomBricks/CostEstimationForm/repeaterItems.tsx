import { Text, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { Home, Clock, Medal } from 'lucide-react'

interface ProjectTypeProps {
  type: string
  baseCost: number
  title: types.TextValue
  description: types.TextValue
  selected: string
  onSelect: (type: string) => void
}

export const ProjectTypeBrick: types.Brick<ProjectTypeProps> = ({
  type,
  title,
  description,
  selected,
  onSelect,
}) => {
  return (
    <Label
      htmlFor={type}
      className={cn(
        'flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors',
        selected === type && 'border-primary bg-primary/5'
      )}
      onClick={() => onSelect(type)}
    >
      <RadioGroupItem value={type} id={type} className="sr-only" />
      <Home className="w-5 h-5 mr-2 shrink-0" />
      <div>
        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <p className="font-medium" {...props.attributes}>
              {props.children}
            </p>
          )}
        />
        <Text
          propName="description"
          value={description}
          renderBlock={(props) => (
            <p className="text-sm text-gray-500" {...props.attributes}>
              {props.children}
            </p>
          )}
        />
      </div>
    </Label>
  )
}

interface QualityLevelProps {
  level: string
  multiplier: number
  title: types.TextValue
  description: types.TextValue
  selected: string
  onSelect: (level: string) => void
}

export const QualityLevelBrick: types.Brick<QualityLevelProps> = ({
  level,
  title,
  description,
  selected,
  onSelect,
}) => {
  return (
    <Label
      htmlFor={level}
      className={cn(
        'flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors',
        selected === level && 'border-primary bg-primary/5'
      )}
      onClick={() => onSelect(level)}
    >
      <RadioGroupItem value={level} id={level} className="sr-only" />
      <Medal className="w-5 h-5 mr-2 shrink-0" />
      <div>
        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <p className="font-medium" {...props.attributes}>
              {props.children}
            </p>
          )}
        />
        <Text
          propName="description"
          value={description}
          renderBlock={(props) => (
            <p className="text-sm text-gray-500" {...props.attributes}>
              {props.children}
            </p>
          )}
        />
      </div>
    </Label>
  )
}

interface TimeFrameProps {
  type: string
  multiplier: number
  title: types.TextValue
  description: types.TextValue
  selected: string
  onSelect: (type: string) => void
}

export const TimeFrameBrick: types.Brick<TimeFrameProps> = ({
  type,
  title,
  description,
  selected,
  onSelect,
}) => {
  return (
    <Label
      htmlFor={type}
      className={cn(
        'flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors',
        selected === type && 'border-primary bg-primary/5'
      )}
      onClick={() => onSelect(type)}
    >
      <RadioGroupItem value={type} id={type} className="sr-only" />
      <Clock className="w-5 h-5 mr-2 shrink-0" />
      <div>
        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <p className="font-medium" {...props.attributes}>
              {props.children}
            </p>
          )}
        />
        <Text
          propName="description"
          value={description}
          renderBlock={(props) => (
            <p className="text-sm text-gray-500" {...props.attributes}>
              {props.children}
            </p>
          )}
        />
      </div>
    </Label>
  )
}

ProjectTypeBrick.schema = {
  name: blockNames.ProjectType,
  label: 'Project Type',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    type: 'kitchen',
    baseCost: 15000,
    title: [{ type: 'paragraph', children: [{ text: 'Kitchen Renovation' }] }],
    description: [
      {
        type: 'paragraph',
        children: [{ text: 'Complete kitchen remodeling' }],
      },
    ],
  }),

  sideEditProps: [
    {
      name: 'type',
      label: 'Project Type ID',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'baseCost',
      label: 'Base Cost',
      type: types.SideEditPropType.Number,
    },
  ],
}

QualityLevelBrick.schema = {
  name: blockNames.QualityLevel,
  label: 'Quality Level',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    level: 'standard',
    multiplier: 1,
    title: [{ type: 'paragraph', children: [{ text: 'Standard' }] }],
    description: [
      {
        type: 'paragraph',
        children: [{ text: 'Quality materials with good value' }],
      },
    ],
  }),

  sideEditProps: [
    {
      name: 'level',
      label: 'Quality Level ID',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'multiplier',
      label: 'Cost Multiplier',
      type: types.SideEditPropType.Number,
    },
  ],
}

TimeFrameBrick.schema = {
  name: blockNames.TimeFrame,
  label: 'Timeframe',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    type: 'standard',
    multiplier: 1,
    title: [{ type: 'paragraph', children: [{ text: 'Standard Timeline' }] }],
    description: [
      { type: 'paragraph', children: [{ text: 'Regular project timeline' }] },
    ],
  }),

  sideEditProps: [
    {
      name: 'type',
      label: 'Timeframe ID',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'multiplier',
      label: 'Cost Multiplier',
      type: types.SideEditPropType.Number,
    },
  ],
}
