import { IconButtonProps } from '..'

import * as S from '../styles'

export const IconButton = ({
  notification = 0,
  variant = 'primary',
  icon = null,
  ...rest
}: IconButtonProps) => (
  <S.IconButtonWrapper
    variant={variant}
    data-badge={notification || null}
    {...rest}
  >
    {!!icon && icon}
  </S.IconButtonWrapper>
)
