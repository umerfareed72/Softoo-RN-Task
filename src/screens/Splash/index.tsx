import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import styles from './styles';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation?.replace('Drawer');
    }, 1500);
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.textStyle}>Softoo</Text>
    </SafeAreaView>
  );
};

export default Splash;
