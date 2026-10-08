import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label Component', () => {
  test('should be visible', () => {
    render(<Label text="Visible Label" />);
    const labelElement = screen.getByText('Visible Label');
    expect(labelElement).toBeVisible();
  });

  test('should change background color when disabled state is active', () => {
    render(<Label text="Disabled Label" disabled backgroundColor="#e0e0e0" />);
    const labelElement = screen.getByText('Disabled Label');

    expect(labelElement).toHaveStyle('background-color: #cccccc');
    expect(labelElement).toHaveStyle('cursor: not-allowed');
  });
});