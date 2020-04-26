import * as React from "react";
import { FormattedMessage } from "react-intl";

interface MessageProps {
  text: string;
}

export const Message = ({ text }: MessageProps) => (
  <FormattedMessage {...({ id: text } as any)} />
);
