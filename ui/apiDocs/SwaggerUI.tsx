/* eslint-disable @typescript-eslint/naming-convention */
const SwaggerUIReact = dynamic(() => import('swagger-ui-react'), {
  loading: () => <ContentLoader/>,
  ssr: false,
});

import type { SystemStyleObject } from '@chakra-ui/react';
import { Box, useColorModeValue, useToken } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';

import config from 'configs/app';
import ContentLoader from 'ui/shared/ContentLoader';

import 'swagger-ui-react/swagger-ui.css';

const feature = config.features.restApiDocs;

const DEFAULT_SERVER = 'blockscout.com/poa/core';

const NeverShowInfoPlugin = () => {
  return {
    components: {
      SchemesContainer: () => null,
      ServersContainer: () => null,
      InfoContainer: () => null,
    },
  };
};

const SwaggerUI = () => {
  const mainColor = useColorModeValue('bronze.900', 'whiteAlpha.800');
  const borderColor = useColorModeValue('divider_dark', 'divider');
  const mainBgColor = useColorModeValue('lime.100', 'whiteAlpha.200');

  const swaggerStyle: SystemStyleObject = {
    '.swagger-ui .scheme-container, .opblock-tag': {
      display: 'none',
    },
    '.swagger-ui': {
      color: mainColor,
    },
    '.swagger-ui .opblock-summary-control:focus': {
      outline: 'none',
    },
    // eslint-disable-next-line max-len
    '.swagger-ui .opblock .opblock-summary-path, .swagger-ui .opblock .opblock-summary-description, .swagger-ui div, .swagger-ui p, .swagger-ui h5, .swagger-ui .response-col_links, .swagger-ui h4, .swagger-ui table thead tr th, .swagger-ui table thead tr td, .swagger-ui .parameter__name, .swagger-ui .parameter__type, .swagger-ui .response-col_status, .swagger-ui .tab li, .swagger-ui .opblock .opblock-section-header h4': {
      color: 'unset',
    },
    '.swagger-ui input': {
      color: 'blackAlpha.800',
    },
    // '.swagger-ui .opblock .opblock-section-header': {
    //   background: useColorModeValue('whiteAlpha.800', 'blackAlpha.800'),
    // },
    '.swagger-ui .response-col_description__inner p, .swagger-ui .parameters-col_description p': {
      margin: 0,
    },
    '.swagger-ui .wrapper': {
      padding: 0,
    },
    '.swagger-ui .prop-type': {
      color: useColorModeValue('blue.600', 'blue.400'),
    },
    // '.swagger-ui .btn.try-out__btn': {
    //   borderColor: useToken('colors', 'link'),
    //   color: useToken('colors', 'link'),
    //   borderRadius: 'sm',
    // },
    '.swagger-ui .btn.try-out__btn:hover': {
      boxShadow: 'none',
      borderColor: useToken('colors', 'link_hovered'),
      color: useToken('colors', 'link_hovered'),
    },
    '.swagger-ui .btn.try-out__btn.cancel': {
      borderColor: useToken('colors', 'error'),
      color: useToken('colors', 'error'),
    },
    '.swagger-ui .btn.try-out__btn.cancel:hover': {
      borderColor: useColorModeValue('red.600', 'red.500'),
      color: useColorModeValue('red.500', 'red.400'),
    },

    // MODELS
    '.swagger-ui section.models': {
      borderColor: borderColor,
    },
    '.swagger-ui section.models h4': {
      color: mainColor,
    },
    '.swagger-ui section.models .model-container': {
      bgColor: mainBgColor,
    },
    '.swagger-ui .model-title': {
      wordBreak: 'break-all',
      color: mainColor,
    },
    '.swagger-ui .model': {
      color: mainColor,
    },
    '.swagger-ui .model-box-control:focus': {
      outline: 'none',
    },
    '.swagger-ui .model-toggle': {
      bgColor: useColorModeValue('transparent', 'whiteAlpha.700'),
      borderRadius: 'sm',
    },
    '.swagger-ui .model .property.primitive': {
      color: useToken('colors', 'text_secondary'),
      wordBreak: 'break-all',
    },
    // CUSTOM
    '.swagger-ui .opblock.opblock-get': {
      bg: 'lime.100',
      borderRadius: 'lg',
      borderColor: 'divider_dark',
      _dark: {
        bg: 'unset',
      },
    },
    '.swagger-ui .opblock.opblock-post': {
      bg: 'lime.100',
      borderRadius: 'lg',
      borderColor: 'divider_dark',
      _dark: {
        bg: 'unset',
      },
    },
    '.swagger-ui .opblock.opblock-get .opblock-summary-method': {
      bg: 'bronzeAlpha.100',
      color: 'bronze.900',
      px: 2,
      py: 0,
      minWidth: 'fit-content',
      borderRadius: 'sm',
      _dark: {
        bg: 'unset',
        color: 'unset',
      },
    },
    '.swagger-ui .opblock.opblock-post .opblock-summary-method': {
      bg: 'bronzeAlpha.100',
      color: 'bronze.900',
      px: 2,
      py: 0,
      minWidth: 'fit-content',
      borderRadius: 'sm',
      _dark: {
        bg: 'unset',
        color: 'unset',
      },
    },
    '.swagger-ui .opblock .opblock-summary': {
      p: 4,
    },
    '.swagger-ui .opblock.is-open .opblock-summary': {
      borderColor: 'divider',
    },
    '.swagger-ui .opblock .opblock-section-header': {
      bg: 'bronzeAlpha.50',
      _dark: {
        bg: 'unset',
      },
    },
    '.swagger-ui .opblock-control-arrow svg': {
      fill: 'bronze.900',
      _dark: {
        fill: 'unset',
      },
    },
    '.swagger-ui .opblock.opblock-get .tab-header .tab-item.active h4 span::after': {
      display: 'none',
    },
    '.swagger-ui .btn.try-out__btn': {
      borderRadius: '2xl',
      py: 2,
      bg: 'lime.700',
      borderColor: 'bronze.900',
      color: 'bronze.900',
      dark_: {
        bg: 'red',
        borderColor: 'red',
        color: 'red',
      },
    },
    '.swagger-ui .parameters-col_description input': {
      bg: 'bronzeAlpha.100',
      color: 'bronze.900',
      borderRadius: 'sm',
      _dark: {
        bg: 'unset',
        color: 'unset',
      },
    },
    '.swagger-ui .opblock-body pre.microlight': {
      bg: 'black !important',
      borderRadius: 'md',
      _dark: { bg: 'unset' },
    },
    '.swagger-ui .opblock .opblock-summary .view-line-link.copy-to-clipboard': {
      bg: 'bronze.900',
      _dark: {
        bg: 'unset',
      },
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reqInterceptor = React.useCallback((req: any) => {
    if (!req.loadSpec) {
      const newUrl = new URL(req.url.replace(DEFAULT_SERVER, config.api.host));

      newUrl.protocol = config.api.protocol + ':';

      if (config.api.port) {
        newUrl.port = config.api.port;
      }

      req.url = newUrl.toString();
    }
    return req;
  }, []);

  if (!feature.isEnabled) {
    return null;
  }

  return (
    <Box sx={ swaggerStyle }>
      <SwaggerUIReact
        url={ feature.specUrl }
        plugins={ [ NeverShowInfoPlugin ] }
        requestInterceptor={ reqInterceptor }
      />
    </Box>
  );
};

export default SwaggerUI;
