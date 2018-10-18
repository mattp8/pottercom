import React from 'react';

const BoltSVG = ({ fill, width = 14, height = 24, ...props }) => (
  <svg width={width} height={height} {...props}>
    <path
      d="M13.917 8.231a.41.41 0 0 0-.37-.231H8.697L13.483.614a.392.392 0 0 0 .013-.407.41.41 0 0 0-.359-.207H6.591a.41.41 0 0 0-.366.221l-6.137 12a.392.392 0 0 0 .018.389c.075.118.206.19.348.19h4.207L.077 23.445a.396.396 0 0 0 .163.496.414.414 0 0 0 .527-.083l13.092-15.2a.393.393 0 0 0 .058-.427z"
      fill={fill}
      fillRule="evenodd"
    />
  </svg>
);

export default BoltSVG;
