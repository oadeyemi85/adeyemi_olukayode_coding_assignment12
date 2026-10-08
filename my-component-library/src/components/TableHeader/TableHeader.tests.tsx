import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

describe('TableHeader Component', () => {
  test('should be visible', () => {
    render(
      <table>
        <TableHeader data-testid="table-header">
          <tr>
            <th>Header Content</th>
          </tr>
        </TableHeader>
      </table>
    );
    const headerElement = screen.getByTestId('table-header');
    expect(headerElement).toBeVisible();
  });

  test('should change background color when disabled state is active', () => {
    render(
      <table>
        <TableHeader data-testid="table-header" disabled backgroundColor="#f4f4f4">
          <tr>
            <th>Header Content</th>
          </tr>
        </TableHeader>
      </table>
    );
    const headerElement = screen.getByTestId('table-header');

    expect(headerElement).toHaveStyle('background-color: #cccccc');
    expect(headerElement).toHaveStyle('cursor: not-allowed');
  });
});