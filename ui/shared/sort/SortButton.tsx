import { IconButton, chakra, Skeleton } from '@chakra-ui/react';
import React from 'react';

import IconSvg from 'ui/shared/IconSvg';

type Props = {
  onClick: () => void;
  isActive?: boolean;
  className?: string;
  isLoading?: boolean;
}

const SortButton = ({ onClick, className, isLoading }: Props) => {
  if (isLoading) {
    return <Skeleton className={ className } w="36px" h="32px" borderRadius="base"/>;
  }

  return (
    <IconButton
      icon={ <IconSvg name="arrows/up-down" boxSize={ 5 }/> }
      aria-label="sort"
      size="sm"
      variant="outline"
      minWidth="36px"
      onClick={ onClick }
      // isActive={ isActive }
      display="flex"
      className={ className }
      bg="transparent"
      borderColor="bronze.900"
      color="bronze.900"
      _dark={{
        bg: 'unset',
        borderColor: 'unset',
        color: 'unset',
      }}
    />
  );
};

export default chakra(SortButton);
