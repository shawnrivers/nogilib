import * as React from 'react';
import { useAppContext } from 'client/hooks/useAppContext';

export const LocalizedList: React.FC<{
  list: string[];
}> = props => {
  const { language } = useAppContext();

  let comma = ', ';
  if (language === 'ja' || language === 'zh') {
    comma = '、';
  }

  return <>{props.list.join(comma)}</>;
};
