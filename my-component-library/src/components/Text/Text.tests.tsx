import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text Component', () => {
  test('should be visible', () => {
    render(<Text text="Visible Text Content" />);
    const textElement = screen.getByText('Visible Text Content');
    expect(textElement).toBeVisible();
  });

  test('should change background color when disabled state is active', () => {
    render(<Text text="Disabled Text Content" disabled backgroundColor="#f8f9fa" />);
    const textElement = screen.getByText('Disabled Text Content');

    expect(textElement).toHaveStyle('background-color: #cccccc');
    expect(textElement).toHaveStyle('cursor: not-allowed');
  });
});