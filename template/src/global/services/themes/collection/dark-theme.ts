import {DarkTheme as ReactNavigationDarkTheme} from '@react-navigation/native';

export const DarkTheme = {
  ...ReactNavigationDarkTheme,
  name: 'dark',
  barStyle: 'light-content' as const,
};
