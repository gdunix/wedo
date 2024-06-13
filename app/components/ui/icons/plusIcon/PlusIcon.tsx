import SvgWrapper from "../SvgWrapper";

const PlusIcon = () => (
  <SvgWrapper>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M6 12h12" />
      <path d="M12 18V6" />
    </g>
  </SvgWrapper>
);

export default PlusIcon;
