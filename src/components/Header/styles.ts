import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.sizes[32]} 0;

    div {
      display: flex;
      place-items: center;

      & button + button {
        margin-left: ${theme.sizes[12]};
      }
    }
  `}
`
