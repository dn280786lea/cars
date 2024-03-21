import React from 'react';

const Kitchen = ({ width = 20, height = 20 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.8334 20.5V4.5C19.4121 10.6253 19.1361 15.592 19.1667 20.5H25.8334ZM25.8334 20.5V28.5H24.5001V24.5M11.1667 5.83333V28.5M7.16675 5.83333V9.83333C7.16675 10.8942 7.58818 11.9116 8.33832 12.6618C9.08847 13.4119 10.1059 13.8333 11.1667 13.8333C12.2276 13.8333 13.245 13.4119 13.9952 12.6618C14.7453 11.9116 15.1667 10.8942 15.1667 9.83333V5.83333"
      stroke="#101828"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Kitchen;
