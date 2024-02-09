import React from 'react';
import cx from 'classnames';

import {RedirectIcon} from '@exile-watch/writ-icons/src';

import styles from './MissingContent.module.scss';

type MissingContentProps = {
  abilityName?: string;
  missingContentType: 'Video Source' | 'About' | 'Player Interaction tip';
  className?: string;
  issueTitle?: string;
  redirect?: string;
};

const MissingContent = ({
  // abilityName = '',
  missingContentType,
  className,
  issueTitle,
  redirect
}: MissingContentProps) => {
  // const redirect = `https://github.com/sbsrnt/poe-watch/issues?q=${startCase(boss)} > ${abilityName}`
  // const issueTitle = map
  //   ? `[Invalid Ability Data][Missing ${missingContentType}]: ${startCase(map)} > ${startCase(
  //       boss
  //     )} > ${abilityName}`
  //   : `[Invalid Ability Data][Missing ${missingContentType}]: ${startCase(boss)} > ${abilityName}`;
  const issueSrc = `https://github.com/sbsrnt/poe-watch/issues/new?template=invalid-ability-data.md&labels=invalid%2Fmissing+data&title=${issueTitle}`;
  const target = '_blank';
  const rel = 'noreferrer noopener';

  return (
    <div className={cx(styles.missingContent, className)}>
      <p>
        There is missing <i>{missingContentType}</i> section for this ability.
      </p>
      <p>
        Before reporting an issue,{' '}
        <a
          href={redirect}
          target={target}
          rel={rel}
        >
          <span>check if it already exists</span> <RedirectIcon />
        </a>
      </p>
      <p>
        If you can't find desired issue then{' '}
        <a href={issueSrc} target={target} rel={rel}>
          <span>create a new issue</span> <RedirectIcon />
        </a>
      </p>
    </div>
  );
};

export {MissingContent};
