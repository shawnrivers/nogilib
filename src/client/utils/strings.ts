import { Language } from "client/utils/constants";
import { FocusPerformersType } from "server/utils/constants";

export const getUrlWithTrailingSlash = (url: string): string =>
  url.slice(-1) !== "/" ? url + "/" : url;

export const classNames = (
  ...classNames: (string | undefined)[]
): string | undefined =>
  classNames.reduce((acc, curr) => (curr ? acc + " " + curr : acc));

export const toCdNumber = (num: string | number): string => {
  const number = Number(num);

  if (number) {
    const remainderByTen = number % 10;
    const remainderByHundred = number % 100;
    if (remainderByTen === 1 && remainderByHundred !== 11) {
      return num + "st.";
    }
    if (remainderByTen === 2 && remainderByHundred !== 12) {
      return num + "nd.";
    }
    if (remainderByTen === 3 && remainderByHundred !== 13) {
      return num + "rd.";
    } else {
      return num + "th.";
    }
  }

  return "Under";
};

export const toNumberWithLocale = (
  num: string,
  language: string,
  type?: "cd" | "row"
): string => {
  let counter = {
    ja: "",
    zh: "",
  };

  switch (type) {
    case "cd":
      counter = {
        ja: "枚",
        zh: "张",
      };
      break;
    case "row":
      counter = {
        ja: "列",
        zh: "排",
      };
      break;
    default:
      counter = {
        ja: "枚",
        zh: "张",
      };
      break;
  }

  if (language === Language.En) {
    return toCdNumber(num);
  }

  const number = Number(num);

  if (number) {
    if (language === Language.Ja) {
      return num + counter + "目";
    }
    return "第" + num + counter;
  }

  return "under";
};

export const getFocusPerformersText = (
  focusPerformers: {
    name: string[];
    type: FocusPerformersType;
  },
  locale: string
): string => {
  let comma: string;
  switch (locale) {
    case Language.Zh:
      comma = "、";
      break;
    case Language.Ja:
      comma = "・";
      break;
    default:
      comma = ", ";
      break;
  }

  if (focusPerformers.name.length > 0) {
    if (focusPerformers.type === FocusPerformersType.Center) {
      return (
        "C: " + focusPerformers.name.reduce((acc, curr) => acc + comma + curr)
      );
    }
    return focusPerformers.name.reduce((acc, curr) => acc + comma + curr);
  }
  return "";
};
