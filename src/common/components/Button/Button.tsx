import React from 'react';
import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';

import theme from 'theme/theme';

type ButtonProps = {
  width?: number;
  height?: number;
  className?: string;
  isTextBold?: boolean;
  bgColor?: string;
  isLoading?: boolean;
  fontSize?: number;
  disabled?: boolean;
  labelColor?: string;
  borderColor?: string;
  borderRadius?: number;
  label: string | JSX.Element;
  onClick: () => void;
};

const Button = ({
  label,
  width,
  height,
  bgColor,
  fontSize,
  disabled,
  isLoading,
  className,
  labelColor,
  borderColor,
  borderRadius,
  isTextBold = true,
  onClick,
}: ButtonProps) => {
  return (
    <Container
      type="submit"
      width={width}
      height={height}
      bgColor={bgColor}
      fontSize={fontSize}
      disabled={disabled}
      className={className}
      isTextBold={isTextBold}
      labelColor={labelColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      onClick={onClick}>
      {isLoading ? (
        <Oval
          color={theme.colors.yellow}
          height={height && height * 0.5}
          secondaryColor={theme.colors.yellow50}
        />
      ) : (
        label
      )}
    </Container>
  );
};

const Container = styled.button<{
  width?: number;
  height?: number;
  bgColor?: string;
  fontSize?: number;
  labelColor?: string;
  isTextBold: boolean;
  borderColor?: string;
  borderRadius?: number;
}>`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: HKGrotesk-Regular, sans-serif;
  width: ${(props) => (props.width ? props.width + 'px' : 'auto')};
  height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 0)}px;
  transition: all 0.2s;
  color: ${(props) => (props.labelColor ? props.labelColor : props.theme.colors.white)};
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.colors.transparent)};
  font-weight: ${(props) => (props.isTextBold ? 'bold' : 'normal')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : 'auto')};
  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
  }
  ${(props) => props.borderColor && `border: 3px solid ${props.borderColor};`};

  &:disabled {
    opacity: 0.8;
    font-weight: normal;

    &:hover {
      background-color: transparent;
    }
  }
`;

export default Button;
