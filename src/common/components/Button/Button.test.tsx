import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme/theme';

import Button from './Button';

describe('Button component tests', () => {
  const mockedProps = {
    label: 'Test',
    onClick: jest.fn(),
  };

  it('Render Button component', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button label={mockedProps.label} onClick={mockedProps.onClick} />,
      </ThemeProvider>,
    );

    const buttonElement = getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });
});
