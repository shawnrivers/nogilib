import * as React from 'react';
import { toCdNumber } from 'utils/strings';
import { useAppContext } from 'client/hooks/useAppContext';

export const LocalizedNumber: React.FC<{
  num: string | number;
  type?: 'cd' | 'row';
}> = props => {
  const { num, type } = props;
  const { language } = useAppContext();
  const counter = React.useMemo(() => {
    switch (type) {
      case 'cd':
        return language === 'ja' ? '枚' : '张';
      case 'row':
        return language === 'ja' ? '列' : '排';
      default:
        return language === 'ja' ? '枚' : '张';
    }
  }, [type, language]);

  if (language === 'en') {
    return type !== 'cd' ? (
      <>
        {toCdNumber(num)} {type}
      </>
    ) : (
      <>{toCdNumber(num)}</>
    );
  }

  if (Number(num)) {
    if (language === 'ja') {
      return <>{num + counter}目</>;
    }
    return <>第{num + counter}</>;
  }

  return <>under</>;
};
