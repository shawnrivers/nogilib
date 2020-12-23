import * as React from 'react';
import { ThemeContext } from 'client/store/theme/context';

export const useThemeContext = () => React.useContext(ThemeContext);
