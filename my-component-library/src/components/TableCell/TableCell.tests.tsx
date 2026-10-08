import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

describe('TableCell Component', () => {
  test('should be visible', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell text="Visible Cell" />
          </tr>
        </tbody>
      </table>
    );
    const cellElement = screen.getByText('Visible Cell');
    expect(cellElement).toBeVisible();
  });

  test('should change background color when disabled state is active', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell text="Disabled Cell" disabled backgroundColor="#ffffff" />
          </tr>
        </tbody>
      </table>
    );
    const cellElement = screen.getByText('Disabled Cell');

    expect(cellElement).toHaveStyle('background-color: #cccccc');
    expect(cellElement).toHaveStyle('cursor: not-allowed');
  });
});