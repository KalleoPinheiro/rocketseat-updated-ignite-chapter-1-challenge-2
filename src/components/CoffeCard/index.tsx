import { FC } from 'react'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { IconButton } from '../../components/Button'
import { DefaultTheme } from '../../styles'
import * as S from './styles'

type CoffeCardProps = {
	image: string
	category: string
	title: string
	description: string
	amount: string
}

export const CoffeCard: FC<CoffeCardProps> = ({
	image,
	category,
	description,
	title,
	amount,
}) => {
	return (
		<S.Container>
			<S.Image>
				<img src={image} alt={`product ${title} photo`} />
			</S.Image>
			<S.Label>{category}</S.Label>
			<S.Title>{title}</S.Title>
			<S.Description>{description}</S.Description>
			<S.Actions>
				<S.Price>
					R$ <span>{amount}</span>
				</S.Price>
				<S.Sale>
					<S.Counter>
						<IconButton
							variant='tertiary'
							icon={
								<Minus
									size={22}
									weight='bold'
									color={DefaultTheme.colors['purple-500']}
								/>
							}
						/>
						<span>1</span>
						<IconButton
							variant='tertiary'
							icon={
								<Plus
									size={22}
									weight='bold'
									color={DefaultTheme.colors['purple-500']}
								/>
							}
						/>
					</S.Counter>
					<IconButton
						variant='primary'
						icon={
							<ShoppingCart
								size={22}
								weight='fill'
								color={DefaultTheme.colors.white}
							/>
						}
					/>
				</S.Sale>
			</S.Actions>
		</S.Container>
	)
}
