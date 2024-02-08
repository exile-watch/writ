import React from 'react';

import { Loader } from '../index';

import styles from './PageLoader.module.scss';

const PageLoader = () => <Loader className={styles.pageLoader} size={70} thickness={4} />;

export { PageLoader };
