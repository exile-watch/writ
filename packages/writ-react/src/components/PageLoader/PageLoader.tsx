import React from 'react';

import { Loader } from '../Loader/Loader';

import styles from './PageLoader.module.scss';

const PageLoader = () => <Loader className={styles.pageLoader} size={70} thickness={4} />;

export { PageLoader, Loader };
