import styled, { css } from 'styled-components'

export const Container = styled.div`
	${({ theme }) => css`
		display: flex;
		width: 100%;
		height: 100vh;
		flex-direction: column;
		align-items: center;
		padding: 0 ${theme.sizes[160]};
	`}
`

export const BannerSection = styled.section`
	${({ theme }) => css`
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		gap: ${theme.sizes[52]};
		margin: ${theme.sizes[94]} 0;
	`}
`

export const Info = styled.div`
	${({ theme }) => css`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		h1 {
			font-style: normal;
			font-weight: 800;
			font-size: 48px;
			line-height: 62px;
			color: ${theme.colors['gray-900']};
		}

		p {
			font-style: normal;
			font-weight: 400;
			font-size: 20px;
			line-height: 36px;
			color: ${theme.colors['gray-800']};
			font-stretch: 100;
			margin-top: ${theme.sizes[16]};
		}
	`}
`

export const CardListContent = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-row-gap: ${theme.sizes[20]};
		grid-column-gap: ${theme.sizes[40]};
		margin-top: ${theme.sizes[60]};
	`}
`

export const Image = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`}
`
export const CoffeeSection = styled.section`
	${({ theme }) => css`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin-top: ${theme.sizes[20]};
	`}
`

export const CoffeeList = styled.div`
	${({ theme }) => css`
		width: 100%;
		margin-top: ${theme.sizes[32]};
		display: grid;
		grid-template-columns: repeat(auto-fill, ${theme.sizes[256]});
		gap: ${theme.sizes[32]};
		place-content: center;
	`}
`
