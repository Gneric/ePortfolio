import React from "react";
export const AddCircle = (props) => (
    <svg
        aria-hidden="true"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
      <path
        d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
        // stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
)