import type { As } from '@chakra-ui/react';
import { Skeleton, Box, Button, Circle, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import IconSvg from 'ui/shared/IconSvg';

const FilterIcon = <IconSvg name="filter" boxSize={ 5 } mr={{ base: 0, lg: 2 }}/>;

interface Props {
  isActive?: boolean;
  isLoading?: boolean;
  appliedFiltersNum?: number;
  onClick: () => void;
  as?: As;
}

const FilterButton = ({ isActive, isLoading, appliedFiltersNum, onClick, as }: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const badgeColor = useColorModeValue('white', 'black');
  const badgeBgColor = useColorModeValue('blue.700', 'gray.50');
  const borderColor = useColorModeValue('divider_dark', null);
  const color = useColorModeValue('bronze.900', null);

  if (isLoading) {
    return <Skeleton w={{ base: 9, lg: '78px' }} h={ 8 } borderRadius="base" flexShrink={ 0 }/>;
  }

  return (
    <Button
      ref={ ref }
      rightIcon={ appliedFiltersNum ? <Circle bg={ badgeBgColor } size={ 5 } color={ badgeColor }>{ appliedFiltersNum }</Circle> : undefined }
      size="sm"
      fontWeight="500"
      variant="outline"
      colorScheme="gray-dark"
      onClick={ onClick }
      isActive={ isActive }
      px={ 1.5 }
      flexShrink={ 0 }
      as={ as }
      borderColor={ borderColor }
      border="1px solid"
      color={ color }
      _active={{ color: color }}
      _hover={{ color: color }}
    >
      { FilterIcon }
      <Box display={{ base: 'none', lg: 'block' }}>Filter</Box>
    </Button>
  );
};

export default React.forwardRef(FilterButton);
