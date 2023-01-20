import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;

			&::before,
			::after {
				box-sizing: inherit;
			}
		}

		html {
			font-size: 62.5%;
		}

		body {
			margin: 0;
			font-family: 'Roboto', sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			font-size: ${theme.sizes[16]};
			background-color: ${theme.colors['gray-100']};
		}

		html,
		body {
			height: 100%;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: '${theme.font.family.baloo}', cursive;
		}

		p {
			font-family: '${theme.font.family.roboto}', sans-serif;
		}

		button {
			outline: none;
			border: none;
		}

		code,
		pre {
			font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
				monospace;
		}
	`}
`
