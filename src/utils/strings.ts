import { Language } from "utils/constants";

export const toCdNumber = (num: string | number) => {
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
) => {
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
