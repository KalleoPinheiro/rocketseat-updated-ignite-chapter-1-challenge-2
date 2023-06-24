import styled, { css } from 'styled-components'

export const Container = styled.div`
	${({ theme }) => css`
		width: ${theme.sizes[256]};
		height: auto;
		display: flex;
		flex-direction: column;
		border-radius: 0 36px 0 0;
		background: ${theme.colors['gray-200']};
		padding: 0 ${theme.sizes[16]} ${theme.sizes[16]} ${theme.sizes[16]};
	`}
`

export const Image = styled.div`
	${({ theme }) => css`
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;

		img {
			position: relative;
			top: -20px;
			border-radius: 50%;
			width: ${theme.sizes[120]};
			height: ${theme.sizes[120]};
		}
	`}
`

export const Label = styled.span`
	${({ theme }) => css`
		width: min-content;
		display: flex;
		align-self: center;
		border-radius: 100px;
		background-color: ${theme.colors['yellow-100']};
		color: ${theme.colors['yellow-700']};
		font-size: ${theme.sizes[10]};
		font-weight: 700;
		line-height: 130%;
		text-transform: uppercase;
		padding: ${theme.sizes[4]} ${theme.sizes[8]};
	`}
`

export const Title = styled.h3`
	${({ theme }) => css`
		margin-top: ${theme.sizes[20]};
		font-size: ${theme.sizes[20]};
		font-weight: 700;
		line-height: 130%;
		color: ${theme.colors['gray-800']};
		text-align: center;
	`}
`

export const Description = styled.p`
	${({ theme }) => css`
		font-size: ${theme.sizes[14]};
		line-height: 130%;
		color: ${theme.colors['gray-600']};
		margin-top: ${theme.sizes[8]};
		text-align: center;
	`}
`

export const Actions = styled.div`
	${({ theme }) => css`
		margin-top: ${theme.sizes[32]};
		display: flex;
		justify-content: space-between;
		align-items: center;
	`}
`

export const Sale = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: ${theme.sizes[8]};
	`}
`

export const Price = styled.p`
	${({ theme }) => css`
		font-family: '${theme.font.family.sans}';
		font-size: ${theme.sizes[12]};
		line-height: 130%;
		color: ${theme.colors['gray-700']};
		text-align: right;

		span {
			font-family: '${theme.font.family.cursive}';
			font-size: ${theme.sizes[20]};
			font-weight: 800;
		}
	`}
`

export const Counter = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${theme.colors['gray-400']};
		height: ${theme.sizes[38]};
		border-radius: 6px;

		span {
			margin: 0 ${theme.sizes[10]};
		}
	`}
`
