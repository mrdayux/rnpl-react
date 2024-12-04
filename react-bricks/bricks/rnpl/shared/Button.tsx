import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link, RichText, types } from 'react-bricks/rsc'

interface RNPLButtonProps {
  buttonText: types.TextValue
  buttonLink: string
  buttonStyle: 'primary' | 'secondary' | 'outline'
  buttonSize: 'small' | 'medium' | 'large'
}

function RNPLButton({
  buttonText,
  buttonLink,
  buttonStyle,
  buttonSize,
}: RNPLButtonProps) {
  const getButtonClasses = () => {
    const baseClasses = 'mt-auto w-auto'
    const sizeClasses = {
      small: 'px-3 py-1 text-sm',
      medium: 'px-4 py-2',
      large: 'px-6 py-3 text-lg',
    }
    const styleClasses = {
      primary: 'bg-[#E05D36] hover:bg-[#c24e2d] text-white',
      secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
      outline:
        'border-2 border-[#E05D36] text-[#E05D36] hover:bg-[#E05D36] hover:text-white',
    }

    return `${baseClasses} ${sizeClasses[buttonSize]} ${styleClasses[buttonStyle]}`
  }
  return (
    <div className={'pt-4 text-center'}>
      <Button asChild className={cn('rounded-full', getButtonClasses())}>
        <Link href={buttonLink} className={'w-auto md:w-fit font-semibold'}>
          <RichText
            propName="buttonText"
            value={buttonText}
            placeholder="Button text..."
            allowedFeatures={[]}
          />
        </Link>
      </Button>
    </div>
  )
}

export default RNPLButton
