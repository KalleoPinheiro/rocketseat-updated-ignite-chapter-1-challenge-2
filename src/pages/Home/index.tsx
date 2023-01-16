import { Package, ShoppingCart, Timer, Coffee } from 'phosphor-react'

import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Container } from '../../components/Container'

import CoffeeBanner from '../../assets/banner.svg'

import { DefaultTheme } from '../../styles'
import { BannerSection, Info, Image } from '../../styles/pages/Home'

const Home = () => {
  return (
    <Container>
      <Header />
      <BannerSection>
        <Info>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div>
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
          </div>
        </Info>
        <Image>
          <img src={CoffeeBanner} alt='' />
        </Image>
      </BannerSection>
    </Container>
  )
}

export default Home
