export type Site = {
  title: string;
  url: string;
};

export type TitleKeyArray<T extends string | number | symbol> = {
  title: T;
  key: string;
}[];
