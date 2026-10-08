import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('should be visible', () => {
    render(<HeroImage title="Visible Hero Banner" />);
    const heroElement = screen.getByText('Visible Hero Banner');
    expect(heroElement).toBeVisible();
  });

  test('should change background color when disabled state is active', () => {
    render(<HeroImage title="Disabled Hero Banner" disabled backgroundColor="#cccccc" />);
    const heroContainer = screen.getByText('Disabled Hero Banner').parentElement;

    expect(heroContainer).toHaveStyle('background-color: #cccccc');
    expect(heroContainer).toHaveStyle('cursor: not-allowed');
  });
});