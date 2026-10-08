import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img Component', () => {
  test('should be visible', () => {
    render(<Img src="https://via.placeholder.com/300x200" alt="Test Image" />);
    const imageElement = screen.getByAltText('Test Image');
    expect(imageElement).toBeVisible();
  });

  test('should change background color when disabled state is active', () => {
    render(<Img src="https://via.placeholder.com/300x200" alt="Test Image" disabled backgroundColor="#cccccc" />);
    const containerElement = screen.getByAltText('Test Image').parentElement;

    expect(containerElement).toHaveStyle('background-color: #cccccc');
    expect(containerElement).toHaveStyle('cursor: not-allowed');
  });
});