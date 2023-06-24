import { ReactNode } from 'react'

type ButtonSize = 'small' | 'medium'
type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export type ButtonProps = {
	label?: string
	size?: ButtonSize
	variant?: ButtonVariant
	icon?: ReactNode
}

export type IconButtonProps = {
	notification?: number
	variant?: ButtonVariant
	icon?: ReactNode
}

export * from './Default'
export * from './IconButton'
