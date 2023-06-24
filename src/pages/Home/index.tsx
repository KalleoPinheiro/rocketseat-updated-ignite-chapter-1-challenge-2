import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { Card } from '../../components/Card'
import { Header } from '../../components/Header'

import CoffeeBanner from '../../assets/banner.svg'

import { DefaultTheme } from '../../styles'
import * as S from '../../styles/pages/Home'

const Home = () => {
	return (
		<S.Container>
			<Header />
			<S.BannerSection>
				<S.Info>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>
					<S.CardListContent>
						<Card
							icon={<ShoppingCart color={DefaultTheme.colors.white} />}
							label='Compra simples e segura'
							color={DefaultTheme.colors['yellow-700']}
						/>
						<Card
							icon={<Package color={DefaultTheme.colors.white} />}
							label='Embalagem mantém o café intacto'
							color={DefaultTheme.colors['gray-700']}
						/>
						<Card
							icon={<Timer color={DefaultTheme.colors.white} />}
							label='Entregarápida e rastreada'
							color={DefaultTheme.colors['yellow-500']}
						/>
						<Card
							icon={<Coffee color={DefaultTheme.colors.white} />}
							label='O cafe chega fresquinho até você'
							color={DefaultTheme.colors['purple-500']}
						/>
					</S.CardListContent>
				</S.Info>
				<S.Image>
					<img src={CoffeeBanner} alt='' />
				</S.Image>
			</S.BannerSection>
			<S.CoffeeSection>
				<h2>Nossos cafés</h2>
				<S.CoffeeList>
					<div
						className='CoffeeCard'
						style={{
							width: 256,
							height: 310,
							position: 'relative',
							background: '#F3F2F2',
							borderTopLeftRadius: 6,
							borderTopRightRadius: 36,
							borderBottomRightRadius: 6,
							borderBottomLeftRadius: 36,
						}}
					>
						<div
							className='Coffee'
							style={{
								width: 120,
								height: 120,
								left: 68,
								top: -20,
								position: 'absolute',
								justifyContent: 'center',
								alignItems: 'center',
								display: 'inline-flex',
							}}
						>
							<img
								className='Image'
								style={{ width: 120, height: 120 }}
								src='https://via.placeholder.com/120x120'
								alt=''
							/>
						</div>
						<div
							className='Tags'
							style={{
								left: 87.5,
								top: 112,
								position: 'absolute',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 4,
								display: 'inline-flex',
							}}
						>
							<div
								className='Tag1'
								style={{
									paddingLeft: 8,
									paddingRight: 8,
									paddingTop: 4,
									paddingBottom: 4,
									background: '#F1E9C9',
									borderRadius: 100,
									justifyContent: 'center',
									alignItems: 'center',
									display: 'flex',
								}}
							>
								<div
									className='Tradicional'
									style={{
										color: '#C47F17',
										fontSize: 10,
										fontFamily: 'Roboto',
										fontWeight: '700',
										textTransform: 'uppercase',
										lineHeight: 13,
										wordWrap: 'break-word',
									}}
								>
									Tradicional
								</div>
							</div>
						</div>
						<div
							className='Name'
							style={{
								width: 216,
								left: 20,
								top: 149,
								position: 'absolute',
								textAlign: 'center',
								color: '#403937',
								fontSize: 20,
								fontFamily: 'Baloo 2',
								fontWeight: '700',
								lineHeight: 26,
								wordWrap: 'break-word',
							}}
						>
							Expresso Tradicional
						</div>
						<div
							className='Description'
							style={{
								width: 216,
								left: 20,
								top: 183,
								position: 'absolute',
								textAlign: 'center',
								color: '#8D8686',
								fontSize: 14,
								fontFamily: 'Roboto',
								fontWeight: '400',
								lineHeight: 18.2,
								wordWrap: 'break-word',
							}}
						>
							O tradicional café feito com água quente e grãos moídos
						</div>
						<div
							className='Buy'
							style={{
								width: 208,
								left: 24,
								top: 252,
								position: 'absolute',
								justifyContent: 'space-between',
								alignItems: 'center',
								gap: 29,
								display: 'inline-flex',
							}}
						>
							<div className='R990' style={{ textAlign: 'right' }}>
								<span
									style={{
										color: '#574F4D',
										fontSize: 14,
										fontFamily: 'Roboto',
										fontWeight: '400',
										lineHeight: 18.2,
										wordWrap: 'break-word',
									}}
								>
									R${' '}
								</span>
								<span
									style={{
										color: '#574F4D',
										fontSize: 24,
										fontFamily: 'Baloo 2',
										fontWeight: '800',
										lineHeight: 31.2,
										wordWrap: 'break-word',
									}}
								>
									9,90
								</span>
							</div>
							<div
								className='Actions'
								style={{
									justifyContent: 'flex-start',
									alignItems: 'center',
									gap: 8,
									display: 'flex',
								}}
							>
								<div
									className='Counter'
									style={{
										width: 72,
										padding: 8,
										background: '#E6E5E5',
										borderRadius: 6,
										justifyContent: 'center',
										alignItems: 'center',
										gap: 4,
										display: 'flex',
									}}
								>
									<div
										className='Icon'
										style={{ width: 14, height: 14, position: 'relative' }}
									>
										<div
											className='VectorStroke'
											style={{
												width: 10.94,
												height: 1.31,
												left: 1.53,
												top: 6.34,
												position: 'absolute',
												background: '#8047F8',
											}}
										></div>
									</div>
									<div
										style={{
											width: 20,
											textAlign: 'center',
											color: '#272221',
											fontSize: 16,
											fontFamily: 'Roboto',
											fontWeight: '400',
											lineHeight: 20.8,
											wordWrap: 'break-word',
										}}
									>
										1
									</div>
									<div
										className='Icon'
										style={{ width: 14, height: 14, position: 'relative' }}
									>
										<div
											className='VectorStroke'
											style={{
												width: 10.94,
												height: 1.31,
												left: 1.53,
												top: 6.34,
												position: 'absolute',
												background: '#8047F8',
											}}
										></div>
										<div
											className='VectorStroke'
											style={{
												width: 1.31,
												height: 10.94,
												left: 6.34,
												top: 1.53,
												position: 'absolute',
												background: '#8047F8',
											}}
										></div>
									</div>
								</div>
								<div
									className='IconButton'
									style={{
										padding: 8,
										background: '#4B2995',
										borderRadius: 6,
										justifyContent: 'center',
										alignItems: 'center',
										gap: 8,
										display: 'flex',
									}}
								>
									<div
										className='Shoppingcartsimple'
										style={{ width: 22, height: 22, position: 'relative' }}
									>
										<div
											className='Vector'
											style={{
												width: 19.74,
												height: 17.88,
												left: 0,
												top: 2.06,
												position: 'absolute',
												background: '#F3F2F2',
											}}
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</S.CoffeeList>
			</S.CoffeeSection>
		</S.Container>
	)
}

export default Home
