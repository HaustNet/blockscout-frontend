export const BODY_TYPEFACE = 'var(--font-clash-display), Arial, sans-serif';
export const HEADING_TYPEFACE = 'var(--font-clash-display), Arial, sans-serif';

const typography = {
  fonts: {
    heading: HEADING_TYPEFACE,
    body: BODY_TYPEFACE,
  },
  textStyles: {
    h2: {
      fontSize: [ '32px' ],
      fontWeight: '500',
      lineHeight: '40px',
      fontFamily: 'heading',
    },
    h3: {
      fontSize: '24px',
      fontWeight: '500',
      lineHeight: '32px',
      fontFamily: 'heading',
    },
  },
};

export default typography;
