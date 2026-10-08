import { ReactNode } from 'react';

export interface TableProps {
  /** Table content (Header, Rows, Footer) */
  children?: ReactNode;
  /** Controls disabled state */
  disabled?: boolean;
  /** Background color of the table wrapper */
  backgroundColor?: string;
  /** Border color */
  borderColor?: string;
}