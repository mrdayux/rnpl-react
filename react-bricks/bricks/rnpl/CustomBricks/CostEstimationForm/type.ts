import { types } from 'react-bricks/rsc'
import { LayoutProps } from '@/react-bricks/bricks/react-bricks-ui/LayoutSideProps'

export interface ProjectType {
  type: string
  baseCost: number
  icon: string
  title: types.TextValue
  description: types.TextValue
}

export interface QualityLevel {
  level: string
  multiplier: number
  title: types.TextValue
  description: types.TextValue
}

export interface TimeFrame {
  type: string
  multiplier: number
  title: types.TextValue
  description: types.TextValue
}

export interface CostEstimatorFormProps extends LayoutProps {
  title: types.TextValue
  subtitle: types.TextValue
  disclaimerText: types.TextValue
  projectTypes: types.RepeaterItems
  qualityLevels: types.RepeaterItems
  timeframes: types.RepeaterItems
}

export interface FormState {
  projectType: string
  qualityLevel: string
  timeframe: string
}

export interface EstimateResult {
  totalCost: number
}
