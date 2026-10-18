import { type ComponentProps } from 'react'
import { cn } from '@/lib/cn'

type ContainerProps = ComponentProps<'div'>

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div {...props} className={cn('container', className)}>
      {children}
    </div>
  )
}
