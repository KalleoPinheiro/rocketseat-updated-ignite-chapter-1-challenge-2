import CoffeeBanner from '../../assets/banner.svg'
import { Card } from '../../components/Card'
import { CoffeCard } from '../../components/CoffeCard'
import { Header } from '../../components/Header'
import { benefits } from '../../core/utils/benefitList'
import { coffeList } from '../../core/utils/coffeList'
import * as S from '../../styles/pages/Home'

const Home = () => (
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
					{benefits.map((benefit) => (
						<Card
							key={benefit.id}
							icon={benefit.icon}
							label={benefit.label}
							color={benefit.color}
						/>
					))}
				</S.CardListContent>
			</S.Info>
			<S.Image>
				<img src={CoffeeBanner} alt='' />
			</S.Image>
		</S.BannerSection>
		<S.CoffeeSection>
			<h2>Nossos cafés</h2>
			<S.CoffeeList>
				{coffeList.map((coffe) => (
					<CoffeCard
						key={coffe.id}
						image={coffe.image}
						category={coffe.category}
						title={coffe.title}
						description={coffe.description}
						amount={coffe.amount}
					/>
				))}
			</S.CoffeeList>
		</S.CoffeeSection>
	</S.Container>
)

export default Home
