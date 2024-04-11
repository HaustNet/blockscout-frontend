import { Box, IconButton, Popover, PopoverBody, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import IconSvg from 'ui/shared/IconSvg';

import SettingsColorTheme from './SettingsColorTheme';
import SettingsIdentIcon from './SettingsIdentIcon';

const Settings = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Popover placement="bottom-start" trigger="click" isOpen={ isOpen } onClose={ onClose }>
      <PopoverTrigger>
        <IconButton
          variant="simple"
          color="bronze.900"
          aria-label="User settings"
          icon={ <IconSvg name="gear_slim" boxSize={ 5 }/> }
          p="1px"
          boxSize={ 5 }
          onClick={ onToggle }
          _dark={{ color: 'white' }}
        />
      </PopoverTrigger>
      <PopoverContent
        overflowY="hidden" w="auto"
        fontSize="sm"
        border="1px solid"
        borderColor="bronze.900"
        bg="lime.50"
        _dark={{ border: 'unset', bg: 'gray.800' }}
      >
        <PopoverBody boxShadow="2xl" p={ 4 }>
          <SettingsColorTheme/>
          <Box borderColor="divider" borderWidth="1px" my={ 3 }/>
          <SettingsIdentIcon/>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default React.memo(Settings);
