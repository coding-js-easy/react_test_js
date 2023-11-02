import React, { SVGProps } from "react";

const Expand: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 2.95835C0 1.38481 1.27679 0.113525 2.85714 0.113525H11.4286C13.0089 0.113525 14.2857 1.38481 14.2857 2.95835C14.2857 4.5319 13.0089 5.80318 11.4286 5.80318H5.71429V11.4928C5.71429 13.0664 4.4375 14.3377 2.85714 14.3377C1.27679 14.3377 0 13.0664 0 11.4928V2.95835ZM37.1429 25.717C38.7232 25.717 40 26.9883 40 28.5618V37.0963C40 38.6698 38.7232 39.9411 37.1429 39.9411H28.5714C26.9911 39.9411 25.7143 38.6698 25.7143 37.0963C25.7143 35.5227 26.9911 34.2515 28.5714 34.2515H34.2857V28.5618C34.2857 26.9883 35.5625 25.717 37.1429 25.717Z"
      fill="white"
    />
    <path
      opacity="0.4"
      d="M40 2.85714C40 1.27679 38.7232 0 37.1429 0H28.5714C26.9911 0 25.7143 1.27679 25.7143 2.85714C25.7143 4.4375 26.9911 5.71429 28.5714 5.71429H34.2857V11.4286C34.2857 13.0089 35.5625 14.2857 37.1429 14.2857C38.7232 14.2857 40 13.0089 40 11.4286V2.85714ZM2.85714 25.7143C1.27679 25.7143 0 26.9911 0 28.5714V37.1429C0 38.7232 1.27679 40 2.85714 40H11.4286C13.0089 40 14.2857 38.7232 14.2857 37.1429C14.2857 35.5625 13.0089 34.2857 11.4286 34.2857H5.71429V28.5714C5.71429 26.9911 4.4375 25.7143 2.85714 25.7143Z"
      fill="white"
    />
  </svg>
);

export default Expand;