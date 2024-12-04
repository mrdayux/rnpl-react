'use client'
import React, { useState } from 'react'
import { Text, Repeater, types } from 'react-bricks/rsc'
import blockNames from '@/react-bricks/bricks/react-bricks-ui/blockNames'
import { highlightTextColors } from '@/react-bricks/bricks/react-bricks-ui/colors'
import Section from '@/react-bricks/bricks/react-bricks-ui/shared/components/Section'
import Container from '@/react-bricks/bricks/react-bricks-ui/shared/components/Container'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CheckCircle, Home, ArrowRight, ArrowLeft } from 'lucide-react'
import { CostEstimatorFormProps, FormState, EstimateResult } from './type'
import { cn } from '@/lib/utils'

const CostEstimatorForm: types.Brick<CostEstimatorFormProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  title,
  subtitle,
  disclaimerText,
  projectTypes,
  qualityLevels,
  timeframes,
}) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormState>({
    projectType: '',
    qualityLevel: '',
    timeframe: '',
  })
  const [estimate, setEstimate] = useState<EstimateResult | null>(null)

  const calculateEstimate = () => {
    const selectedProject = projectTypes?.find(
      (pt) => pt.props.type === formData.projectType
    )
    const selectedQuality = qualityLevels?.find(
      (ql) => ql.props.level === formData.qualityLevel
    )
    const selectedTime = timeframes?.find(
      (tf) => tf.props.type === formData.timeframe
    )

    if (
      !selectedProject?.props.baseCost ||
      !selectedQuality?.props.multiplier ||
      !selectedTime?.props.multiplier
    ) {
      return { totalCost: 0 }
    }

    const totalCost =
      selectedProject.props.baseCost *
      selectedQuality.props.multiplier *
      selectedTime.props.multiplier

    return { totalCost: Math.round(totalCost) }
  }

  const handleNextStep = () => {
    if (step === 3) {
      const result = calculateEstimate()
      setEstimate(result)
    }
    setStep(step + 1)
  }

  const renderProjectTypes = () => (
    <div className="space-y-6">
      <RadioGroup
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        value={formData.projectType}
        onValueChange={(value) =>
          setFormData({ ...formData, projectType: value })
        }
      >
        <Repeater
          propName="projectTypes"
          items={projectTypes}
          renderWrapper={(items) => <>{items}</>}
          itemProps={{
            selected: formData.projectType,
            onSelect: (type: string) =>
              setFormData({ ...formData, projectType: type }),
          }}
        />
      </RadioGroup>
    </div>
  )

  const renderQualityLevels = () => (
    <div className="space-y-6">
      <RadioGroup
        className="grid gap-4"
        value={formData.qualityLevel}
        onValueChange={(value) =>
          setFormData({ ...formData, qualityLevel: value })
        }
      >
        <Repeater
          propName="qualityLevels"
          items={qualityLevels}
          renderWrapper={(items) => <>{items}</>}
          itemProps={{
            selected: formData.qualityLevel,
            onSelect: (level: string) =>
              setFormData({ ...formData, qualityLevel: level }),
          }}
        />
      </RadioGroup>
    </div>
  )

  const renderTimeframes = () => (
    <div className="space-y-6">
      <RadioGroup
        className="grid gap-4"
        value={formData.timeframe}
        onValueChange={(value) =>
          setFormData({ ...formData, timeframe: value })
        }
      >
        <Repeater
          propName="timeframes"
          items={timeframes}
          renderWrapper={(items) => <>{items}</>}
          itemProps={{
            selected: formData.timeframe,
            onSelect: (type: string) =>
              setFormData({ ...formData, timeframe: type }),
          }}
        />
      </RadioGroup>
    </div>
  )

  const renderEstimate = () => (
    <div className="text-center p-8">
      <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
      <h3 className="text-2xl font-bold mb-2">Your Estimate is Ready!</h3>
      <div className="bg-primary/5 rounded-lg p-6 mb-6">
        <p className="text-sm text-gray-600 mb-2">Estimated Cost:</p>
        <p className="text-3xl font-bold text-primary">
          ${estimate?.totalCost.toLocaleString()}
        </p>
      </div>
      <div className="text-sm text-gray-500">
        <Text
          propName="disclaimerText"
          value={disclaimerText}
          renderBlock={(props) => (
            <p className="italic" {...props.attributes}>
              {props.children}
            </p>
          )}
        />
      </div>
    </div>
  )

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Text
              propName="title"
              value={title}
              renderBlock={(props) => (
                <h2 className="text-3xl font-bold mb-3" {...props.attributes}>
                  {props.children}
                </h2>
              )}
            />
            <Text
              propName="subtitle"
              value={subtitle}
              renderBlock={(props) => (
                <p className="text-gray-600" {...props.attributes}>
                  {props.children}
                </p>
              )}
            />
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={cn(
                      'flex items-center',
                      stepNumber !== 4 && 'w-full'
                    )}
                  >
                    <div
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium',
                        step >= stepNumber
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-400'
                      )}
                    >
                      {stepNumber}
                    </div>
                    {stepNumber !== 4 && (
                      <div
                        className={cn(
                          'flex-1 h-0.5 mx-2',
                          step > stepNumber ? 'bg-primary' : 'bg-gray-100'
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardHeader>

            <CardContent>
              {step === 1 && renderProjectTypes()}
              {step === 2 && renderQualityLevels()}
              {step === 3 && renderTimeframes()}
              {step === 4 && renderEstimate()}
            </CardContent>

            <CardFooter className="flex justify-between">
              {step > 1 && (
                <Button variant="outline" onClick={() => setStep(step - 1)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
              )}
              {step < 4 && (
                <Button
                  className="ml-auto"
                  onClick={handleNextStep}
                  disabled={
                    (step === 1 && !formData.projectType) ||
                    (step === 2 && !formData.qualityLevel) ||
                    (step === 3 && !formData.timeframe)
                  }
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </Container>
    </Section>
  )
}

CostEstimatorForm.schema = {
  name: blockNames.CostEstimatorForm,
  label: 'Cost Estimator',
  category: 'forms',

  getDefaultProps: () => ({
    title: [
      {
        type: 'paragraph',
        children: [{ text: 'Estimate Your Renovation Cost' }],
      },
    ],
    subtitle: [
      {
        type: 'paragraph',
        children: [{ text: 'Get an instant estimate for your project' }],
      },
    ],
    disclaimerText: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'This is an estimated cost. Final costs may vary based on specific requirements and conditions.',
          },
        ],
      },
    ],

    projectTypes: [
      {
        type: 'kitchen',
        baseCost: 15000,
        title: [
          { type: 'paragraph', children: [{ text: 'Kitchen Renovation' }] },
        ],
        description: [
          {
            type: 'paragraph',
            children: [{ text: 'Complete kitchen remodeling' }],
          },
        ],
      },
      {
        type: 'bathroom',
        baseCost: 8000,
        title: [
          { type: 'paragraph', children: [{ text: 'Bathroom Renovation' }] },
        ],
        description: [
          {
            type: 'paragraph',
            children: [{ text: 'Bathroom upgrade or remodel' }],
          },
        ],
      },
    ],

    // Default quality levels
    qualityLevels: [
      {
        level: 'standard',
        multiplier: 1,
        title: [{ type: 'paragraph', children: [{ text: 'Standard' }] }],
        description: [
          {
            type: 'paragraph',
            children: [{ text: 'Quality materials with good value' }],
          },
        ],
      },
      {
        level: 'premium',
        multiplier: 1.3,
        title: [{ type: 'paragraph', children: [{ text: 'Premium' }] }],
        description: [
          {
            type: 'paragraph',
            children: [{ text: 'High-end materials and finishes' }],
          },
        ],
      },
      {
        level: 'luxury',
        multiplier: 1.6,
        title: [{ type: 'paragraph', children: [{ text: 'Luxury' }] }],
        description: [
          {
            type: 'paragraph',
            children: [{ text: 'Top-tier materials and custom work' }],
          },
        ],
      },
    ],

    // Default timeframes
    timeframes: [
      {
        type: 'standard',
        multiplier: 1,
        title: [
          { type: 'paragraph', children: [{ text: 'Standard Timeline' }] },
        ],
        description: [
          {
            type: 'paragraph',
            children: [{ text: 'Regular project schedule' }],
          },
        ],
      },
      {
        type: 'urgent',
        multiplier: 1.15,
        title: [{ type: 'paragraph', children: [{ text: 'Urgent Timeline' }] }],
        description: [
          {
            type: 'paragraph',
            children: [{ text: 'Expedited completion (additional costs)' }],
          },
        ],
      },
    ],
  }),

  repeaterItems: [
    {
      name: 'projectTypes',
      itemType: blockNames.ProjectType,
      itemLabel: 'Project Type',
      min: 1,
    },
    {
      name: 'qualityLevels',
      itemType: blockNames.QualityLevel,
      itemLabel: 'Quality Level',
      min: 1,
    },
    {
      name: 'timeframes',
      itemType: blockNames.TimeFrame,
      itemLabel: 'Timeframe',
      min: 1,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Content',
      defaultOpen: true,
      props: [
        {
          name: 'title',
          label: 'Title',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'subtitle',
          label: 'Subtitle',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'disclaimerText',
          label: 'Disclaimer Text',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default CostEstimatorForm
