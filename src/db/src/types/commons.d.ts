export type Site = {
  title: string;
  url: string;
};

export type ImageUrl = {
  sm: string;
  md: string;
  lg: string;
};

export type TitleKeyArray<T extends string | number | symbol> = {
  title: T;
  key: string;
}[];

export type NameKeyArray<T extends string | number | symbol> = {
  name: T;
  key: string;
}[];
