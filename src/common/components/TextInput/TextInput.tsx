import * as R from 'ramda';
import React, { ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';

import { TextInputTypes } from 'common/common.types';
import Typography from 'common/components/Typography/Typography';
import theme from 'theme/theme';
import Button from '../Button/Button';

type TextInputProps = {
  error?: string;
  width?: number;
  height?: number;
  isInvalidPassword?: boolean;
  onResetClick?: () => void;
  className?: string;
  placeholder?: string;
  withBorder?: boolean;
  borderColor?: string;
  value: string | number;
  withBottomLine?: boolean;
  label?: string | JSX.Element;
  type?: keyof typeof TextInputTypes;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  type,
  error,
  value,
  className,
  placeholder,
  label,
  width,
  height,
  isInvalidPassword = false,
  onResetClick,
  withBottomLine,
  onKeyDown,
  withBorder,
  borderColor,
  onChange,
  onInput,
}: TextInputProps) => (
  <Container
    width={width}
    height={height}
    className={className}
    withBorder={withBorder}
    borderColor={borderColor}>
    <Input
      type={type}
      value={value}
      id="text-input"
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onInput={onInput}
    />
    {!R.isNil(label) && <Label htmlFor="text-input">{label}</Label>}
    {withBottomLine && <BottomLine />}
    {!R.isNil(error) && (
      <ErrorContainer withBorder={withBorder}>
        <Typography text={error} fontSize="fz12" fontColor={theme.colors.black} />
      </ErrorContainer>
    )}
    {isInvalidPassword && onResetClick && (
      <ErrorContainer withBorder={withBorder}>
        <Typography
          text={'Incorrect current password.'}
          fontSize="fz12"
          fontColor={theme.colors.black}
        />
        <ResetPasswordContainer>
          <ResetPasswordButton
            label={
              <ResetPasswordText
                text="Reset Password"
                fontColor={theme.colors.black}
                fontSize="fz12"
              />
            }
            onClick={onResetClick}
          />
        </ResetPasswordContainer>
      </ErrorContainer>
    )}
  </Container>
);

const ResetPasswordText = styled(Typography)`
  text-decoration: underline;
`;

const ResetPasswordButton = styled(Button)`
  position: absolute;
  width: 100px;
  bottom: -3px;
`;

const Container = styled.div<{
  width?: number;
  height?: number;
  withBorder?: boolean;
  borderColor?: string;
}>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => (props.width ? props.width + 'px' : 'auto')};
  height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
  border: ${(props) => (props.withBorder ? '1px solid' : 'none')};
  border-color: ${(props) => (props.borderColor ? props.borderColor : theme.colors.black)};
  border-radius: ${(props) => (props.withBorder ? '10px' : 'none')};
`;

const Input = styled.input.attrs(() => ({
  required: true,
}))`
  padding: 0 0 0 5px;
  border: none;
  height: 100%;
  font-size: 18px;
  font-family: HKGrotesk-Regular, sans-serif;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.transparent};

  &:focus {
    outline: none;
  }

  &::selection {
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.black};
  }
`;

const Label = styled.label<{ value?: string }>`
  top: 50%;
  left: 10px;
  opacity: 50%;
  position: absolute;
  pointer-events: inherit;
  transition: 0.2s ease all;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.black};

  input:focus ~ &,
  input:not(:placeholder-shown).input:not(:focus) ~ .label,
  input:valid ~ & {
    top: 0;
    left: -15px;
    transform: scale(0.8);
  }
`;

const BottomLine = styled.div`
  bottom: 0;
  height: 1px;
  width: 100%;
  position: absolute;
  opacity: 0.5;
  background-color: ${(props) => props.theme.colors.black};
  background: linear-gradient(
    0.25turn,
    ${(props) => props.theme.colors.black},
    ${(props) => props.theme.colors.black},
    ${(props) => props.theme.colors.transparent}
  );
`;

const ErrorContainer = styled.div<{ withBorder?: boolean }>`
  bottom: 2px;
  position: absolute;
  display: flex;
  align-items: flex-end;
  ${(props) => props.withBorder && 'padding-left: 5px;'};
`;

const ResetPasswordContainer = styled.div`
  position: relative;
`;

export default TextInput;
