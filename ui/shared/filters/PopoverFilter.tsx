import type { PopoverContentProps } from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import FilterButton from 'ui/shared/filters/FilterButton';

interface Props {
  appliedFiltersNum?: number;
  isActive?: boolean;
  children: React.ReactNode;
  contentProps?: PopoverContentProps;
  isLoading?: boolean;
}

const PopoverFilter = ({ appliedFiltersNum, children, contentProps, isActive, isLoading }: Props) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Popover isOpen={ isOpen } onClose={ onClose } placement="bottom-start" isLazy>
      <PopoverTrigger>
        <FilterButton
          isActive={ isOpen || isActive || Number(appliedFiltersNum) > 0 }
          onClick={ onToggle }
          appliedFiltersNum={ appliedFiltersNum }
          isLoading={ isLoading }
        />
      </PopoverTrigger>
      <PopoverContent { ...contentProps }>
        <PopoverBody
          px={ 4 }
          py={ 6 }
          display="flex"
          flexDir="column"
          rowGap={ 5 }
          border="1px solid"
          borderColor="divider_dark"
          borderRadius="lg"
          bg={ useColorModeValue('lime.100', null) }
        >
          { children }
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default React.memo(PopoverFilter);
