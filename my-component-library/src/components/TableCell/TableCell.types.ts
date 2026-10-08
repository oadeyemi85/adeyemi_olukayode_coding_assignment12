import { ReactNode } from 'react';

export interface TableCellProps {
  text?: string;
  children?: ReactNode;
  isHeader?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
}