import React from 'react';
import styled from 'styled-components';

import { TypographyFontSizes, TypographyFontWeight } from 'common/common.types';
import theme from 'theme/theme';
import { getFontSizes, getFontWeights } from 'utils/functions';

type TypographyProps = {
  text: string | JSX.Element;
  fontColor?: string;
  className?: string;
  fontSize?: keyof typeof TypographyFontSizes;
  fontWeight?: keyof typeof TypographyFontWeight;
  letterSpacing?: string;
};

const Typography = ({
  text,
  className,
  fontColor = theme.colors.black,
  fontSize = 'fz18',
  fontWeight = 'regular',
  letterSpacing = 'auto',
}: TypographyProps) => {
  return (
    <Container
      fontSize={fontSize}
      fontColor={fontColor}
      fontWeight={fontWeight}
      className={className}
      letterSpacing={letterSpacing}>
      {text}
    </Container>
  );
};

const Container = styled.p<{
  fontColor: string;
  fontSize: keyof typeof TypographyFontSizes;
  fontWeight: keyof typeof TypographyFontWeight;
  letterSpacing: string;
}>`
  color: ${(props) => props.fontColor};
  font-size: ${(props) => getFontSizes(props.fontSize)}px;
  font-weight: ${(props) => getFontWeights(props.fontWeight)};
  letter-spacing: ${(props) => props.letterSpacing};
`;

export default Typography;
