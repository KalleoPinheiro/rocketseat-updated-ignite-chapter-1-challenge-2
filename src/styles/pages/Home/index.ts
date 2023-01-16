import styled, { css } from 'styled-components'

export const BannerSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: ${theme.sizes[52]};
    place-items: center;
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    width: 100%;

    h1 {
      font-family: ${theme.font.family.baloo};
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 62px;
      color: #272221;
    }

    p {
      font-family: ${theme.font.family.roboto};
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 36px;
      color: #403937;
      font-stretch: 100;
      margin-top: ${theme.sizes[16]};
    }

    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
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
