type CheckIconProps = React.SVGAttributes<SVGElement> & {
  title?: string;
};

export const CheckIcon: React.FC<CheckIconProps> = props => {
  const { title, ...svgProps } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...svgProps}
    >
      {title && <title>{title}</title>}
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9 16.17L5.53 12.7a.996.996 0 10-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 10-1.41-1.41L9 16.17z" />
    </svg>
  );
};
