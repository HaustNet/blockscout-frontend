import { TagLabel, Tooltip } from '@chakra-ui/react';
import React from 'react';

import Tag from 'ui/shared/chakra/Tag';
import type { IconName } from 'ui/shared/IconSvg';
import IconSvg from 'ui/shared/IconSvg';

export type StatusTagType = 'ok' | 'error' | 'pending';

export interface Props {
  type: 'ok' | 'error' | 'pending';
  text: string;
  errorText?: string | null;
  isLoading?: boolean;
}

const StatusTag = ({ type, text, errorText, isLoading }: Props) => {
  let icon: IconName;
  let bg;
  let color;
  let _dark;

  switch (type) {
    case 'ok':
      icon = 'status/success';
      bg = 'lime.700';
      color = 'bronze.900';
      _dark = {
        bg: 'gray.500',
        color: 'lime.700',
      };
      break;
    case 'error':
      icon = 'status/error';
      bg = 'red.100';
      color = 'bronze.900';
      _dark = {
        bg: 'gray.500',
        color: 'red.100',
      };
      break;
    case 'pending':
      icon = 'status/pending';
      bg = 'blue.400';
      color = 'bronze.900';
      _dark = {
        bg: 'gray.500',
        color: 'blue.400',
      };
      break;
  }

  return (
    <Tooltip label={ errorText }>
      <Tag color={ color } bg={ bg } border="1px solid" borderColor="divider_dark" display="flex" _dark={ _dark }isLoading={ isLoading } >
        <IconSvg boxSize={ 2.5 } name={ icon } mr={ 2 } flexShrink={ 0 }/>
        <TagLabel display="block">{ text }</TagLabel>
      </Tag>
    </Tooltip>
  );
};

export default StatusTag;
