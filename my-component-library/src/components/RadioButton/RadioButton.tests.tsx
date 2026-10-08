import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  test('should be visible', () => {
    render(<RadioButton label="Visible Radio Option" />);
    const radioElement = screen.getByRole('radio');
    expect(radioElement).toBeVisible();
  });

  test('should change background color when disabled state is active', () => {
    render(<RadioButton label="Disabled Radio Option" disabled backgroundColor="#f8f9fa" />);
    const labelWrapper = screen.getByText('Disabled Radio Option').closest('label');

    expect(labelWrapper).toHaveStyle('background-color: #cccccc');
    expect(labelWrapper).toHaveStyle('cursor: not-allowed');
  });
});