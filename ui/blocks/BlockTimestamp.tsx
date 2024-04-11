import { Skeleton, chakra, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import useTimeAgoIncrement from 'lib/hooks/useTimeAgoIncrement';

interface Props {
  ts: string;
  isEnabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

const BlockTimestamp = ({ ts, isEnabled, isLoading, className }: Props) => {
  const timeAgo = useTimeAgoIncrement(ts, isEnabled);
  const color = useColorModeValue('bronze.900', 'text_secondary');

  return (
    <Skeleton isLoaded={ !isLoading } color={ color } fontWeight={ 400 } className={ className } display="inline-block">
      <span>{ timeAgo }</span>
    </Skeleton>
  );
};

export default React.memo(chakra(BlockTimestamp));
