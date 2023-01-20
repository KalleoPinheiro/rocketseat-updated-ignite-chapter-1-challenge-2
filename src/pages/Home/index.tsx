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
        <div>
          <img src="img_avatar.png" width={50} height={50} alt="Avatar" />
          <div>
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        </S.CoffeeList>
      </S.CoffeeSection>
    </S.Container>
  )
}

export default Home
