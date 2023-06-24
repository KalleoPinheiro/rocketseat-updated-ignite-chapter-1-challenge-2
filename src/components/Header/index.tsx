import { MapPin, ShoppingCart } from 'phosphor-react'

import { Button, IconButton } from '../Button'
import { DefaultTheme } from '../../styles/themes'

import CoffeeDeliveryLogo from '../../assets/logotipo.svg'

import * as S from './styles'

export const Header = () => {
	return (
		<S.Wrapper>
			<img src={CoffeeDeliveryLogo} alt='' />
			<div>
				<Button
					label='Porto Alegre, RS'
					variant='secondary'
					size='small'
					icon={
						<MapPin
							size={22}
							weight='fill'
							color={DefaultTheme.colors['purple-500']}
						/>
					}
				/>
				<IconButton
					variant='secondary'
					icon={
						<ShoppingCart
							size={22}
							weight='fill'
							color={DefaultTheme.colors['yellow-700']}
						/>
					}
				/>
			</div>
		</S.Wrapper>
	)
}
