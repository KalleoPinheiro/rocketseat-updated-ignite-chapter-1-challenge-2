import { ButtonProps } from '..'

import * as S from '../styles'

export const Button = ({
  label = '',
  size = 'medium',
  variant = 'primary',
  icon = null,
  ...rest
}: ButtonProps) => (
  <S.Wrapper size={size} variant={variant} {...rest}>
    {!!icon && icon}
    {!!label && <S.Label hasIcon={!!icon}>{label}</S.Label>}
  </S.Wrapper>
)
