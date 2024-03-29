type CloseIconProps = React.SVGAttributes<SVGElement> & {
  title?: string;
};

export const CloseIcon: React.FC<CloseIconProps> = props => {
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
      <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
    </svg>
  );
};
