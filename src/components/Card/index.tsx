import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { DefaultTheme } from '../../styles'
import { Wrapper } from './styles'

export type CardProps = {
	label: string
	icon: string
	color: string
}

const benefitsIconList = {
	shoppingCart: <ShoppingCart color={DefaultTheme.colors.white} />,
	package: <Package color={DefaultTheme.colors.white} />,
	timer: <Timer color={DefaultTheme.colors.white} />,
	coffee: <Coffee color={DefaultTheme.colors.white} />,
} as any

export const Card = ({ icon, label, color }: CardProps) => (
	<Wrapper color={color}>
		<div>{benefitsIconList[icon]}</div>
		<span>{label}</span>
	</Wrapper>
)
