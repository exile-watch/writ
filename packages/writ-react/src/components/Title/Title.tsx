import React from 'react';
import cx from 'classnames';
import {Title as MantineTitle, TitleProps} from '@mantine/core'

import styles from './Heading.module.scss';

const Title = ({ children, ...props}: TitleProps) => {
  return (
    <MantineTitle {...props}>
      {children}
    </MantineTitle>
  );
};

export {Title};
