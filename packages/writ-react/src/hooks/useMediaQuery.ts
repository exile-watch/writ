import {useMediaQuery as useMantineMediaQuery, UseMediaQueryOptions} from "@mantine/hooks";

const options: UseMediaQueryOptions = {
  getInitialValueInEffect: false,
};

function useMediaQuery() {
  const isMobile = useMantineMediaQuery('(max-width: 45em)', true, options);
  const isTablet = useMantineMediaQuery('(max-width: 64em)', true, options);
  const isLaptop = useMantineMediaQuery('(max-width: 90em)', true, options);

  return {isMobile, isLaptop, isTablet};
}

export {useMediaQuery}