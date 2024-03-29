import styled, { css } from 'styled-components'

import { CardProps } from '.'

type WrapperProps = Pick<CardProps, 'color'>

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, color }) => css`
		display: flex;
		align-items: center;

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 32px;
			height: 32px;
			border-radius: 50%;
			padding: 8px;
			background-color: ${theme.colors[color]};
		}

		span {
			margin-left: ${theme.sizes[12]};
		}
	`}
`
