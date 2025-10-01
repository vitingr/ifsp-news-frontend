import type { FC } from 'react'

export const Loading: FC = () => {
  return (
    <svg
      className="pencil"
      height="200px"
      viewBox="0 0 200 200"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="pencil-eraser">
          <rect height="30" rx="5" ry="5" width="30"></rect>
        </clipPath>
      </defs>
      <circle
        className="pencil__stroke"
        fill="none"
        r="70"
        stroke="currentColor"
        strokeDasharray="439.82 439.82"
        strokeDashoffset="439.82"
        strokeLinecap="round"
        strokeWidth="2"
        transform="rotate(-113,100,100)"
      ></circle>
      <g className="pencil__rotate" transform="translate(100,100)">
        <g fill="none">
          <circle
            className="pencil__body1"
            r="64"
            stroke="hsl(223,90%,50%)"
            strokeDasharray="402.12 402.12"
            strokeDashoffset="402"
            strokeWidth="30"
            transform="rotate(-90)"
          ></circle>
          <circle
            className="pencil__body2"
            r="74"
            stroke="hsl(223,90%,60%)"
            strokeDasharray="464.96 464.96"
            strokeDashoffset="465"
            strokeWidth="10"
            transform="rotate(-90)"
          ></circle>
          <circle
            className="pencil__body3"
            r="54"
            stroke="hsl(223,90%,40%)"
            strokeDasharray="339.29 339.29"
            strokeDashoffset="339"
            strokeWidth="10"
            transform="rotate(-90)"
          ></circle>
        </g>
        <g className="pencil__eraser" transform="rotate(-90) translate(49,0)">
          <g className="pencil__eraser-skew">
            <rect
              fill="hsl(223,90%,70%)"
              height="30"
              rx="5"
              ry="5"
              width="30"
            ></rect>
            <rect
              clipPath="url(#pencil-eraser)"
              fill="hsl(223,90%,60%)"
              height="30"
              width="5"
            ></rect>
            <rect fill="hsl(223,10%,90%)" height="20" width="30"></rect>
            <rect fill="hsl(223,10%,70%)" height="20" width="15"></rect>
            <rect fill="hsl(223,10%,80%)" height="20" width="5"></rect>
            <rect
              fill="hsla(223,10%,10%,0.2)"
              height="2"
              width="30"
              y="6"
            ></rect>
            <rect
              fill="hsla(223,10%,10%,0.2)"
              height="2"
              width="30"
              y="13"
            ></rect>
          </g>
        </g>
        <g className="pencil__point" transform="rotate(-90) translate(49,-30)">
          <polygon fill="hsl(33,90%,70%)" points="15 0,30 30,0 30"></polygon>
          <polygon fill="hsl(33,90%,50%)" points="15 0,6 30,0 30"></polygon>
          <polygon fill="hsl(223,10%,10%)" points="15 0,20 10,10 10"></polygon>
        </g>
      </g>
    </svg>
  )
}
