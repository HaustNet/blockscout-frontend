import React from 'react';

import type { TransactionType } from 'types/api/transaction';

import Tag from 'ui/shared/chakra/Tag';

export interface Props {
  types: Array<TransactionType>;
  isLoading?: boolean;
}

const TYPES_ORDER: Array<TransactionType> = [
  'blob_transaction',
  'rootstock_remasc',
  'rootstock_bridge',
  'token_creation',
  'contract_creation',
  'token_transfer',
  'contract_call',
  'coin_transfer',
];

const TxType = ({ types, isLoading }: Props) => {
  const typeToShow = types.sort((t1, t2) => TYPES_ORDER.indexOf(t1) - TYPES_ORDER.indexOf(t2))[0];

  let label;
  let bgColor;
  let color;
  let _dark;

  switch (typeToShow) {
    case 'contract_call':
      label = 'Contract call';
      bgColor = 'bronzeAlpha.250';
      color = 'bronze.900';
      _dark = {
        bgColor: 'gray.700',
        color: 'blue.500',
      };
      break;
    case 'blob_transaction':
      label = 'Blob txn';
      bgColor = 'yellow.200';
      color = 'bronze.900';
      _dark = {
        bgColor: 'gray.700',
        color: 'yellow.300',
      };
      break;
    case 'contract_creation':
      label = 'Contract creation';
      bgColor = 'bronzeAlpha.100';
      color = 'bronze.900';
      _dark = {
        bgColor: 'gray.700',
        color: 'blue.300',
      };
      break;
    case 'token_transfer':
      label = 'Token transfer';
      bgColor = 'orange.300';
      color = 'bronze.900';
      _dark = {
        bgColor: 'gray.700',
        color: 'orange',
      };
      break;
    case 'token_creation':
      label = 'Token creation';
      bgColor = 'orange.300';
      color = 'bronze.900';
      _dark = {
        bgColor: 'gray.700',
        color: 'orange',
      };
      break;
    case 'coin_transfer':
      label = 'Coin transfer';
      bgColor = 'limeAlpha.100';
      color = 'bronze.900';
      _dark = {
        bgColor: 'gray.700',
        color: 'orange',
      };
      break;
    case 'rootstock_remasc':
      label = 'REMASC';
      bgColor = 'blue.300';
      color = 'bronze.900';
      _dark = {
        bgColor: 'gray.700',
        color: 'blue.300',
      };
      break;
    case 'rootstock_bridge':
      label = 'Bridge';
      bgColor = 'blue.300';
      color = 'bronze.900';
      _dark = {
        bgColor: 'gray.700',
        color: 'blue.300',
      };
      break;
    default:
      label = 'Transaction';
      bgColor = 'purple.300';
      color = 'bronze.900';
      _dark = {
        bgColor: 'gray.700',
        color: 'purple.300',
      };
  }

  return (
    <Tag bg={ bgColor } color={ color } _dark={ _dark } isLoading={ isLoading }>
      { label }
    </Tag>
  );
};

export default TxType;
