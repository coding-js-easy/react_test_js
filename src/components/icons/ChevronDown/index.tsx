import React, { SVGProps } from "react";

const ChevronDown: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    color="#000"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.071 10.571-5.657 5.657a2 2 0 0 1-2.828 0L4.929 10.57"
    />
  </svg>
);

export default ChevronDown;
