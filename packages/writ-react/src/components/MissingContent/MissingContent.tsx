import React from 'react';
import cx from 'classnames';

import {RedirectIcon} from '@exile-watch/writ-icons';
import styles from './MissingContent.module.scss';
import {Group, Stack, Text, Anchor} from "@mantine/core";

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
  const issueSrc = `https://github.com/exile-watch/splinters/issues/new?template=invalid-ability-data.md&labels=invalid%2Fmissing+data&title=${issueTitle}`;
  const target = '_blank';
  const rel = 'noreferrer noopener';

  return (
    <Stack className={cx(styles.missingContent, className)} gap={0}>
      <Text>
        There is missing <i>{missingContentType}</i> section for this ability.
      </Text>
      <Group>
        <Text>Before reporting an issue, </Text>
        <Anchor
          href={redirect}
          target={target}
          rel={rel}
        >
          check if it already exists <RedirectIcon />
        </Anchor>
      </Group>
      <Group>
        <Text>If you can't find desired issue then</Text>
        <a href={issueSrc} target={target} rel={rel}>
          <span>create a new issue</span> <RedirectIcon />
        </a>
      </Group>
    </Stack>
  );
};

export {MissingContent};
