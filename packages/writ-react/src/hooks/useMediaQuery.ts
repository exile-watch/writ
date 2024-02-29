import {useMediaQuery as useMantineMediaQuery, UseMediaQueryOptions} from "@mantine/hooks";

const options: UseMediaQueryOptions = {
  getInitialValueInEffect: false,
};

function useMediaQuery() {
  const isMobile = useMantineMediaQuery('(max-width: 45em)', true, options);
  const isLaptop = useMantineMediaQuery('(max-width: 88em)', true, options);

  return {isMobile, isLaptop};
}

export {useMediaQuery}