import * as React from "react";
import { injectIntl } from "react-intl";
import { Language } from "utils/constants";
import { toCdNumber } from "utils/strings";

interface LocalizedNumberProps {
  num: string | number;
  type?: "cd" | "row";
  intl: any;
}

export const LocalizedNumber = injectIntl(
  ({ num, type, intl: { locale } }: LocalizedNumberProps) => {
    const counter = React.useMemo(() => {
      switch (type) {
        case "cd":
          return locale === Language.Ja ? "枚" : "张";
        case "row":
          return locale === Language.Ja ? "列" : "排";
        default:
          return locale === Language.Ja ? "枚" : "张";
      }
    }, [type]);

    if (locale === Language.En) {
      return type !== "cd" ? (
        <>
          {toCdNumber(num)} {type}
        </>
      ) : (
        <>{toCdNumber(num)}</>
      );
    }

    if (Number(num)) {
      if (locale === Language.Ja) {
        return <>{num + counter}目</>;
      }
      return <>第{num + counter}</>;
    }

    return <>under</>;
  }
);
