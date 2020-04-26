import * as React from "react";
import { injectIntl } from "react-intl";
import { Language } from "client/utils/constants";

interface LocalizedListProps {
  list: string[];
  intl: any;
}

export const LocalizedList = injectIntl(
  ({ list, intl: { locale } }: LocalizedListProps) => {
    let comma: string;
    switch (locale) {
      case Language.Zh:
        comma = "、";
        break;
      case Language.Ja:
        comma = "、";
        break;
      default:
        comma = ", ";
        break;
    }

    return <>{list.join(comma)}</>;
  }
);
