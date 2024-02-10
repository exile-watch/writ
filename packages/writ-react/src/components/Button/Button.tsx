import React from 'react';
import {Button as MantineButton, ButtonProps} from '@mantine/core'
import cx from 'classnames';

import styles from './Button.module.scss';

const Button = ({
  children,
  size = 'medium',
  className,
  variant = 'primary',
  disabled = false,
  ...props
}: ButtonProps) => (
  <MantineButton
    className={cx(
      'transition-style-scope px-3 py-1',
      styles.button,
      styles[size],
      styles[variant],
      className,
      {
        [styles.disabled]: disabled,
      }
    )}
    {...props}
  >
    {children}
  </MantineButton>
);

export {Button};
