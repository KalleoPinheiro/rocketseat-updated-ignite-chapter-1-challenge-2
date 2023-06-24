import 'styled-components'

import { DefaultTheme } from '../styles/themes'

type Theme = typeof DefaultTheme

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
