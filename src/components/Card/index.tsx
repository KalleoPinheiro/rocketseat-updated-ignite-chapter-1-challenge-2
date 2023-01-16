import { ReactNode } from 'react'

import { Wrapper } from './styles'

export type CardProps = {
  label: string
  icon: ReactNode
  color: string
}

export const Card = ({ icon, label, color }: CardProps) => {
  return (
    <Wrapper color={color}>
      <div>{icon}</div>
      <span>{label}</span>
    </Wrapper>
  )
}
