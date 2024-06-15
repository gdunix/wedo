const SvgWrappper = ({ children, ...rest }: { children: React.ReactNode }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...rest}
  >
    {children}
  </svg>
);

export default SvgWrappper;
