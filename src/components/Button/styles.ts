import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps, IconButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'variant' | 'size'>
type IconButtonWrapperProps = Pick<IconButtonProps, 'notification' | 'variant'>

type LabelProps = {
	hasIcon: boolean
}

// DEFAULT BUTTON STYLES

const sizeModifiers = {
	small: (theme: DefaultTheme) => css`
		height: ${theme.sizes[32]};
		padding: ${theme.sizes[6]} ${theme.sizes[8]};
		border-radius: 6px;
	`,
	medium: (theme: DefaultTheme) => css`
		height: ${theme.sizes[46]};
		padding: ${theme.sizes[12]} ${theme.sizes[8]};
		border-radius: 6px;
	`,
}

const variantModifiers = {
	primary: (theme: DefaultTheme) => css`
		color: ${theme.colors.white};
		background-color: ${theme.colors['yellow-500']};

		&:hover {
			background-color: ${theme.colors['yellow-700']};
		}
	`,
	secondary: (theme: DefaultTheme) => css`
		color: ${theme.colors['gray-700']};
		background-color: ${theme.colors['gray-400']};

		&:hover {
			background-color: ${theme.colors['gray-500']};
		}
	`,
	tertiary: (theme: DefaultTheme) => css`
		color: ${theme.colors['gray-700']};
		background-color: ${theme.colors['gray-400']};

		&:hover {
			background-color: ${theme.colors['gray-500']};
		}
	`,
}

export const Wrapper = styled.button<WrapperProps>`
	${({ theme, variant, size }) => css`
		display: flex;
		place-items: center;
		cursor: pointer;

		${!!size && sizeModifiers[size](theme)};
		${!!variant && variantModifiers[variant](theme)};
	`}
`

export const Label = styled.span<LabelProps>`
	${({ theme, hasIcon }) => css`
		font-weight: 400;
		font-size: ${theme.sizes[12]};
		line-height: 1.9rem;
		text-transform: uppercase;

		${!!hasIcon &&
		css`
			margin-left: ${theme.sizes[4]};
		`};
	`}
`

// ICON BUTTON STYLES

const IconButtonVariantModifiers = {
	primary: (theme: DefaultTheme) => css`
		background-color: ${theme.colors['purple-700']};

		&:hover {
			background-color: ${theme.colors['purple-500']};
		}
	`,
	secondary: (theme: DefaultTheme) => css`
		background-color: ${theme.colors['yellow-100']};
	`,
	tertiary: (theme: DefaultTheme) => css`
		background-color: ${theme.colors['gray-400']};

		&:hover {
			background-color: ${theme.colors['gray-500']};
		}
	`,
}

export const IconButtonWrapper = styled.button<IconButtonWrapperProps>`
	${({ theme, variant }) => css`
		width: ${theme.sizes[38]};
		height: ${theme.sizes[38]};
		padding: ${theme.sizes[8]};
		border-radius: 6px;
		color: ${theme.colors.white};
		cursor: pointer;

		&[data-badge] {
			position: relative;
			&::after {
				content: attr(data-badge);
				position: absolute;
				background: ${theme.colors['yellow-700']};
				border-radius: 100%;
				display: block;
				padding: 0.3em;
				color: ${theme.colors.white};
				font-size: 12px;
				max-height: 20px;
				max-width: auto;
				right: -8px;
				top: -8px;
				font-family: ${theme.font.family.sans};
			}
		}

		${!!variant && IconButtonVariantModifiers[variant](theme)};
	`}
`
