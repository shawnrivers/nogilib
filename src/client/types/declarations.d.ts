declare module '*.css' {
  const classes: { [className: string]: string };
  export default classes;
}

declare module '*.scss' {
  const classes: { [className: string]: string };
  export default classes;
}

declare module '*.png';
declare module '*.jpg';
