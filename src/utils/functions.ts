import { TypographyFontSizes, TypographyFontWeight } from 'common/common.types';

import theme from 'theme/theme';

export const getFontSizes = (size: keyof typeof TypographyFontSizes) => theme.fontSizes[size];

export const getFontWeights = (weight: keyof typeof TypographyFontWeight) =>
  theme.fontWeight[weight];
