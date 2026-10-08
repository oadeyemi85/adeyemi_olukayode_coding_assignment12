import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('should be visible', () => {
    render(<Card title="Visible Card" content="Content inside card" />);
    const cardTitle = screen.getByText('Visible Card');
    expect(cardTitle).toBeVisible();
  });

  test('should change background color when disabled state is active', () => {
    render(<Card title="Disabled Card" disabled backgroundColor="#ffffff" />);
    const cardWrapper = screen.getByText('Disabled Card').closest('div')?.parentElement;

    expect(cardWrapper).toHaveStyle('background-color: #cccccc');
    expect(cardWrapper).toHaveStyle('cursor: not-allowed');
  });
});