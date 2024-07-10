import React from 'react';

interface IconProps {
  size?: string;  // Optional size prop to control the icon size, default is '1em'
  color?: string; // Optional color prop to control the icon color, default is 'currentColor'
}

export const LinkedIn: React.FC<IconProps> = ({ size = '1em', color = 'currentColor' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
      <path fill={color} d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"></path>
    </svg>
  );
};


export const Instagram: React.FC<IconProps> = ({ size = '1em', color = 'currentColor' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path fill={color} d="M13.61 12.243a1.6 1.6 0 1 1-1.56-1.63a1.62 1.62 0 0 1 1.56 1.63"></path>
      <path fill={color} d="M14.763 7.233H9.338a2.024 2.024 0 0 0-2.024 2.024v5.547a2.024 2.024 0 0 0 2.024 2.024h5.425a2.024 2.024 0 0 0 2.024-2.024V9.267a2.026 2.026 0 0 0-2.024-2.034m-2.713 7.723a2.703 2.703 0 1 1 2.642-2.703a2.672 2.672 0 0 1-2.642 2.703m2.936-5.405a.496.496 0 0 1-.496-.506a.506.506 0 1 1 1.012 0a.496.496 0 0 1-.557.506z"></path>
      <path fill={color} d="M12.05 2a10 10 0 1 0-.1 20a10 10 0 0 0 .1-20m6.073 12.702a3.39 3.39 0 0 1-3.41 3.411H9.389a3.392 3.392 0 0 1-3.411-3.41V9.378a3.39 3.39 0 0 1 3.41-3.411h5.325a3.39 3.39 0 0 1 3.41 3.41z"></path>
    </svg>
  );
};

export const Email: React.FC<IconProps> = ({ size = '1em', color = 'currentColor' }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <g fill="none">
          <path fill={color} d="M3 5v-.5a.5.5 0 0 0-.5.5zm18 0h.5a.5.5 0 0 0-.5-.5zM3 5.5h18v-1H3zM20.5 5v12h1V5zM19 18.5H5v1h14zM3.5 17V5h-1v12zM5 18.5A1.5 1.5 0 0 1 3.5 17h-1A2.5 2.5 0 0 0 5 19.5zM20.5 17a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5z"></path>
          <path stroke={color} strokeLinecap="round" strokeLinejoin="round" d="m3 5l9 9 9-9"></path>
        </g>
      </svg>
    );
  };

  export const Download: React.FC<IconProps> = ({ size = '1em', color = 'currentColor' }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <path fill={color} d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z"></path>
      </svg>
    );
  };



