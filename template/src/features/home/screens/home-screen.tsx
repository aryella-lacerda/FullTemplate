import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

import {Text} from 'react-native-ama';

import {useTranslation} from '@services/i18n/i18n-hooks';
import {useStylesWithTheme} from '@services/themes/theme-hooks';
import type {Theme} from '@services/themes/theme-interfaces';

export function HomeScreen(): JSX.Element {
  const {t} = useTranslation('home');
  const {styles, theme} = useStylesWithTheme(getStyles);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={theme.barStyle} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <Text style={styles.text}>{t('welcome')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const getStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: theme.colors.text,
      fontSize: 16,
    },
  });

  return styles;
};
