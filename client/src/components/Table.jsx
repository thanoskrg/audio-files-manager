import React from 'react';
import { func, string, number } from 'prop-types';

export const TableContainer = ({ children }) => (
  <div className="w-100 mw8 bg-white br2 overflow-hidden shadow-1">
    {children}
  </div>
);

export const Table = ({ children }) => (
  <table className="w-100" cellSpacing="0">
    {children}
  </table>
);

export const TableHeader = ({ children }) => (
  <thead>{children}</thead>
);

export const TableHeaderCell = ({ children }) => (
  <th className="f6 fw7 bb b--black-10 tl pv3 pr3">
    {children}
  </th>
);

export const TableBody = ({ children }) => (
  <tbody className="lh-copy">{children}</tbody>
);

export const TableRow = ({ children }) => (
  <tr>{children}</tr>
);

export const TableCell = ({ children, colspan }) => (
  <td
    colSpan={colspan}
    className={'f6 fw6 pv3 pr3 bb b--black-10'}>
    {children}
  </td>
);

TableCell.propTypes = {
  colspan: number
};

TableCell.defaultProps = {
  colspan: 1
};

export const TableInlineButton = ({
  children,
  className,
  onClick
}) => (
  <button
    className={`flex justify-center items-center bg-transparent bn pointer w-100 ${className}`}
    onClick={e => {
      e.stopPropagation();
      onClick(e);
    }}
  >
    {children}
  </button>
);

TableInlineButton.propTypes = {
  className: string,
  onClick: func.isRequired
};

TableInlineButton.defaultProps = {
  className: ''
};