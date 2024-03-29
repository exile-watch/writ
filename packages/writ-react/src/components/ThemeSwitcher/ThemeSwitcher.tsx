import React from 'react';
import { useCookies } from 'react-cookie';

import {SunIcon, MoonIcon} from '@exile-watch/writ-icons';
import { Themes } from 'src/types';

import styles from './ThemeSwitcher.module.scss';

const cookieOptions = {
  path: '/', // Match all paths
  expires: new Date(2038, 0, 1), //https://en.wikipedia.org/wiki/Year_2038_problem
};

const ThemeSwitcher = () => {
  const [_, setCookie] = useCookies();

  const handleThemeSwitch = (theme: Themes) => {
    const html = document.getElementsByTagName('html')[0];
    switch (theme) {
      case 'dark':
        html.classList.replace('light', 'dark');
        break;
      case 'light':
        html.classList.replace('dark', 'light');
        break;
      default:
        break;
    }
    setCookie('theme', theme, cookieOptions);
  };

  return (
    <div className={styles.container}>
      <MoonIcon className="mr-2" onClick={() => handleThemeSwitch('dark')} />
      <SunIcon onClick={() => handleThemeSwitch('light')} />
    </div>
  );
};

export {ThemeSwitcher};
