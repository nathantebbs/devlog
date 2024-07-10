import * as React from "react"
import { luckiest_guy } from "~/ui/fonts"
const SvgComponent = ({ width = 128, height = 64 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 64"
    width={width}
    height={height}
  >
    <text
      className={luckiest_guy.className}
      style={{
        fill: "#fff",
        fontSize: 24,
      }}
      x="50%"
      y="50%"
      transform="translate(11.52 30.85)"
    >
      <tspan x={0} y={0}>
        {"DevLog"}
      </tspan>
    </text>
    <path
      d="M75.43 51.31v-7.92c0-4.6-4.13-4.95-6.38-2.47L57.36 53.79c-2.25 2.48-6.38 2.13-6.38-2.47V43.4c0-4.6 4.13-4.95 6.38-2.47L69.05 53.8c2.25 2.48 6.38 2.13 6.38-2.47Z"
      style={{
        fill: "none",
        stroke: "#38bdff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 4,
      }}
    />
  </svg>
)
export default SvgComponent

