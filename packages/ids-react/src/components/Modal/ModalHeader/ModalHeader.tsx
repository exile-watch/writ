import React, { ReactNode } from 'react';
import cx from 'classnames';

import { Heading } from '#components';

import styles from './ModalHeader.module.scss';

type ModalHeaderProps = {
  children: ReactNode;
};

const ModalHeader = ({ children }: ModalHeaderProps) => (
  <Heading className={cx('mb-3 pb-3', styles.header)}>{children}</Heading>
);

export default ModalHeader;
